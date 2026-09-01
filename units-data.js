// English Quest — shared Unit data
// Add a new unit by adding one object here — Lessons page and Unit pages
// both read from this list automatically, no other code changes needed.
//
// status: "not-started" | "in-progress" | "completed"
// vocabulary / grammar / exercises: relative URL to the real page for that
// unit's activity, or null if that activity isn't built yet (shows as
// "Sắp có nội dung" / coming soon on the Unit page).

const EQ_UNITS = [
  {
    id: 1,
    title: "My Friends",
    status: "in-progress",
    vocabulary: "vocabulary.html",
    grammar: null,
    exercises: "unit1-exercises.html",
  },
  { id: 2, title: "My Week", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 3, title: "My House", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 4, title: "Food & Drink", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 5, title: "Free Time", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 6, title: "Weather & Seasons", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 7, title: null, status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 8, title: null, status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 9, title: null, status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 10, title: null, status: "not-started", vocabulary: null, grammar: null, exercises: null },
];

const EQ_STATUS_LABEL = {
  "not-started": "Chưa học",
  "in-progress": "Đang học",
  "completed": "Đã hoàn thành",
};
