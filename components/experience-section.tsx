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
import { experiences } from "@/content/experience";
import { Building, MapPin, Calendar, Award } from "lucide-react";

interface ExperienceCardProps {
  experience: (typeof experiences)[0];
  index: number;
  isLeft: boolean;
}

function ExperienceCard({ experience, index, isLeft }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`flex ${isLeft ? "justify-start" : "justify-end"} mb-8`}
    >
      <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-[#5BC0BE]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#5BC0BE]/10 group">
          <CardHeader className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="font-display text-xl group-hover:text-[#5BC0BE] transition-colors">
                  {experience.title}
                </CardTitle>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span className="font-medium">{experience.company}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-3 w-3" />
                <span>{experience.period}</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <CardDescription className="leading-relaxed">
              {experience.description}
            </CardDescription>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-muted/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {experience.achievements && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground flex items-center space-x-1">
                  <Award className="h-3 w-3" />
                  <span>Key Achievements</span>
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-[#5BC0BE] mt-1.5 text-xs">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

function VolunteeringSection() {
  const volunteering = [
    {
      title: "VETOMAC Students' Committee",
      period: "2022",
      description:"",
        // "Led student activities and managed logistics for vibration engineering events and workshops.",
      role: "Committee Member",
    },
    {
      title: "MechTRIX 2020",
      period: "2020",
      description:"",
        // "Volunteered for water-rocket competition, assisting with event coordination and technical support.",
      role: "Volunteer",
    },
  ];

  return (
    <div className="mt-16 pt-8 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="font-display text-2xl font-bold mb-2">
          Volunteering & <span className="text-[#3A86FF]">Community Involvement</span>
        </h3>
        <p className="text-muted-foreground">
          {/* Contributing to the engineering community */}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {volunteering.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/30 backdrop-blur-sm border-border/30 hover:border-[#3A86FF]/30 transition-all duration-300 h-full">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <h4 className="font-display font-semibold">{item.title}</h4>
                  <Badge
                    variant="outline"
                    className="border-[#3A86FF]/30 text-[#3A86FF] text-xs"
                  >
                    {item.role}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.period}</p>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide">
            Professional <span className="text-[#5BC0BE]">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {/* Building expertise through hands-on engineering roles and research
            collaborations. */}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#5BC0BE] to-[#3A86FF] h-full opacity-30" />

          {experiences.map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
              viewport={{ once: true }}
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#5BC0BE] rounded-full border-4 border-background shadow-lg"
              style={{ top: `${index * 400 + 100}px` }}
            />
          ))}

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        <VolunteeringSection />
      </div>
    </section>
  );
}
