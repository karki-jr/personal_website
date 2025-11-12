"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { researchProjects } from "@/content/research";
import {
  ExternalLink,
  Code,
  FileText,
  Calendar,
  Building,
  User,
} from "lucide-react";
import type { ResearchProject } from "@/lib/types";

const filterCategories = {
  all: "All Projects",
  institution: "Institution",
  topic: "Topic",
  year: "Year",
  tool: "Tool",
};

const institutions = ["University of Birmingham", "IIT Bombay", "IOE Pulchowk"];
const topics = ["CFD", "Bio-inspired", "Experimental", "Low-Re Aerodynamics"];
const years = ["2024", "2023", "2022"];
const tools = ["Python", "OpenFOAM", "ANSYS", "CATIA", "PIV"];

interface ResearchCardProps {
  project: ResearchProject;
  index: number;
}

function ResearchCard({ project, index }: ResearchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, rotateX: 5, rotateY: 5 }}
      className="group perspective-1000"
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-[#5BC0BE]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#5BC0BE]/10">
        <CardHeader className="space-y-4">




          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="font-display text-xl leading-tight group-hover:text-[#5BC0BE] transition-colors">
                {project.title}
              </CardTitle>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{project.period}</span>
                </div>
                {/* <Badge
                  variant={
                    project.status === "ongoing" ? "default" : "secondary"
                  }
                  className={
                    project.status === "ongoing"
                      ? "bg-[#5BC0BE]/20 text-[#5BC0BE] border-[#5BC0BE]/30"
                      : "bg-muted text-muted-foreground"
                  }
                >
                  {project.status}
                </Badge> */}
              </div>
            </div>
          </div>

          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl"
            />
          )}          

          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Building className="h-3 w-3 text-muted-foreground" />
              <span className="text-muted-foreground">
                {project.institution}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <User className="h-3 w-3 text-muted-foreground" />
              <span className="text-muted-foreground">
                Supervisor: {project.supervisor}
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <CardDescription className="text-sm leading-relaxed">
            {project.summary}
          </CardDescription>

          {/* <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs border-[#3A86FF]/30 text-[#3A86FF]"
              >
                {tag}
              </Badge>
            ))}
          </div> */}

          {/* <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs bg-muted/50"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div> */}

          {project.links && (
            <div className="flex items-center space-x-2 pt-2">
              {(project.links.paper || project.links.code) && (
                <a href={project?.links?.paper || project?.links?.code}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 text-xs border-[#5BC0BE]/30 hover:border-[#5BC0BE] hover:bg-[#5BC0BE]/10 bg-transparent group/btn"
                  >
                    <FileText className="h-3 w-3 mr-1 group-hover/btn:text-[#5BC0BE]" />
                    Paper
                    <ExternalLink className="h-3 w-3 ml-1 group-hover/btn:text-[#5BC0BE]" />
                  </Button>
                </a>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ResearchSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(researchProjects);

  const handleFilter = (filterType: string, filterValue?: string) => {
    setActiveFilter(filterType);

    if (filterType === "all") {
      setFilteredProjects(researchProjects);
      return;
    }

    const filtered = researchProjects.filter((project) => {
      switch (filterType) {
        case "institution":
          return institutions.some((inst) =>
            project.institution.includes(inst)
          );
        // case "topic":
        //   return project.tags.some((tag) => topics.includes(tag));
        case "year":
          return years.some((year) => project.period.includes(year));
        // case "tool":
        //   return project.technologies.some((tech) => tools.includes(tech));
        default:
          return true;
      }
    });

    setFilteredProjects(filtered);
  };

  return (
    <section id="research" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide">
            Research <span className="text-[#5BC0BE]">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {/* Exploring the frontiers of aerospace engineering through
            computational fluid dynamics, experimental validation, and
            bio-inspired design. */}
          </p>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Tabs value={activeFilter} onValueChange={handleFilter} className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-muted/30 p-1 rounded-lg">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-[#5BC0BE] data-[state=active]:text-white font-medium"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="institution"
                className="data-[state=active]:bg-[#5BC0BE] data-[state=active]:text-white font-medium"
              >
                Institution
              </TabsTrigger>
              <TabsTrigger
                value="topic"
                className="data-[state=active]:bg-[#5BC0BE] data-[state=active]:text-white font-medium"
              >
                Topic
              </TabsTrigger>
              <TabsTrigger
                value="year"
                className="data-[state=active]:bg-[#5BC0BE] data-[state=active]:text-white font-medium"
              >
                Year
              </TabsTrigger>
              <TabsTrigger
                value="tool"
                className="data-[state=active]:bg-[#5BC0BE] data-[state=active]:text-white font-medium"
              >
                Tool
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ResearchCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
