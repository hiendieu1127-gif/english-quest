// ============================================================
// English Quest — Results Service
// Generic for ALL units and BOTH sections (Vocabulary / Exercises).
// Nothing in this file is Unit-1-specific or hard-coded per unit —
// it only ever receives a unitId/unitLabel as data. Adding Unit 2-10
// requires ZERO changes here.
//
// Firestore layout (single flat collection "results"):
//   results/{studentKey}__{unitId}__{section}
//     {
//       student, studentKey, unitId, unitLabel, section,   // "vocabulary" | "exercises"
//       status,                                            // "in_progress" | "completed"
//       correct, total, percent,
//       answers: [{ question, studentAnswer, correctAnswer, correct }],
//       startedAt, completedAt
//     }
//
// Exposed globally as window.EQResults so plain <script> pages
// (vocabulary.js, unit1-exercises.js, teacher-dashboard.js) can call it
// without needing to be ES modules themselves.
// ============================================================
import { firebaseConfig } from "./firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, doc, setDoc, getDoc, getDocs, collection, serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ---------- helpers ----------
function slugify(s) {
  return (s || "")
    .toString()
    .trim()
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // strip Vietnamese diacritics
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "hoc-sinh";
}

function resultId(studentKey, unitId, section) {
  return `${studentKey}__${unitId}__${section}`;
}

// ---------- student name (persisted locally per device) ----------
const STUDENT_LS_KEY = "eq_student_name";

function getStudentName() {
  try { return localStorage.getItem(STUDENT_LS_KEY) || ""; } catch (e) { return ""; }
}
function setStudentName(name) {
  try { localStorage.setItem(STUDENT_LS_KEY, (name || "").trim()); } catch (e) {}
}

// ---------- write ----------
// Call when a student starts a unit/section, so status shows "Đang làm"
// even if they never finish.
async function markInProgress({ student, unitId, unitLabel, section }) {
  const studentKey = slugify(student);
  const id = resultId(studentKey, unitId, section);
  const ref = doc(db, "results", id);
  const existing = await getDoc(ref);
  if (existing.exists() && existing.data().status === "completed") return; // don't downgrade a finished attempt
  await setDoc(ref, {
    student, studentKey, unitId, unitLabel, section,
    status: "in_progress",
    startedAt: existing.exists() && existing.data().startedAt ? existing.data().startedAt : serverTimestamp(),
  }, { merge: true });
}

// Call when a student finishes a unit/section — this is the one
// generic "grade + save" entry point every page calls.
async function saveResult({ student, unitId, unitLabel, section, correct, total, answers }) {
  const studentKey = slugify(student);
  const id = resultId(studentKey, unitId, section);
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
  await setDoc(doc(db, "results", id), {
    student, studentKey, unitId, unitLabel, section,
    status: "completed",
    correct, total, percent,
    answers: answers || [],
    completedAt: serverTimestamp(),
  }, { merge: true });
  return { correct, total, percent };
}

// ---------- read (Teacher Dashboard) ----------
async function getAllResults() {
  const snap = await getDocs(collection(db, "results"));
  return snap.docs.map((d) => d.data());
}

window.EQResults = {
  getStudentName, setStudentName,
  markInProgress, saveResult,
  getAllResults,
  slugify,
};

// Signal to any page waiting on this that Firebase is ready.
window.dispatchEvent(new Event("eq-results-ready"));
