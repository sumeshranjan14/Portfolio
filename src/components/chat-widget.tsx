"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getChatResponse } from "@/lib/chat-logic"

type Message = {
    role: "user" | "bot"
    content: string
}

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        { role: "bot", content: "Hi! I'm Sumesh's AI assistant. Ask me anything about his skills, projects, or experience." }
    ])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isOpen])

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!input.trim()) return

        const userMessage = input
        setInput("")
        setMessages(prev => [...prev, { role: "user", content: userMessage }])
        setIsLoading(true)

        try {
            const response = await getChatResponse(userMessage)
            setMessages(prev => [...prev, { role: "bot", content: response }])
        } catch {
            setMessages(prev => [...prev, { role: "bot", content: "Sorry, I encountered an error. Please try again." }])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        className="mb-4 w-[340px] sm:w-[380px]"
                    >
                        <Card className="glass-card border border-primary/20 gold-glow shadow-2xl rounded-2xl overflow-hidden">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 pt-4 px-4 bg-gradient-to-r from-primary to-amber-600 text-primary-foreground">
                                <CardTitle className="text-sm font-serif font-bold tracking-wider flex items-center gap-2">
                                    <Bot className="h-4 w-4 animate-bounce" />
                                    SUMESH&apos;S AI COMPANION
                                </CardTitle>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20 rounded-full" onClick={() => setIsOpen(false)}>
                                    <X className="h-4 w-4" />
                                </Button>
                            </CardHeader>
                            <CardContent className="p-4 h-[350px] overflow-y-auto space-y-4 bg-background/50 backdrop-blur-sm">
                                {messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[85%] px-4 py-2.5 text-sm shadow-sm ${msg.role === "user"
                                                ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-none font-medium"
                                                : "bg-primary/5 border border-primary/10 text-foreground rounded-2xl rounded-tl-none font-medium"
                                                }`}
                                        >
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-primary/5 border border-primary/10 text-muted-foreground rounded-2xl rounded-tl-none px-4 py-2.5 text-sm font-medium animate-pulse">
                                            Typing...
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </CardContent>
                            <CardFooter className="p-3 pt-0 bg-background/60">
                                <form onSubmit={handleSubmit} className="flex w-full gap-2 mt-2">
                                    <Input
                                        placeholder="Ask about Sumesh's skills..."
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        className="flex-1 h-11 border-primary/10 bg-background/30 focus-visible:ring-primary/40 focus-visible:border-primary rounded-xl px-4 text-xs font-medium"
                                    />
                                    <Button type="submit" size="icon" disabled={isLoading} className="h-11 w-11 bg-primary text-primary-foreground hover:bg-primary/95 shadow-md shadow-primary/20 rounded-xl transition-all duration-300">
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isOpen && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        size="lg"
                        className="h-14 w-14 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-300 shadow-primary/20 gold-glow border border-primary/25"
                        onClick={() => setIsOpen(true)}
                    >
                        <MessageCircle className="h-6 w-6" />
                    </Button>
                </motion.div>
            )}
        </div>
    )
}

