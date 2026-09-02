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
    title: "All About Me",
    status: "in-progress",
    vocabulary: "vocabulary.html",
    grammar: null,
    exercises: "unit1-exercises.html",
  },
  { id: 2, title: "Our Homes", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 3, title: "My Foreign Friends", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 4, title: "Our Free-time Activities", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 5, title: "My Future Job", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 6, title: "Our School Rooms", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 7, title: "Our Favourite School Activities", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 8, title: "In Our Classroom", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 9, title: "Our Outdoor Activities", status: "not-started", vocabulary: null, grammar: null, exercises: null },
  { id: 10, title: "Our School Trip", status: "not-started", vocabulary: null, grammar: null, exercises: null },
];

const EQ_STATUS_LABEL = {
  "not-started": "Chưa học",
  "in-progress": "Đang học",
  "completed": "Đã hoàn thành",
};
