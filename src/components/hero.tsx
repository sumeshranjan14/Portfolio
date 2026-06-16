"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { resumeData } from "@/data/resume"

export function Hero() {
    return (
        <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-24 px-4 text-center md:py-32 overflow-hidden">
            {/* Elegant Background Glows */}
            <div className="absolute top-1/4 left-1/3 -z-10 h-96 w-96 rounded-full bg-primary/15 blur-[100px] animate-pulse duration-[8000ms]" />
            <div className="absolute bottom-1/4 right-1/3 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

            <div className="max-w-4xl mx-auto space-y-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase font-serif">
                        ✦ Software Engineer Portfolio ✦
                    </div>
                    <h1 className="text-5xl font-serif tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.15]">
                        Hi, I&apos;m <span className="text-royal-gradient block mt-2 sm:inline sm:mt-0 font-bold">{resumeData.name}</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                        A passionate <span className="text-foreground font-semibold">Software Engineer</span> specializing in <span className="text-primary font-semibold">Java</span>, <span className="text-primary font-semibold">Spring Boot</span>, and the <span className="text-primary font-semibold">MERN Stack</span>.
                        <br />
                        Chair of IEEE Student Branch, creating high-performance distributed systems.
                    </p>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4"
                >
                    <Button asChild size="lg" className="h-12 px-8 font-semibold text-base bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 rounded-full">
                        <Link href="#contact">Contact Me</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="h-12 px-8 font-semibold text-base border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground/80 hover:text-foreground transition-all duration-300 rounded-full">
                        <Link href="#projects">View Projects</Link>
                    </Button>
                </motion.div>
            </div>
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-8"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs tracking-widest text-muted-foreground uppercase font-serif">Scroll Down</span>
                    <ArrowDown className="h-5 w-5 animate-bounce text-primary" />
                </div>
            </motion.div>
        </section>
    )
}

