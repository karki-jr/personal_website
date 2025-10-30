import type { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "yatri",
    title: "CAE Engineer",
    company: "Yatri Motorcycles",
    location: "Kathmandu, Nepal",
    period: "2024/07 – 2025/06",
    description:
      "Performed static structural and fatigue analyses alongside CFD simulations to evaluate and enhance the structural integrity and aerodynamic performance of the P2 scooter project.",
    technologies: ["3DS", "SIMULIA", "LS-Dyna", "OpenFOAM", "ANSYS"],
    achievements: [
      "Performed stifness and strength analyses for the chassis structure",
      "Conducted fatigue analysis to evaluate long-term structural durability",
      "Conducted CFD simulations and reviewed panel designs to enhance aerodynamic performance",
    ],
  },  
  {
    id: "voyager-mayeen",
    title: "Design & Simulation Engineer",
    company: "Voyager Mayeen",
    location: "Lalitpur, Nepal",
    period: "2023/08 – 2024/03",
    description:
      "Led research and design of advanced propulsion systems, conducting comprehensive CFD, structural, and thermal analyses. Mentored junior engineers and interns while driving innovation in propulsion technology development.",
    technologies: ["CATIA", "SolidWorks", "Python", "OpenFOAM", "ANSYS"],
    achievements: [
      "Designed and optimized propulsion systems using advanced CFD techniques",
      "Conducted multi-physics simulations including structural and thermal analyses",
      "Mentored team of 3 interns in CAD design and simulation methodologies",
      "Improved design efficiency through automated Python workflows",
    ],
  },
  {
    id: "antarikchya-pratisthan",
    title: "Research Intern",
    company: "Antarikchya Pratisthan Nepal",
    location: "Kathmandu, Nepal",
    period: "2022/10 – 2022/12",
    description:
      "Conducted feasibility study for thermal vacuum chamber design for 6U CubeSat testing, contributing to Nepal's space technology development initiatives.",
    technologies: ["Thermal Analysis", "Vacuum Systems", "CubeSat Testing"],
    achievements: [
      "Completed comprehensive feasibility study for 6U CubeSat thermal vacuum chamber",
      "Presented research poster at NAST International Space Day",
      "Contributed to Nepal's first CubeSat testing infrastructure development",
    ],
  },
];
