import type { Education, HighlightGroup } from "@/lib/types";

export const education: Education[] = [
  {
    institution: "Universiti Pendidikan Sultan Idris (UPSI)",
    programme: "Bachelor of Software Engineering (Software Education) with Honours",
    period: "September 2022 – Graduated",
    grade: "CGPA 3.88",
    achievements: [
      "Dean's Award, Semester 1–8",
      "President, UPSI Software Engineering Association, Session 2024/2025",
    ],
  },
  {
    institution: "Universiti Teknologi MARA (UiTM)",
    programme: "Engineering Foundation",
    period: "July 2021 – June 2022",
    grade: "CGPA 4.00",
  },
  {
    institution: "SMK Saujana Indah, Pulau Pinang",
    programme: "Secondary education",
    period: "",
    grade: "SPM: 8A",
  },
];

export const highlights: HighlightGroup[] = [
  {
    title: "Leadership & Activities",
    // Add photos: put the files in public/assets/activities/ and list them here,
    // e.g. ["/assets/activities/hackathon.jpg", "/assets/activities/robotics.jpg"].
    photos: ["/assets/pic/1.jpeg", 
              "/assets/pic/2.jpeg", 
              "/assets/pic/3.jpeg", 
              "/assets/pic/4.jpeg", 
              "/assets/pic/5.jpeg", 
              "/assets/pic/6.jpeg",
              "/assets/pic/7.jpeg",
              "/assets/pic/8.jpeg",
              "/assets/pic/9.jpeg",
              "/assets/pic/10.jpg",
              "/assets/pic/11.jpg",
              "/assets/pic/12.jpg",
              "/assets/pic/13.jpg",
              "/assets/pic/14.jpg",
              "/assets/pic/15.jpg",
            ],
    sections: [
      {
        label: "2025",
        items: [
          "First Prize, Gemini No-Code Hackathon",
          "President, UPSI Software Engineering Association, Session 2024/2025",
          "Program Director, Celik Digital MADANI Orang Asli",
        ],
      },
      {
        label: "2024",
        items: [
          "STEM Program Leader Award, 17th Residential College Awards Ceremony",
          "Media, Publicity and Public Relations, Student Council of Harun Aminurrashid College, Session 2023/2024",
          "Program Director, National Innovation and Creativity Competition 24'",
          "Program Director, National Malaysia MADANI Robotics Challenge 2024",
          "Delegation Member, Global Outreach UPSI to Vietnam",
          "Delegation Member, Beyond Borders: Humanitarian Mission UPSI for Indonesia 2024",
        ],
      },
    ],
  },
    {
    title: "Certificates",
    sections: [
      {
        items: [
          "Google Ads Professional Certification",
          "Google Analytics 4 (GA4) Certification",
          "General Assembly User Experience Bootcamp",
        ],
      },
    ],
  },
];
