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
        <section id="contact" className="container py-24 sm:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mx-auto max-w-4xl"
            >
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Get in Touch
                    </h2>
                    <p className="text-muted-foreground">
                        Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-3 text-muted-foreground">
                                    <Mail className="h-5 w-5" />
                                    <a href={`mailto:${resumeData.email}`} className="hover:text-primary transition-colors">{resumeData.email}</a>
                                </div>
                                <div className="flex items-center space-x-3 text-muted-foreground">
                                    <Phone className="h-5 w-5" />
                                    <span>{resumeData.phone}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-muted-foreground">
                                    <MapPin className="h-5 w-5" />
                                    <span>{resumeData.location}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardContent className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Input placeholder="Your Name" required />
                                </div>
                                <div className="space-y-2">
                                    <Input type="email" placeholder="Your Email" required />
                                </div>
                                <div className="space-y-2">
                                    <Textarea placeholder="Your Message" className="min-h-[120px]" required />
                                </div>
                                <Button type="submit" className="w-full" disabled={status === "submitting"}>
                                    {status === "submitting" ? "Sending..." : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" /> Send Message
                                        </>
                                    )}
                                </Button>
                                {status === "success" && (
                                    <p className="text-sm text-green-500 text-center">Message sent successfully!</p>
                                )}
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </motion.div>
        </section>
    )
}
