import type { Experience } from "@/lib/types";

// Only what was provided (resume + brief). `null` renders as a placeholder, so
// nothing is guessed. Newest first.
export const experience: Experience[] = [
  {
    role: "Software Developer",
    company: null, // TODO: add employer name (or leave as a placeholder)
    period: null, // TODO: add start date, e.g. "September 2026 – Present"
    highlights: [
      "Started working as a software developer.",
      // TODO: add real responsibilities, only ones you can stand behind.
    ],
    technologies: [],
  },
  {
    role: "Software Engineer Intern",
    company: "Kasatria Analytics Sdn. Bhd.",
    period: "March 2026 – August 2026",
    highlights: [
      "Built and maintained full-stack web applications using Laravel, Python, JavaScript and MySQL, focusing on scalable and maintainable solutions.",
      "Built Python automation scripts to streamline data processing and reduce repetitive manual tasks.",
      "Developed and maintained cloud-based applications on Google Cloud Platform using Cloud Functions, Cloud Storage and related services.",
      "Designed and integrated RESTful APIs for secure communication between frontend applications, backend services and cloud infrastructure.",
      "Worked on Google Extensions, BigQuery integration, and Next.js internal productivity tools with Google Sheets and Email API integrations.",
      "Worked with Cloud Run, Cloud Functions (Gen 1 / Gen 2), Artifact Registry and Secret Manager, and on GCP resource cleanup and auditing.",
      "Experimented with RAG and AI.",
    ],
    technologies: [
      "Laravel",
      "Python",
      "JavaScript",
      "MySQL",
      "Next.js",
      "Google Cloud Functions",
      "Cloud Storage",
      "Cloud Run",
      "BigQuery",
      "Selenium",
      "Pandas",
    ],
  },
  {
    role: "Working Student Scheme",
    company: "Co-curricular Centre, UPSI",
    period: "January 2025 – August 2025",
    highlights: [
      "Supported IT operations and digital content production to improve internal workflow efficiency and communication.",
      "Designed promotional materials for university events using Adobe Creative Suite to increase event visibility and student engagement.",
      "Created and managed digital content for university social media platforms.",
    ],
    technologies: ["Adobe Creative Suite"],
  },
  {
    role: "Store Staff",
    company: "5 Sen Sdn. Bhd",
    period: "2020",
    highlights: [
      "Assisted customers with product selection and inquiries while delivering efficient and professional customer service.",
      "Processed cash and card transactions accurately using POS systems while maintaining reliable financial records.",
      "Organized product displays and maintained store presentation to improve the customer shopping experience.",
    ],
    technologies: [],
  },
];
