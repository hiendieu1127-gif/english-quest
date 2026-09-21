// ============================================================
// Grade 7 — Unit 1 (Hobbies) — Exercises data
// Source: teacher Hien's screenshots (reading passage + workbook exercises)
// Vietnamese translations: written by Claude, not in source — please review
// Scored sections: Match A-B (5) + True/False (5) + Make sentences (4) = 14 total.
// Reading and Vocabulary are practice-only, not scored/saved.
// ============================================================

const READING_HTML =
  "Do you have any hobbies? If you don't, please start one because having a " +
  "<mark>hobby</mark> is very <mark>beneficial</mark>. Firstly, a hobby gives you something fun to do " +
  "during your leisure time, especially during <mark>pandemics</mark>. During the Covid-19 " +
  "<mark>lockdown</mark>, my family <mark>reads books</mark> and <mark>watches films together</mark>. This makes " +
  "us feel better when we have to stay at home. Secondly, a hobby makes you " +
  "a more interesting person. If you have a lot of experience and skills, you can " +
  "share them with others. I love <mark>travelling</mark>, and I usually share my <mark>experiences</mark> " +
  "with my classmates. This way, I have more friends. Now we have a travel " +
  "group in our class. <mark>Last but not least</mark>, a hobby can help you <mark>develop</mark> new skills. " +
  "If you spend a lot of time on your hobby, your skills will <mark>improve</mark>. My sister " +
  "loves sewing. After sewing for two years, she can now <mark>sew</mark> beautiful doll " +
  "clothes. Those are the reasons why you should have hobbies.";

// ---- Vocabulary (practice only, tap to hear + flip for meaning) ----
const VOCAB_ITEMS = [
  { en: "hobby", vi: "sở thích" },
  { en: "beneficial", vi: "có ích, hữu ích" },
  { en: "pandemics", vi: "đại dịch" },
  { en: "lockdown", vi: "phong tỏa, giãn cách" },
  { en: "reads books", vi: "đọc sách" },
  { en: "watches films together", vi: "cùng nhau xem phim" },
  { en: "travelling", vi: "du lịch" },
  { en: "experiences", vi: "kinh nghiệm, trải nghiệm" },
  { en: "Last but not least", vi: "cuối cùng nhưng không kém phần quan trọng" },
  { en: "develop", vi: "phát triển" },
  { en: "improve", vi: "cải thiện, trở nên tốt hơn" },
  { en: "sew", vi: "may, khâu" },
];

// ---- Match A with B (5 items) — shown one at a time as multiple choice ----
const MATCH_ITEMS = [
  { id: 1, a: "beneficial", b: "helpful or useful", bVi: "có ích hoặc hữu ích" },
  { id: 2, a: "pandemics", b: "diseases throughout the whole country or the whole world", bVi: "dịch bệnh lan rộng khắp một quốc gia hoặc toàn thế giới" },
  { id: 3, a: "lockdown", b: "an emergency situation when people have to stay at home", bVi: "tình huống khẩn cấp khi mọi người phải ở nhà" },
  { id: 4, a: "experiences", b: "things that happen to you and affect your life", bVi: "những điều xảy ra với bạn và ảnh hưởng đến cuộc sống của bạn" },
  { id: 5, a: "improve", b: "become better", bVi: "trở nên tốt hơn" },
];

// ---- True / False / No Information (5 items) ----
const TF_ITEMS = [
  {
    en: "During the lockdown, the author's family reads books and watches the news together.",
    vi: "Trong thời gian phong tỏa, gia đình tác giả đọc sách và xem tin tức cùng nhau.",
    answer: "F",
  },
  {
    en: "Travelling helps the author have more friends.",
    vi: "Du lịch giúp tác giả có thêm nhiều bạn hơn.",
    answer: "T",
  },
  {
    en:
