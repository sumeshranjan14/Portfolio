"use client"

import { motion } from "framer-motion"
import { resumeData } from "@/data/resume"
import { Badge } from "@/components/ui/badge"

export function Skills() {
    return (
        <section id="skills" className="container py-24 sm:py-32 bg-muted/50">
            <div className="mx-auto max-w-5xl space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Skills
                    </h2>
                    <p className="text-muted-foreground">
                        My technical toolkit and areas of expertise.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {Object.entries(resumeData.skills).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-4 rounded-lg border bg-card p-6 shadow-sm"
                        >
                            <h3 className="font-semibold capitalize">
                                {category.replace(/([A-Z])/g, " $1").trim()}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <Badge key={skill} variant="secondary">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
