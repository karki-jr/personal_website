"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/content/projects";
import { BookOpen, Calendar } from "lucide-react";

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group"
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-[#3A86FF]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#3A86FF]/10">
        <CardHeader className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="font-display text-xl leading-tight group-hover:text-[#3A86FF] transition-colors">
                {project.title}
              </CardTitle>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-3 w-3" />
                  <span>{project.course}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <CardDescription className="text-sm leading-relaxed">
            {project.description}
          </CardDescription>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">
              {/* Technologies & Methods */}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs border-[#3A86FF]/30 text-[#3A86FF]"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide">
            Academic <span className="text-[#3A86FF]">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {/* Coursework projects demonstrating practical application of aerospace
            engineering principles. */}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Academic Excellence #comment out */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-card/30 backdrop-blur-sm border-border/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-display text-xl font-semibold mb-3">
                Academic Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                These projects represent key coursework in my aerospace
                engineering curriculum, demonstrating proficiency in aircraft
                design principles, propulsion systems, and aerodynamic analysis.
                Each project involved comprehensive theoretical analysis backed
                by computational validation.
              </p>
              <div className="mt-4 flex justify-center">
                <Badge className="bg-[#3A86FF]/20 text-[#3A86FF] border-[#3A86FF]/30">
                  Flight Dynamics & Propulsion Specialist
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
}
