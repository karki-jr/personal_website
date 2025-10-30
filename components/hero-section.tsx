"use client";

import { Button } from "@/components/ui/button";
import { FlowFieldBackground } from "./flow-field-background";
import { AnimatedCounter } from "./animated-counter";
import { personalInfo } from "@/content/personal-info";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, Phone, MapPin } from "lucide-react";

export function HeroSection() {
  const scrollToResearch = () => {
    const element = document.getElementById("research");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0 overflow-hidden">
      <div className="absolute inset-0 aerospace-gradient" />
      <FlowFieldBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl font-bold tracking-wide"
            >
              <span className="text-white">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-2xl md:text-3xl font-medium text-[#5BC0BE] tracking-wide"
            >
              {personalInfo.title}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 text-slate-300"
          >
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>{personalInfo.email}</span>
            </div>
            {/* <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{personalInfo.phone}</span>
            </div> */}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={scrollToResearch}
              size="lg"
              className="bg-[#5BC0BE] cursor-pointer hover:bg-[#5BC0BE]/90 text-white font-medium px-8 py-3 rounded-lg transition-all hover:scale-105"
            >
              View Research
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex items-center space-x-3">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#3A86FF] text-[#3A86FF] hover:bg-[#3A86FF]/10 px-6 py-3 bg-transparent cursor-pointer"
                >
                  Download CV
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-slate-400 text-slate-300 hover:bg-slate-400/10 px-6 py-3 bg-transparent"
              >
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 pt-8 border-t border-slate-700/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <AnimatedCounter
                end={personalInfo.stats.yearsOfResearch}
                suffix="+"
              />
              <p className="text-slate-400 text-sm uppercase tracking-wide">
                Years of Research
              </p>
            </div>
            <div className="text-center space-y-2">
              <AnimatedCounter
                end={personalInfo.stats.toolsMastered}
                suffix="+"
              />
              <p className="text-slate-400 text-sm uppercase tracking-wide">
                Tools Mastered
              </p>
            </div>
            <div className="text-center space-y-2">
              <AnimatedCounter
                end={personalInfo.stats.projectsCompleted}
                suffix="+"
              />
              <p className="text-slate-400 text-sm uppercase tracking-wide">
                Projects Completed
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-slate-400"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
