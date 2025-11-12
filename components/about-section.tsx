"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/content/personal-info";
import { Download, ExternalLink, GraduationCap, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide">
                About <span className="text-[#5BC0BE]">Me</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {personalInfo.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold flex items-center space-x-2">
                <Globe className="h-5 w-5 text-[#5BC0BE]" />
                <span>Languages</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.languages.map((lang) => (
                  <Badge
                    key={lang.language}
                    variant="outline"
                    className="border-[#3A86FF]/30 text-[#3A86FF]"
                  >
                    {lang.language} ({lang.proficiency})
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-[#5BC0BE]/30 transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-[#5BC0BE]/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-[#5BC0BE]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      Education
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Academic Background
                    </p>
                  </div>
                </div>

                <div className="space-y-4">

                  <div className="space-y-2">
                    <h4 className="font-semibold">PhD in Aerospace Engineering</h4>
                    {/* <p className="text-muted-foreground">
                      Aerospace Engineering
                    </p> */}
                    <p className="text-sm text-muted-foreground">
                      University of Birmingham, UK
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        2025 – present
                      </span>
                      {/* <Badge className="bg-[#5BC0BE]/20 text-[#5BC0BE] border-[#5BC0BE]/30">
                        76.28%
                      </Badge> */}
                    </div>
                  </div>


                  <div className="space-y-2">
                    <h4 className="font-semibold">Bachelor of Engineering</h4>
                    <p className="text-muted-foreground">
                      Aerospace Engineering
                    </p>
                    <p className="text-sm text-muted-foreground">
                      IOE Pulchowk, Tribhuvan University, Nepal
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        2018 – 2023
                      </span>
                      {/* <Badge className="bg-[#5BC0BE]/20 text-[#5BC0BE] border-[#5BC0BE]/30">
                        76.28%
                      </Badge> */}
                    </div>
                  </div>

                  {/* <div className="pt-4 border-t border-border/50">
                    <h4 className="font-medium mb-2">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Fluid Dynamics",
                        "Aerodynamics",
                        "Thermodynamics",
                        "Propulsion",
                      ].map((spec) => (
                        <Badge
                          key={spec}
                          variant="secondary"
                          className="text-xs bg-muted/50"
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div> */}


                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
