"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { publications } from "@/content/publications"
import { FileText, ExternalLink, Calendar, Users } from "lucide-react"

interface PublicationCardProps {
  publication: (typeof publications)[0]
  index: number
}

function PublicationCard({ publication, index }: PublicationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group"
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-[#5BC0BE]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#5BC0BE]/10">
        <CardHeader className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              <CardTitle className="font-display text-lg leading-tight group-hover:text-[#5BC0BE] transition-colors">
                {publication.title}
              </CardTitle>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{publication.year}</span>
                </div>
                <Badge
                  variant="outline"
                  className={
                    publication.type === "poster" || publication.type === "conference"
                      ? "border-[#3A86FF]/30 text-[#3A86FF]"
                      : "border-[#5BC0BE]/30 text-[#5BC0BE]"
                  }
                >
                  {publication.type}
                </Badge>
              </div>
            </div>
            <div className="p-2 bg-[#5BC0BE]/10 rounded-lg">
              <FileText className="h-5 w-5 text-[#5BC0BE]" />
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">{publication.venue}</p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>{publication.authors.join(", ")}</span>
            </div>
          </div>

          {publication.link && (
            <Button
              variant="outline"
              size="sm"
              className="w-full border-[#5BC0BE]/30 hover:border-[#5BC0BE] hover:bg-[#5BC0BE]/10 bg-transparent group/btn"
            >
              <FileText className="h-3 w-3 mr-2 group-hover/btn:text-[#5BC0BE]" />
              View Publication
              <ExternalLink className="h-3 w-3 ml-2 group-hover/btn:text-[#5BC0BE]" />
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function PublicationsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide">
            Conferences & <span className="text-[#5BC0BE]">Presentations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {/* Research contributions and academic presentations in aerospace engineering. */}
          </p>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {publications.map((publication, index) => (
            <PublicationCard key={publication.id} publication={publication} index={index} />
          ))}
        </div>

        {/* Future Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* <Card className="bg-card/30 backdrop-blur-sm border-border/30 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="font-display text-lg font-semibold mb-2">Upcoming Publications</h3>
              <p className="text-muted-foreground text-sm">
                Currently preparing manuscripts on flexible wing aerodynamics and bristled wing force analysis for
                peer-reviewed journals.
              </p>
            </CardContent>
          </Card> */}
        </motion.div>
      </div>
    </section>
  )
}
