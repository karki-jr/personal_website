export interface ResearchProject {
  id: string
  title: string
  period: string
  institution: string
  supervisor: string
  summary: string
  // technologies: string[]
  // tags: string[]
  status: "completed" | "ongoing"
  links?: {
    paper?: string
    code?: string
    demo?: string
  }
  image?: string;
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
  achievements?: string[]
}

export interface Project {
  id: string
  title: string
  course: string
  description: string
  technologies: string[]
  year: string
}

export interface Skill {
  category: string
  skills: {
    name: string
    proficiency: number // 1-5
  }[]
}

export interface Publication {
  id: string
  title: string
  type: "poster" | "paper" | "presentation" | string;
  venue: string
  year: string
  authors: string[]
  link?: string
}

export interface PersonalInfo {
  name: string
  title: string
  location: string
  email: string
  // phone: string
  linkedin: string
  tagline: string
  bio: string[]
  languages: {
    language: string
    proficiency: string
  }[]
  stats: {
    yearsOfResearch: number
    toolsMastered: number
    projectsCompleted: number
  }
}
