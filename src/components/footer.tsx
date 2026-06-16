import { resumeData } from "@/data/resume"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-primary/10 bg-background/50 backdrop-blur-sm py-10">
            <div className="container flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left px-4 md:px-8">
                <p className="text-sm text-muted-foreground font-medium">
                    © {new Date().getFullYear()} <span className="font-serif font-semibold text-primary">{resumeData.name}</span>. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <Link 
                        href={resumeData.github} 
                        target="_blank" 
                        className="p-2.5 rounded-lg border border-primary/10 hover:border-primary/40 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
                    >
                        <Github className="h-4 w-4" />
                    </Link>
                    <Link 
                        href={resumeData.linkedin} 
                        target="_blank" 
                        className="p-2.5 rounded-lg border border-primary/10 hover:border-primary/40 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
                    >
                        <Linkedin className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

