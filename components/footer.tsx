"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/content/personal-info";
import { Mail, Phone, MapPin, ExternalLink, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B132B] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5BC0BE]/20 via-transparent to-[#3A86FF]/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="font-display font-bold text-2xl tracking-wide">
              <span className="text-[#5BC0BE]">Y</span>ukesh{" "}
              <span className="text-[#5BC0BE]">K</span>arki
            </div>
            <p className="text-slate-300 leading-relaxed">
              PhD student focusing on bio-inspired aerodynamics
              and non-linear fluid structure interaction problems
              at low Reynolds number.
            </p>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-[#5BC0BE]/30 text-[#5BC0BE] hover:bg-[#5BC0BE]/10 bg-transparent"
              >
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-display text-lg font-semibold text-[#5BC0BE]">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "About", href: "#about" },
                { name: "Research", href: "#research" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-left text-slate-300 hover:text-[#5BC0BE] transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-display text-lg font-semibold text-[#5BC0BE]">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-[#3A86FF]" />
                <span className="text-slate-300">{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-[#3A86FF]" />
                {/* <span className="text-slate-300">{personalInfo.phone}</span> */}
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-[#3A86FF]" />
                <span className="text-slate-300">{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <p className="text-slate-400 text-sm">
            Developed By:{" "}
            <a
              href="https://www.linkedin.com/in/saujal-karki-757a33262/"
              target="_blank_"
            >
              Saujal Karki
            </a>
            .
          </p>
          <div className=" flex flex-col items-center">
            <p className="text-slate-400 text-sm">©{currentYear}</p>
            <p className="text-slate-400 text-sm font-semibold">
              Yukesh Karki.
            </p>
            <p className="text-slate-400 text-sm"> All Rights Reserved.</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-slate-400 hover:text-[#5BC0BE] hover:bg-[#5BC0BE]/10"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}
