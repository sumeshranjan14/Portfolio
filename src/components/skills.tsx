"use client"

import { motion } from "framer-motion"
import { resumeData } from "@/data/resume"
import { Badge } from "@/components/ui/badge"

export function Skills() {
    return (
        <section id="skills" className="relative container py-24 sm:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 -z-10" />
            <div className="mx-auto max-w-5xl space-y-12">
                <div className="text-center space-y-3">
                    <h2 className="text-4xl sm:text-5xl font-serif tracking-tight">
                        Skills
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[1px] w-12 bg-primary/30" />
                        <span className="text-primary text-sm">✦</span>
                        <div className="h-[1px] w-12 bg-primary/30" />
                    </div>
                    <p className="text-muted-foreground max-w-md mx-auto text-base">
                        My comprehensive technical toolkit and core computer science competencies.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(resumeData.skills).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 gold-glow group"
                        >
                            <h3 className="font-serif text-lg font-semibold tracking-wider text-primary border-b border-primary/10 pb-2 mb-4 capitalize group-hover:text-royal-gradient transition-colors duration-300">
                                {category.replace(/([A-Z])/g, " $1").trim()}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <Badge 
                                        key={skill} 
                                        variant="outline" 
                                        className="border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 text-foreground transition-all duration-300 cursor-default rounded-md py-1 px-2.5 text-xs font-medium"
                                    >
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
