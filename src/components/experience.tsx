"use client"

import { motion } from "framer-motion"
import { resumeData } from "@/data/resume"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
    return (
        <section id="experience" className="container py-24 sm:py-32 bg-muted/50">
            <div className="mx-auto max-w-5xl space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Experience & Education
                    </h2>
                    <p className="text-muted-foreground">
                        My academic journey and leadership roles.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-center">Education</h3>
                        {resumeData.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{edu.degree}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="font-semibold">{edu.institution}</p>
                                        <p className="text-sm text-muted-foreground">{edu.year}</p>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            Score: {edu.score}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-center">Leadership</h3>
                        {resumeData.leadership.map((role, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{role.role}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="font-semibold">{role.organization}</p>
                                        <p className="text-sm text-muted-foreground">{role.year}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-center">Certificates</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                        {resumeData.certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full">
                                    <CardContent className="pt-6">
                                        <p className="font-medium text-center">{cert}</p>
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
