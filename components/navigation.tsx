"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

import {
  Home,
  BookOpen,
  Briefcase,
  Code,
  Star,
  Mail,
  Sun,
  Moon,
} from "lucide-react";
import { ScrollProgress } from "./scroll-progress";

const navItems = [
  { name: "About", href: "#about", icon: Home },
  { name: "Research", href: "#research", icon: BookOpen },
  { name: "Blog", href: "#blog", icon: Code },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Code },
  // { name: "Skills", href: "#skills", icon: Star },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={` fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-display font-bold text-xl tracking-wide">
              <span className="text-[#5BC0BE]">Y</span>ukesh{" "}
              <span className="text-[#5BC0BE]">K</span>arki
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-[#5BC0BE] cursor-pointer relative ${
                    activeSection === item.href.slice(1)
                      ? "text-[#5BC0BE]"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5BC0BE] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex cursor-pointer"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </nav>
      </header>
      <ScrollProgress />
      <section className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-t border-border/50 md:hidden">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`flex flex-col items-center justify-center text-xs transition-colors ${
                  isActive ? "text-[#5BC0BE]" : "text-slate-400"
                }`}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}
