"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { resumeData } from "@/data/resume"

export function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus("submitting")

        // Simulate form submission
        setTimeout(() => {
            setStatus("success")
        }, 1000)
    }

    return (
        <section id="contact" className="relative container py-24 sm:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mx-auto max-w-4xl"
            >
                <div className="text-center space-y-3 mb-16">
                    <h2 className="text-4xl sm:text-5xl font-serif tracking-tight">
                        Get in Touch
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[1px] w-12 bg-primary/30" />
                        <span className="text-primary text-sm">✦</span>
                        <div className="h-[1px] w-12 bg-primary/30" />
                    </div>
                    <p className="text-muted-foreground max-w-md mx-auto text-base">
                        Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                        <Card className="glass-card border border-primary/10 gold-glow rounded-2xl p-6">
                            <CardHeader className="pb-4">
                                <CardTitle className="font-serif text-2xl text-foreground">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center space-x-4 text-muted-foreground group">
                                    <div className="p-3 rounded-lg border border-primary/15 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <a href={`mailto:${resumeData.email}`} className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm sm:text-base">
                                        {resumeData.email}
                                    </a>
                                </div>
                                <div className="flex items-center space-x-4 text-muted-foreground group">
                                    <div className="p-3 rounded-lg border border-primary/15 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <span className="text-foreground/80 font-medium text-sm sm:text-base">{resumeData.phone}</span>
                                </div>
                                <div className="flex items-center space-x-4 text-muted-foreground group">
                                    <div className="p-3 rounded-lg border border-primary/15 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <span className="text-foreground/80 font-medium text-sm sm:text-base">{resumeData.location}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="glass-card border border-primary/10 gold-glow rounded-2xl">
                        <CardContent className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Input placeholder="Your Name" required className="h-12 border-primary/10 bg-background/40 focus-visible:ring-primary/40 focus-visible:border-primary rounded-xl px-4 text-sm font-medium" />
                                </div>
                                <div className="space-y-2">
                                    <Input type="email" placeholder="Your Email" required className="h-12 border-primary/10 bg-background/40 focus-visible:ring-primary/40 focus-visible:border-primary rounded-xl px-4 text-sm font-medium" />
                                </div>
                                <div className="space-y-2">
                                    <Textarea placeholder="Your Message" className="min-h-[140px] border-primary/10 bg-background/40 focus-visible:ring-primary/40 focus-visible:border-primary rounded-xl p-4 text-sm font-medium" required />
                                </div>
                                <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-300 shadow-md shadow-primary/15 rounded-xl font-semibold text-sm" disabled={status === "submitting"}>
                                    {status === "submitting" ? "Sending..." : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" /> Send Message
                                        </>
                                    )}
                                </Button>
                                {status === "success" && (
                                    <p className="text-sm text-green-500 font-semibold text-center mt-2">Message sent successfully!</p>
                                )}
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </motion.div>
        </section>
    )
}

