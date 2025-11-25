import type { PersonalInfo } from "@/lib/types";

export const personalInfo: PersonalInfo = {
  name: "Yukesh Karki",
  title:"",
  location: "Birmingham, UK",
  email: "yxk558@student.bham.ac.uk",
  // phone: "",
  linkedin: "https://www.linkedin.com/in/yukesh-karki-2b05bb1a4/",
  // ORCID: "https://orcid.org/0009-0000-8043-5298",
  tagline:
    "PhD Student in Aerospace Engineering at the University of Birmingham",
  bio: [
    "Hi, My name is Yukesh Karki. I completed my Bachelor's degree in Aerospace engineering from IOE Pulchowk, Tribhuvan Univeristy, Nepal. I am driven by deep curiosity about how flight works and how air interacts with moving objects, which has shaped my interest in studying the aerodynamic challenges.",
    "My research focuses on aerodynamics and fluid-structure interaction problems, specially in low Reynolds number flows and flexible wing aerodynamics."
   ],
  languages: [
    { language: "Nepali", proficiency: "Native" },
    { language: "English", proficiency: "Professional" },
  ],
  stats: {
    yearsOfResearch: 2,
    toolsMastered: 8,
    projectsCompleted: 5,
  },
};
