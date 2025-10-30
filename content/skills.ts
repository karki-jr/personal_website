import type { Skill } from "@/lib/types";

export const skills: Skill[] = [
  {
    category: "CAD & Analysis",
    skills: [
      { name: "CATIA", proficiency: 5 },
      { name: "SolidWorks", proficiency: 4 },
      { name: "OpenFOAM", proficiency: 4 },
      { name: "ANSYS Fluent", proficiency: 4 },
    ],
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", proficiency: 4 },
      { name: "C", proficiency: 3 },
    ],
  },
  {
    category: "Tools & Software",
    skills: [
      { name: "Linux", proficiency: 4 },
      { name: "LaTeX (Overleaf)", proficiency: 4 },
      { name: "Microsoft Office", proficiency: 5 },
      { name: "Adobe Creative Cloud", proficiency: 3 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Time Management", proficiency: 5 },
      { name: "Teamwork", proficiency: 5 },
      { name: "Problem-solving", proficiency: 5 },
      { name: "Documentation", proficiency: 4 },
    ],
  },
];
