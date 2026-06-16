"use client"

import { motion } from "framer-motion"
import { resumeData } from "@/data/resume"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
    return (
        <section id="experience" className="relative container py-24 sm:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 -z-10" />
            <div className="mx-auto max-w-5xl space-y-20">
                <div className="text-center space-y-3">
                    <h2 className="text-4xl sm:text-5xl font-serif tracking-tight">
                        Experience & Education
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[1px] w-12 bg-primary/30" />
                        <span className="text-primary text-sm">✦</span>
                        <div className="h-[1px] w-12 bg-primary/30" />
                    </div>
                    <p className="text-muted-foreground max-w-md mx-auto text-base">
                        My academic foundation, leadership achievements, and milestones.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2">
                    {/* Education */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif font-bold text-center text-foreground border-b border-primary/10 pb-3 mb-6">
                            Education
                        </h3>
                        <div className="space-y-6">
                            {resumeData.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="glass-card border border-primary/10 hover:border-primary/20 transition-all duration-300 gold-glow rounded-xl">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="font-serif text-lg text-primary">{edu.degree}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-1">
                                            <p className="font-semibold text-foreground/95 text-sm">{edu.institution}</p>
                                            <p className="text-xs text-muted-foreground">{edu.year}</p>
                                            {edu.score && (
                                                <p className="text-xs text-primary font-semibold mt-2">
                                                    Score: {edu.score}
                                                </p>
                                            )}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Leadership */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif font-bold text-center text-foreground border-b border-primary/10 pb-3 mb-6">
                            Leadership & Experience
                        </h3>
                        <div className="space-y-6">
                            {resumeData.leadership.map((role, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="glass-card border border-primary/10 hover:border-primary/20 transition-all duration-300 gold-glow rounded-xl">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="font-serif text-lg text-primary">{role.role}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <div>
                                                <p className="font-semibold text-foreground/95 text-sm">{role.organization}</p>
                                                <p className="text-xs text-muted-foreground">{role.year}</p>
                                            </div>
                                            {role.points && (
                                                <ul className="space-y-2 text-xs text-muted-foreground list-disc pl-4 font-medium leading-relaxed">
                                                    {role.points.map((pt, ptIdx) => (
                                                        <li key={ptIdx}>{pt}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Certificates */}
                <div className="space-y-8 pt-8">
                    <h3 className="text-2xl font-serif font-bold text-center text-foreground border-b border-primary/10 pb-3 mb-6 max-w-sm mx-auto">
                        Certifications & Achievements
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {resumeData.certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="h-full"
                            >
                                <Card className="glass-card border border-primary/10 hover:border-primary/25 transition-all duration-300 gold-glow rounded-xl h-full flex items-center p-5 text-center">
                                    <CardContent className="p-0 w-full">
                                        <p className="font-serif font-semibold text-sm text-foreground/95 leading-relaxed">{cert}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

