const announcements = [
  {
    id: 1,
    title: "Registration Deadline Extended",
    category: "Academic",
    date: "2026-08-13",
    description:
      "The university has extended the course registration deadline. Students are advised to complete their registration before the new deadline.",
  },
  {
    id: 2,
    title: "Mid-Semester Examination Schedule Released",
    category: "Exams",
    date: "2026-08-12",
    description:
      "The mid-semester examination schedule has been released. Students should check their department notice boards and prepare accordingly.",
  },
  {
    id: 3,
    title: "Campus Wi-Fi Maintenance",
    category: "IT Notice",
    date: "2026-08-11",
    description:
      "Campus Wi-Fi services will undergo scheduled maintenance from 10:00 PM to 12:00 AM. Internet access may be temporarily unavailable.",
  },
  {
    id: 4,
    title: "Library Opening Hours Updated",
    category: "Library",
    date: "2026-08-10",
    description:
      "The university library will now remain open until 9:00 PM on weekdays to support students during the examination preparation period.",
  },
  {
    id: 5,
    title: "New Programming Club Registration Open",
    category: "Clubs",
    date: "2026-08-09",
    description:
      "Students interested in programming, software development, and technology can now register for the new Programming Club.",
  },
  {
    id: 6,
    title: "Scholarship Application Period Open",
    category: "Scholarship",
    date: "2026-08-08",
    description:
      "Eligible students can now apply for the university scholarship program. Make sure to submit all required documents before the deadline.",
  },
  {
    id: 7,
    title: "Student ID Card Replacement",
    category: "Administration",
    date: "2026-08-07",
    description:
      "Students who have lost or damaged their university ID cards can now apply for replacement cards at the student services office.",
  },
  {
    id: 8,
    title: "Web Development Workshop Registration",
    category: "Events",
    date: "2026-08-06",
    description:
      "Registration is now open for the upcoming web development workshop. Students will learn modern frontend development techniques.",
  },
  {
    id: 9,
    title: "Academic Advising Week",
    category: "Academic",
    date: "2026-08-05",
    description:
      "Students are encouraged to meet with their academic advisors to discuss course progress, academic plans, and upcoming semester registration.",
  },
  {
    id: 10,
    title: "Computer Laboratory Maintenance",
    category: "IT Notice",
    date: "2026-08-04",
    description:
      "Computer laboratories in the main technology building will be unavailable during scheduled maintenance this weekend.",
  },
  {
    id: 11,
    title: "Student Feedback Survey",
    category: "Student Affairs",
    date: "2026-08-03",
    description:
      "Students are invited to participate in the university feedback survey and share suggestions about academic and campus services.",
  },
  {
    id: 12,
    title: "Career Fair Registration Open",
    category: "Career",
    date: "2026-08-02",
    description:
      "Students and recent graduates can register for the upcoming career fair, where companies will provide internship and employment opportunities.",
  },
  {
    id: 13,
    title: "New Semester Course Materials Available",
    category: "Academic",
    date: "2026-08-01",
    description:
      "Course materials for several departments have been uploaded to the university learning platform.",
  },
  {
    id: 14,
    title: "Campus Transportation Schedule Updated",
    category: "Campus Services",
    date: "2026-07-31",
    description:
      "The campus transportation schedule has been updated. Students should check the new departure and arrival times.",
  },
  {
    id: 15,
    title: "Student Innovation Competition",
    category: "Competition",
    date: "2026-07-30",
    description:
      "Students are invited to participate in the annual innovation competition and present technology-based solutions to real-world problems.",
  },
  {
    id: 16,
    title: "Mathematics Study Group Registration",
    category: "Academic",
    date: "2026-07-29",
    description:
      "Students can join the mathematics study group for collaborative problem solving and examination preparation.",
  },
  {
    id: 17,
    title: "Cybersecurity Awareness Session",
    category: "Events",
    date: "2026-07-28",
    description:
      "A cybersecurity awareness session will be held for students covering password security, phishing, and safe internet practices.",
  },
  {
    id: 18,
    title: "Student Center Renovation",
    category: "Campus Notice",
    date: "2026-07-27",
    description:
      "Renovation work has started at the student center. Some facilities may be temporarily unavailable during the renovation period.",
  },
  {
    id: 19,
    title: "Final Project Submission Guidelines",
    category: "Academic",
    date: "2026-07-26",
    description:
      "Students should review the updated final project submission guidelines, including formatting, deadlines, and required documentation.",
  },
  {
    id: 20,
    title: "Volunteer Program Applications Open",
    category: "Student Affairs",
    date: "2026-07-25",
    description:
      "Students interested in community service can now apply for the university volunteer program.",
  },
];

export async function GET() {
  return Response.json(announcements);
}