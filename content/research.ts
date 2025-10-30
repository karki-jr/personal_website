import type { ResearchProject } from "@/lib/types";

export const researchProjects: ResearchProject[] = [
  // {
  //   id: "wake-dynamics-flexible-airfoil",
  //   title: "Wake Dynamics of a Flexible Flapping Airfoil",
  //   period: "2024/06 – Present",
  //   institution: "BioFSILab, University of Birmingham",
  //   supervisor: "Dr. Chandan Bose",
  //   summary:
  //     "Investigating wake structures and vortex formation behind flexible flapping airfoils.",
  //   technologies: [
  //     "Python",
  //     "CFD Solvers",
  //     "Flapping Foil Analysis",
  //     "Data Visualization",
  //   ],
  //   tags: ["CFD", "Bio-inspired", "Vortex Dynamics", "Flexible Wings"],
  //   status: "ongoing",
  //   links: {
  //     code: "facebook.com",
  //   },
  // },
  {
    id: "bristled-wings-aerodynamics",
    title: "Aerodynamics of Bristled Wings",
    period: "2024/03 – 2024/06",
    institution: "FOSSEE, IIT Bombay",
    supervisor: "Dr. Chandan Bose",
    summary:
      "Microscopic flying insects like thrips and fairyflies have wings with bristles that enhance aerodynamic efficiency at low Reynolds numbers. Using OpenFOAM, we numerically investigated bristled wings with 4, 5, and 6 bristles at a Reynolds number of 30 and two angles of attack, finding that increasing bristle number and decreasing bristle gap improved force coefficients by reducing flow leakage. The 6-bristled wing achieved drag comparable to a solid wing despite smaller surface area, highlighting the need for systematic studies to optimize bristled wing configurations for lift, drag, and lift-to-drag ratio.",
    // technologies: [""],
    // tags: [""],
    status: "completed",
    links: {
      paper: "https://cfd.fossee.in/case-study-project/case-study-run/270",
    },
  },
  {
    id: "piv-setup-fabrication",
    title:
      "Fabrication of Particle Image Velocimetry (PIV) Setup for Low Reynolds Number",
    period: "2022/06 – 2023/03",
    institution: "IOE Pulchowk, Tribhuvan University",
    supervisor: "Asst. Prof. Neeraj Adhikari, Asst. Prof. Kamal Darlami",
    summary:
      "Bachelor thesis project involving complete design and fabrication of a PIV setup for low Reynolds number flow studies. The project included CATIA-based design, hands-on fabrication, and comparison against numerical simulations, demonstrating excellent correlation between experimental and computational results for low Reynolds number flat plate study.",
    // technologies: [""],
    // tags: [""],
    status: "completed",
    links: {
      paper: "https://elibrary.tucl.edu.np/items/3f7bfa49-9d92-4c3c-98bc-092986f935b1",
    },
  },
];
