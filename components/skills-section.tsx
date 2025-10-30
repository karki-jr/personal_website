"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/content/skills";
import { Code, Wrench, Monitor, Users } from "lucide-react";

const categoryIcons = {
  "CAD & Analysis": Wrench,
  Programming: Code,
  "Tools & Software": Monitor,
  "Soft Skills": Users,
};

const categoryColors = {
  "CAD & Analysis": "#5BC0BE",
  Programming: "#3A86FF",
  "Tools & Software": "#5BC0BE",
  "Soft Skills": "#3A86FF",
};

interface SkillBarProps {
  skill: { name: string; proficiency: number };
  index: number;
  categoryColor: string;
}

function SkillBar({ skill, index, categoryColor }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">
          {skill.proficiency}/5
        </span>
      </div>
      <div className="relative">
        <Progress value={(skill.proficiency / 5) * 100} className="h-2" />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(skill.proficiency / 5) * 100}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 h-2 rounded-full"
          style={{ backgroundColor: categoryColor }}
        />
      </div>
    </motion.div>
  );
}

interface SkillCategoryProps {
  category: (typeof skills)[0];
  index: number;
}

function SkillCategory({ category, index }: SkillCategoryProps) {
  const Icon = categoryIcons[category.category as keyof typeof categoryIcons];
  const color =
    categoryColors[category.category as keyof typeof categoryColors];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-opacity-50 transition-all duration-300 group">
        <CardHeader className="space-y-3">
          <div className="flex items-center space-x-3">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: `${color}20` }}
            >
              <Icon className="h-5 w-5" style={{ color }} />
            </div>
            <CardTitle className="font-display text-lg group-hover:text-foreground transition-colors">
              {category.category}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              index={skillIndex}
              categoryColor={color}
            />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide">
            Technical <span className="text-[#5BC0BE]">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proficiency across engineering tools, programming languages, and
            professional capabilities.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skills.map((category, index) => (
            <SkillCategory
              key={category.category}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
