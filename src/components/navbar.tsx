"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/75 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between px-4 md:px-8">
                <div className="mr-4 flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-serif font-bold text-2xl text-royal-gradient tracking-wide">
                            Sumesh Ranjan
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "transition-all duration-300 hover:text-primary text-foreground/70 relative py-1 group"
                                )}
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                    </div>
                    <ModeToggle />
                    <Button
                        variant="ghost"
                        className="md:hidden hover:bg-primary/10 hover:text-primary"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Toggle Menu</span>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="container md:hidden pb-6 px-4 bg-background/95 border-b border-primary/10"
                >
                    <nav className="flex flex-col space-y-4 mt-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-semibold transition-all hover:text-primary hover:pl-2 text-foreground/80"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </motion.div>
            )}
        </header>
    )
}

