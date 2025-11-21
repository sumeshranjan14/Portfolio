"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { resumeData } from "@/data/resume"

export function Hero() {
    return (
        <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-10 py-24 text-center md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    Hi, I&apos;m <span className="text-primary">{resumeData.name}</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    {resumeData.role} based in {resumeData.location}.
                    <br />
                    Building modern web applications with the MERN Stack.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-x-4"
            >
                <Button asChild size="lg">
                    <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <Link href="#projects">View Projects</Link>
                </Button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-10"
            >
                <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
            </motion.div>
        </section>
    )
}
