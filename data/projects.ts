import type { Project } from "@/lib/types";

/**
 * Central project data. Everything on the homepage, /projects and
 * /projects/[slug] is rendered from this file.
 *
 * Rules: only facts that were provided (resume + brief). `null` = not provided
 * yet and renders as a visible placeholder. Never guess repo/demo URLs,
 * metrics or roles.
 */
export const projects: Project[] = [
  {
    slug: "ecoquest",
    title: "EcoQuest",
    categoryLabel: "AI / Mobile / Education",
    meta: "2025 · Degree final year project",
    categories: ["Software", "AI", "Mobile"],
    featured: true,
    accent: "#60a5fa",
    summary:
      "AI-powered Flutter app that promotes biodiversity education. Young learners explore flora and fauna outdoors with offline species recognition, Gemini-powered Q&A and gamified learning.",
    technologies: [
      "Flutter",
      "Dart",
      "TensorFlow Lite",
      "Gemini",
      "Supabase",
      "Google Sign-In",
    ],
    image: "/assets/ecoquest/ecoquest-cover.jpg",
    repoUrl: "https://github.com/Aomiru/EcoQuest",
    demoUrl: "https://drive.google.com/drive/folders/18ubm61p2zJ6dTxdP3EfYHsN69cG78eGc?usp=sharing",
    demoLabel: "Download APK",
    sdgs: ["SDG 4 — Quality Education", "SDG 15 — Life on Land"],

    overview:
      "EcoQuest is an AI-powered Flutter mobile application that promotes biodiversity education through interactive species recognition. It is an educational eco-tourism app designed for primary school and young learners to explore flora and fauna outdoors, combining education, gamification, AI, and outdoor exploration. It is my degree final year project.",
    problem:
      "The goal is to make outdoor exploration of flora and fauna educational for primary school and young learners, using gamification and AI.",
    solution:
      "A Flutter mobile app that recognises species using an on-device TensorFlow Lite model (so it works offline) and shows relevant biodiversity information, uses Gemini for learning prompts and Q&A, and adds quests, journals, quizzes, badges and XP to keep learners engaged.",
    features: [
      "Flora and fauna recognition",
      "Offline species recognition using TensorFlow Lite",
      "Gemini-powered learning prompts and Q&A",
      "AR species information",
      "Quests",
      "Learning journals",
      "Species collection",
      "Reflection and sharing",
      "Species facts",
      "Location information",
      "Notes",
      "Quizzes",
      "Badges and achievements",
      "XP system",
      "Daily and weekly activities",
      "Leaderboard",
      "QR functionality",
      "Tutorial / onboarding system",
    ],
    contribution:
      "Developed EcoQuest as my degree final year project: the Flutter app, its AI-powered species recognition and biodiversity information, and the gamified learning features (quizzes, achievements and digital species collections).",
    architecture: [
      { layer: "Client", detail: "Flutter / Dart mobile application." },
      {
        layer: "On-device ML",
        detail:
          "TensorFlow Lite model (species_model.tflite) with labels in assets/models/labels.txt, used for offline species recognition.",
      },
      { layer: "AI", detail: "Gemini for learning prompts and Q&A." },
      { layer: "Backend", detail: "Supabase for data and image synchronization." },
      { layer: "Auth", detail: "Google Sign-In." },
    ],
    screenshots: [
      "/assets/ecoquest/ecoquest-1.png",
      "/assets/ecoquest/ecoquest-6.jpg",
      "/assets/ecoquest/ecoquest-2.jpg",
      "/assets/ecoquest/ecoquest-5.jpg",
      "/assets/ecoquest/ecoquest-3.jpg",
    ],
    challenges: null,
    learned: null,
  },
  {
    slug: "khar-hostel-portal",
    title: "KHAR Hostel Registration Portal",
    categoryLabel: "Web Application / Backend",
    meta: "2025",
    categories: ["Software", "Web"],
    featured: true,
    accent: "#818cf8",
    summary:
      "Web-based hostel registration and management system developed for UPSI, with individual and group registration, status tracking, an admin dashboard and role-based access.",
    technologies: ["Laravel", "Livewire", "PHP", "MySQL", "Spatie Roles & Permissions"],
    image: "assets/khar-hostel-portal/hostel-cover.png",
    repoUrl: "https://github.com/Aomiru/KHARHostelPortal.git",
    demoUrl: null,

    overview:
      "A web-based hostel registration and management system developed for UPSI to streamline student hostel registration and administrative management. It supports individual and group registrations, with a separate admin side for managing them.",
    problem:
      "Hostel registration and management for UPSI, including who can apply for which hostel block and how many students each house can hold.",
    solution:
      "A Laravel and Livewire web application with student and admin interfaces, MySQL for storage and Spatie Roles & Permissions for role-based access. It automates group registration workflows, tracks application status and gives administrators a dashboard.",
    features: [
      "Student registration",
      "Individual and group registrations",
      "Automated group registration workflows",
      "Status tracking",
      "Administrative dashboard for hostel management",
      "Role-based access",
      "Separate student and admin interfaces",
      "Room capacity management (example structure: 4 rooms, 12 students per house)",
      "Block-specific eligibility rules, such as male-only blocks",
    ],
    demonstrates: [
      "CRUD development",
      "Authentication",
      "Authorization",
      "Database design",
      "Role-based access control",
      "Backend development",
      "Laravel / Livewire development",
    ],
    contribution:
      "Developed the web-based portal to streamline student hostel registration and administrative management.",
    architecture: [
      { layer: "Framework", detail: "Laravel (PHP)." },
      { layer: "UI", detail: "Livewire components for the student and admin interfaces." },
      { layer: "Data", detail: "MySQL." },
      { layer: "Access control", detail: "Spatie Roles & Permissions for roles and permissions." },
    ],
    screenshots: [
      "assets/khar-hostel-portal/hostel-5.png",
      "assets/khar-hostel-portal/hostel-4.png",
      "assets/khar-hostel-portal/hostel-3.png",
    ],
    challenges: null,
    learned: null,
  },
  {
    slug: "mini-rag",
    title: "Resume & Document Q&A Assistant",
    categoryLabel: "AI / RAG / Full-Stack",
    categories: ["AI", "Software", "Web"],
    featured: true,
    accent: "#22d3ee",
    summary:
      "A RAG assistant that answers questions over uploaded PDFs — a resume alongside employment letters and NDAs — and can compare them, e.g. checking whether an offer's terms actually suit the resume.",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "Gemini API",
      "sentence-transformers",
      "Tesseract OCR",
    ],
    image: "/assets/rag/rag-cover.png",
    repoUrl: "https://github.com/amirulaizad544-aomiru/RAGtest.git",
    demoUrl: "https://resume-j0h9hbm1u-pesona-amirul.vercel.app/",

    overview:
      "A personal document Q&A assistant, built by hand with no RAG framework. Upload a resume plus other documents, such as employment letters and NDAs, and ask questions across them, including whether a document is actually a good fit against the resume. Usable from a CLI or a streaming chat web UI.",
    problem:
      "Checking whether an offer or contract actually suits your resume means rereading both side by side, or trusting a chatbot that guesses once a document doesn't actually contain the answer.",
    solution:
      "A Python RAG pipeline with a CLI and a streaming Next.js chat UI. Your resume is kept in its own memory, separate from other uploaded PDFs, and an LLM router decides per-question whether to pull the resume in for comparison. PDFs are chunked by their own section headers, embedded locally, and cached to disk so re-embedding only happens when a PDF changes; scanned PDFs fall back to OCR automatically.",
    features: [
      "Compares documents against the resume, e.g. checking whether an offer suits",
      "Streaming answers as tokens arrive, instead of waiting for the full response",
      "OCR fallback for scanned PDFs with no text layer",
      "Section-aware chunking by each PDF's own headers",
      "Disk-cached index, only rebuilt when a PDF actually changes",
    ],
    demonstrates: [
      "RAG pipeline",
      "LLM-as-router",
      "Retrieval",
      "Prompting",
      "Full-stack AI development",
    ],
    contribution: "Built solo, end-to-end: the retrieval pipeline, CLI, backend and web UI.",
    architecture: [
      { layer: "Backend", detail: "Python with FastAPI." },
      { layer: "Frontend", detail: "Next.js chat UI with streaming answers." },
      { layer: "Embedding", detail: "sentence-transformers, run locally." },
      { layer: "Generation", detail: "Gemini API, also used for memory routing." },
      { layer: "OCR", detail: "Tesseract, used only when a PDF has no text layer." },
      { layer: "Retrieval", detail: "Local vector search with two indexes: main and resume." },
    ],
    screenshots: [
      "assets/khar-hostel-portal/hostel-5.png",
      "assets/khar-hostel-portal/hostel-4.png",
      "assets/khar-hostel-portal/hostel-3.png",
      "assets/khar-hostel-portal/hostel-2.png",
      "assets/khar-hostel-portal/hostel-1.png"
    ],
    challenges: null,
    learned: null,
  },
  {
    slug: "resource-cleanup-audit",
    title: "Resource Cleanup & Audit System",
    categoryLabel: "Cloud / Automation / Cost Governance",
    meta: "2026",
    categories: ["Cloud", "Automation"],
    featured: true,
    accent: "#a78bfa",
    summary:
      "A cloud cost-governance tool that scans Google Cloud projects for unused or forgotten resources and flags them for review, while keeping essential ones like the active revision.",
    technologies: ["Google Cloud Platform", "Cloud Run", "Cloud Storage"],
    image: "/assets/cloud/cloud-cover.png",
    repoUrl: null,
    demoUrl: null,
    hideLinks: true,

    overview:
      "A cloud cost-governance tool that scans Google Cloud projects to find unused or forgotten resources: old Cloud Run revisions, orphaned storage folders and unused container images that quietly add cost over time.",
    problem:
      "Unused or forgotten cloud resources quietly rack up cost over time and are hard to find across many projects.",
    solution:
      "A multi-service pipeline that can audit multiple projects at once without timing out, and handles cleanup safely by keeping essential resources (like the active revision) while flagging the rest for review.",
    features: [
      "Scans Google Cloud projects for unused or forgotten resources",
      "Finds old Cloud Run revisions",
      "Finds orphaned storage folders",
      "Finds unused container images",
      "Audits multiple projects at once without timing out",
      "Keeps essential resources (like the active revision) and flags the rest for review",
    ],
    contribution: null,
    architecture: [
      {
        layer: "Pipeline",
        detail:
          "Multi-service pipeline that can audit multiple projects at once without timing out.",
      },
      {
        layer: "Scope",
        detail:
          "Google Cloud projects: Cloud Run revisions, storage folders and container images.",
      },
      {
        layer: "Safety",
        detail:
          "Keeps essential resources (such as the active revision) and flags the rest for review.",
      },
    ],
    screenshots: null,
    challenges: null,
    learned: null,
  },
  {
    slug: "user-journey-builder",
    title: "User Journey Builder",
    categoryLabel: "Developer Tools / Chrome Extension / Automation",
    meta: "2026",
    categories: ["Software", "Web", "Automation"],
    featured: false,
    accent: "#2dd4bf",
    summary:
      "A two-part system for documenting user journeys: a Chrome extension that captures and annotates full-page screenshots, and a platform that turns the annotations into a slide deck and an Excel tracker.",
    technologies: [
      "Chrome extension",
      "Configuration platform",
      "Slide deck generation",
      "Excel export",
    ],
    image: null,
    repoUrl: null,
    demoUrl: null,

    overview:
      "A two-part system for documenting and specifying user journeys. A Chrome extension captures full-page website screenshots and lets users annotate specific interactive elements, identifying the precise actions required to complete a workflow. A companion configuration platform then turns those annotations into deliverables.",
    problem:
      "Documenting and specifying a user journey: identifying the precise actions needed to complete a workflow, and defining how each interactive element should behave.",
    solution:
      "The extension captures and annotates the pages. The configuration platform lets teams define detailed parameters for each annotated element and automatically generates a presentation-ready slide deck of the complete journey, plus a structured Excel tracker from the same data.",
    features: [
      "Full-page website screenshot capture",
      "Annotation of specific interactive elements",
      "Identifies the precise actions needed to complete a workflow",
      "Configuration platform to define parameters for each annotated element",
      "Automatically generated, presentation-ready slide deck of the user journey",
      "Parallel export to a structured Excel tracker",
      "Cross-referencing of every marked element's defined behaviour",
    ],
    contribution:
      "Designed and built the system (both the extension and the configuration platform).",
    architecture: [
      {
        layer: "Chrome extension",
        detail: "Captures full-page screenshots and lets users annotate interactive elements.",
      },
      {
        layer: "Configuration platform",
        detail: "Teams define detailed parameters for each annotated element.",
      },
      {
        layer: "Outputs",
        detail:
          "A slide deck of the complete user journey and a structured Excel tracker, both generated from the same specification data.",
      },
    ],
    screenshots: [],
    challenges: null,
    learned: null,
  },
  {
    slug: "upsi-access",
    title: "UPSI Access",
    categoryLabel: "Achievement / Accessibility / Mobile",
    meta: "2025",
    categories: ["Mobile"],
    featured: false,
    accent: "#38bdf8",
    summary:
      "1st Prize in the Gemini No-Code Hackathon: an accessibility-focused mobile app for campus navigation, with an SOS function for wheelchair users.",
    technologies: [
      "AppSheet",
      "Google Maps",
      "Google My Maps",
      "GPS",
      "Google Maps API",
      "Google Gemini / AI tools",
    ],
    image: null,
    repoUrl: null,
    demoUrl: null,
    award: "1st Prize — Gemini No-Code Hackathon",
    sdgs: ["SDG 10 — Reduced Inequalities"],

    overview:
      "UPSI Access is an accessibility-focused mobile application designed to help users find wheelchair-accessible routes around the university. It won First Prize in the Gemini No-Code Hackathon as an inclusive campus navigation solution. It is built with no-code and Google tooling, and relies on Google services such as Google Maps rather than reimplementing them.",
    problem:
      "Helping users, especially wheelchair users, find accessible routes around the university.",
    solution:
      "An AppSheet application that combines Google Maps and GPS with accessibility information and an SOS emergency assistance function.",
    features: [
      "Accessible route discovery and campus navigation",
      "GPS / location support",
      "Google Maps integration",
      "Accessibility information",
      "SOS emergency assistance function",
    ],
    contribution:
      "Developed the accessibility-focused mobile application (campus navigation and an SOS function for wheelchair users) for the hackathon.",
    architecture: [
      { layer: "App", detail: "AppSheet (no-code)." },
      { layer: "Maps", detail: "Google Maps and Google My Maps." },
      { layer: "Location", detail: "GPS." },
      { layer: "APIs", detail: "Google Maps API." },
      { layer: "AI", detail: "Google Gemini / AI tools." },
    ],
    screenshots: [],
    challenges: null,
    learned: null,
  },
];
