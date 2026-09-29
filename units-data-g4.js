// English Quest — Grade 4 Unit data (separate from units-data.js which is Grade 5)
// Add a new unit's content by filling in title / vocabulary / grammar / exercises below —
// Lessons (Grade 4) and Unit (Grade 4) pages both read from this list automatically.
//
// status: "not-started" | "in-progress" | "completed"
// vocabulary / grammar / exercises: relative URL to the real page for that
// unit's activity, or null if that activity isn't built yet (shows as
// "Sắp có nội dung" / coming soon on the Unit page).

const EQ_UNITS = [
  { id: 1, title: "My Friends", status: "in-progress", vocabulary: "vocabulary-g4.html?unit=g4-unit1", grammar: null, exercises: "unit1-exercises-g4.html" },
  { id: 2, title: "Time And Daily Routines", status: "in-progress", vocabulary: "vocabulary-g4.html?unit=g4-unit2", grammar: null, exercises: null },
  { id: 3, title: "My Week", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 4, title: "My Birthday Party", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 5, title: "Things We Can Do", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 6, title: "Our School Facilities", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 7, title: "Our Timetables", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 8, title: "My Favourite Subjects", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 9, title: "Our Sports Day", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 10, title: "Our Summer Holidays", status: "not-started", vocabulary: null, grammar: null, exercises: null },
];

const EQ_STATUS_LABEL = {
  "not-started": "Chưa học",
  "in-progress": "Đang học",
  "completed": "Đã hoàn thành",
};
