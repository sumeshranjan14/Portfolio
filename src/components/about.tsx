"use client"

import { motion } from "framer-motion"
import { resumeData } from "@/data/resume"

export function About() {
    return (
        <section id="about" className="relative container py-24 sm:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mx-auto max-w-4xl space-y-8 text-center"
            >
                <div className="space-y-3">
                    <h2 className="text-4xl sm:text-5xl font-serif tracking-tight">
                        About Me
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[1px] w-12 bg-primary/30" />
                        <span className="text-primary text-sm">✦</span>
                        <div className="h-[1px] w-12 bg-primary/30" />
                    </div>
                </div>
                
                <div className="relative glass-card p-8 md:p-12 rounded-2xl border border-primary/10 gold-glow">
                    <div className="absolute top-4 left-4 text-4xl text-primary/10 font-serif">“</div>
                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-serif italic max-w-3xl mx-auto">
                        {resumeData.summary}
                    </p>
                    <div className="absolute bottom-4 right-4 text-4xl text-primary/10 font-serif">”</div>
                </div>
            </motion.div>
        </section>
    )
}

