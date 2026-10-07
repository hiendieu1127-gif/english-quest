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
//       correct, total, percent,                           // first attempt only (L1)
//       answers: [{ question, studentAnswer, correctAnswer, correct }],
//       retryCorrect, retryTotal,                          // retry rounds (L2, L3…), scored separately
//       retries: [{ question, studentAnswer, correctAnswer, correct }],
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
  getFirestore, doc, setDoc, updateDoc, getDoc, getDocs, deleteDoc, collection, serverTimestamp,
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
async function saveResult({ student, unitId, unitLabel, section, correct, total, answers, retries }) {
  const studentKey = slugify(student);
  const id = resultId(studentKey, unitId, section);
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
  // The first attempt (L1) only counts as done once EVERY question has an answer,
  // right or wrong. Until then the Dashboard shows "đang làm", not a partial score.
  const finished = total > 0 && (answers || []).length >= total;
  await setDoc(doc(db, "results", id), {
    student, studentKey, unitId, unitLabel, section,
    status: finished ? "completed" : "in_progress",
    correct, total, percent,
    answers: answers || [],
    retries: retries || [],
    retryCorrect: (retries || []).filter(a => a.correct).length,
    retryTotal: (retries || []).length,
    ...(finished ? { completedAt: serverTimestamp() } : {}),
  }, { merge: true });
  return { correct, total, percent };
}

// Remember which parts of the lesson are finished (+ their answers) on the
// result doc too, so a student can carry on from another device (eq-progress.js).
// updateDoc, not setDoc: if the teacher removed the result, don't bring it back.
async function saveProgress({ student, unitId, section, progress }) {
  const id = resultId(slugify(student), unitId, section);
  await updateDoc(doc(db, "results", id), { progress: JSON.parse(JSON.stringify(progress)) });
}

// ---------- read ----------
// Fetch a single student+unit+section result doc (used by unit1-exercises.js
// to check whether Vocabulary is already completed before swapping the
// "Xong rồi!" message). Returns null if no doc exists yet.
async function getResult({ student, unitId, section }) {
  const studentKey = slugify(student);
  const id = resultId(studentKey, unitId, section);
  const snap = await getDoc(doc(db, "results", id));
  return snap.exists() ? snap.data() : null;
}

// ---------- read (Teacher Dashboard) ----------
async function getAllResults() {
  const snap = await getDocs(collection(db, "results"));
  return snap.docs.map((d) => d.data());
}

// ---------- delete (Teacher Dashboard "Xoá học sinh") ----------
// Removes one student's result doc for one unit+section. Needs a Firestore
// Rules "allow delete" on results/{id}; otherwise this throws permission-denied.
async function deleteResult({ student, studentKey, unitId, section }) {
  const key = studentKey || slugify(student);
  await deleteDoc(doc(db, "results", resultId(key, unitId, section)));
}

window.EQResults = {
  getStudentName, setStudentName,
  markInProgress, saveResult, saveProgress, getResult,
  getAllResults, deleteResult,
  slugify,
};

// Signal to any page waiting on this that Firebase is ready.
window.dispatchEvent(new Event("eq-results-ready"));
