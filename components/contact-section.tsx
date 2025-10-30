"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/content/personal-info";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Users,
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string; // spam protection
}

const collaborationTypes = [
  {
    id: "research",
    label: "Research Collaborations",
    icon: GraduationCap,
    active: true,
  },
  { id: "consulting", label: "CFD Consulting", icon: Briefcase, active: true },
  {
    id: "opportunities",
    label: "Graduate Opportunities",
    icon: Users,
    active: true,
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCollaborations, setActiveCollaborations] = useState(
    collaborationTypes.filter((type) => type.active).map((type) => type.id)
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleCollaboration = (id: string) => {
    setActiveCollaborations((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam protection
    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide">
            Get In <span className="text-[#5BC0BE]">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {/* Open to research collaborations, CFD consulting opportunities, and
            graduate program discussions. */}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="mt-20 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="font-display text-xl">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#5BC0BE]/10 rounded-lg">
                    <Mail className="h-4 w-4 text-[#5BC0BE]" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#3A86FF]/10 rounded-lg">
                    <Phone className="h-4 w-4 text-[#3A86FF]" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      {personalInfo.phone}
                    </p>
                  </div>
                </div> */}

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#5BC0BE]/10 rounded-lg">
                    <MapPin className="h-4 w-4 text-[#5BC0BE]" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Collaboration Types */}
            {/* <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="font-display text-xl">Open For</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {collaborationTypes.map((type) => {
                    const Icon = type.icon;
                    const isActive = activeCollaborations.includes(type.id);
                    return (
                      <Badge
                        key={type.id}
                        variant={isActive ? "default" : "outline"}
                        className={`cursor-pointer transition-all ${
                          isActive
                            ? "bg-[#5BC0BE] hover:bg-[#5BC0BE]/90 text-white"
                            : "border-[#5BC0BE]/30 hover:border-[#5BC0BE] hover:bg-[#5BC0BE]/10"
                        }`}
                        onClick={() => toggleCollaboration(type.id)}
                      >
                        <Icon className="h-3 w-3 mr-1" />
                        {type.label}
                      </Badge>
                    );
                  })}
                </div>
                <p className="text-sm text-muted-foreground">
                  Click to toggle your areas of interest. I'm particularly
                  excited about interdisciplinary projects involving CFD,
                  bio-inspired design, and experimental fluid mechanics.
                </p>
              </CardContent>
            </Card> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="font-display text-xl">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#5BC0BE] hover:bg-[#5BC0BE]/90 text-white"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
