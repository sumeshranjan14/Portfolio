"use client"

import { motion } from "framer-motion"
import { resumeData } from "@/data/resume"

export function About() {
    return (
        <section id="about" className="container py-24 sm:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mx-auto max-w-3xl space-y-8 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    About Me
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {resumeData.summary}
                </p>
            </motion.div>
        </section>
    )
}
