"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { resumeData } from "@/data/resume"

import { Badge } from "@/components/ui/badge"

export function Projects() {
    return (
        <section id="projects" className="relative container py-24 sm:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mx-auto max-w-5xl space-y-12"
            >
                <div className="text-center space-y-3">
                    <h2 className="text-4xl sm:text-5xl font-serif tracking-tight">
                        Projects
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[1px] w-12 bg-primary/30" />
                        <span className="text-primary text-sm">✦</span>
                        <div className="h-[1px] w-12 bg-primary/30" />
                    </div>
                    <p className="text-muted-foreground max-w-md mx-auto text-base">
                        A showcase of my recent production-grade systems and applications.
                    </p>
                </div>
                
                <div className="grid gap-8 md:grid-cols-2">
                    {resumeData.projects.map((project, index) => {
                        const techTags = project.tech.split(",").map(t => t.trim())
                        const points = project.description.split(/\.(?=\s|$)/).map(p => p.trim()).filter(Boolean)

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="h-full"
                            >
                                <Card className="glass-card h-full flex flex-col border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1.5 gold-glow rounded-2xl overflow-hidden">
                                    <CardHeader className="space-y-3 pb-4">
                                        <CardTitle className="font-serif text-2xl tracking-wide text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </CardTitle>
                                        <div className="flex flex-wrap gap-1.5">
                                            {techTags.map(tag => (
                                                <Badge key={tag} variant="secondary" className="bg-primary/5 hover:bg-primary/10 text-primary border border-primary/15 rounded-md px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1 pb-6">
                                        <ul className="space-y-2.5 text-sm text-muted-foreground font-medium">
                                            {points.map((point, pIdx) => (
                                                <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                                                    <span className="text-primary text-xs mt-1">✦</span>
                                                    <span>{point}.</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="pt-0 pb-6 px-6">
                                        <Button asChild variant="outline" className="w-full border-primary/25 hover:border-primary hover:bg-primary/5 text-foreground/80 hover:text-foreground font-semibold rounded-xl transition-all duration-300">
                                            <Link href={project.link} target="_blank">
                                                <ExternalLink className="mr-2 h-4 w-4 text-primary" />
                                                View Source / Demo
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
        </section>
    )
}

