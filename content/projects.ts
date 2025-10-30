import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "uav-design",
    title: "Design of UAV and 40-seater Jet Aircraft",
    course: "Flight Dynamics & Aircraft Preliminary Design",
    description:
      "Comprehensive aircraft design project covering aerodynamic analysis, performance calculations, and preliminary design of both unmanned aerial vehicle and commercial aircraft configurations.",
    technologies: [
      "Aircraft Design",
      "Aerodynamics",
      "Performance Analysis",
      "CAD",
    ],
    year: "2022",
  },
  {
    id: "diffuser-flow-patterns",
    title: "Flow Patterns in Four Diffusers with Increasing Divergence Angle",
    course: "Aircraft Propulsion",
    description:
      "Detailed analysis of flow behavior in diffusers with varying divergence angles, studying pressure recovery, flow separation, and performance characteristics critical for propulsion system design.",
    technologies: ["CFD", "Flow Analysis", "Propulsion", "Diffuser Design"],
    year: "2022",
  },
];
