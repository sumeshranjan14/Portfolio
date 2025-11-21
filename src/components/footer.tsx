import { resumeData } from "@/data/resume"

export function Footer() {
    return (
        <footer className="border-t bg-muted/50 py-8">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
