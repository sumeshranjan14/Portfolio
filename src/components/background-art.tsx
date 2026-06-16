"use client"

import { motion } from "framer-motion"

export function BackgroundArt() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-20 w-full h-full select-none">
            {/* Top Right: Orbits/Concentric compass watermark (Hero section area) */}
            <div className="absolute top-[8%] -right-[10%] w-[500px] h-[500px] opacity-[0.03] dark:opacity-[0.02] text-primary transition-opacity duration-300">
                <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
                    <circle cx="100" cy="100" r="90" strokeDasharray="2 2" />
                    <circle cx="100" cy="100" r="70" />
                    <circle cx="100" cy="100" r="50" strokeDasharray="4 4" />
                    <circle cx="100" cy="100" r="30" />
                    <line x1="100" y1="5" x2="100" y2="195" />
                    <line x1="5" y1="100" x2="195" y2="100" />
                    <line x1="33" y1="33" x2="167" y2="167" strokeDasharray="1 1" />
                    <line x1="33" y1="167" x2="167" y2="33" strokeDasharray="1 1" />
                </svg>
            </div>

            {/* Hero Background watermark text */}
            <div className="absolute top-[18%] left-[5%] font-serif font-extrabold text-9xl sm:text-[12rem] tracking-[0.2em] text-primary/3 dark:text-primary/2 select-none uppercase pointer-events-none rotate-[-8deg] origin-top-left">
                SYSTEMS
            </div>

            {/* Middle Left: Golden Ratio spiral (About/Skills area) */}
            <div className="absolute top-[35%] -left-[12%] w-[600px] h-[600px] opacity-[0.04] dark:opacity-[0.02] text-primary transition-opacity duration-300 rotate-45">
                <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
                    {/* Golden spiral approximations */}
                    <rect x="0" y="0" width="130" height="130" />
                    <rect x="130" y="0" width="70" height="70" />
                    <rect x="130" y="70" width="70" height="60" />
                    <rect x="80" y="70" width="50" height="60" />
                    <path d="M 0,130 A 130,130 0 0,1 130,0" />
                    <path d="M 130,0 A 70,70 0 0,1 200,70" />
                    <path d="M 200,70 A 60,60 0 0,1 140,130" />
                    <path d="M 140,130 A 50,50 0 0,1 90,80" />
                    <circle cx="100" cy="100" r="1.5" fill="currentColor" />
                </svg>
            </div>

            {/* About/Skills watermark text */}
            <div className="absolute top-[42%] right-[5%] font-serif font-extrabold text-9xl sm:text-[11rem] tracking-[0.15em] text-primary/3 dark:text-primary/2 select-none uppercase pointer-events-none rotate-[6deg] origin-top-right">
                CREATIVE
            </div>

            {/* Middle Right: Peer-to-Peer Mesh Network watermark (Projects area) */}
            <div className="absolute top-[60%] -right-[8%] w-[550px] h-[550px] opacity-[0.04] dark:opacity-[0.02] text-primary transition-opacity duration-300">
                <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.6" className="w-full h-full">
                    {/* Central nodes */}
                    <circle cx="100" cy="100" r="4" fill="currentColor" />
                    <circle cx="60" cy="80" r="3" fill="currentColor" />
                    <circle cx="140" cy="70" r="3" fill="currentColor" />
                    <circle cx="80" cy="130" r="3" fill="currentColor" />
                    <circle cx="130" cy="120" r="3" fill="currentColor" />
                    <circle cx="160" cy="100" r="2" fill="currentColor" />
                    <circle cx="40" cy="110" r="2" fill="currentColor" />
                    {/* Interconnections representing the Offline Mesh Payment Simulator */}
                    <line x1="100" y1="100" x2="60" y2="80" />
                    <line x1="100" y1="100" x2="140" y2="70" />
                    <line x1="100" y1="100" x2="80" y2="130" />
                    <line x1="100" y1="100" x2="130" y2="120" />
                    <line x1="60" y1="80" x2="80" y2="130" />
                    <line x1="60" y1="80" x2="40" y2="110" />
                    <line x1="140" y1="70" x2="130" y2="120" />
                    <line x1="140" y1="70" x2="160" y2="100" />
                    <line x1="80" y1="130" x2="130" y2="120" />
                    <line x1="80" y1="130" x2="40" y2="110" />
                    <line x1="130" y1="120" x2="160" y2="100" />
                    {/* Surrounding concentric orbits */}
                    <circle cx="100" cy="100" r="75" strokeDasharray="3 3" />
                    <circle cx="100" cy="100" r="85" />
                </svg>
            </div>

            {/* Projects watermark text */}
            <div className="absolute top-[68%] left-[8%] font-serif font-extrabold text-9xl sm:text-[11rem] tracking-[0.2em] text-primary/3 dark:text-primary/2 select-none uppercase pointer-events-none rotate-[-5deg]">
                ENGINEER
            </div>

            {/* Bottom Left: Stellar map / Circular astrolabe (Experience/Contact area) */}
            <div className="absolute bottom-[8%] -left-[10%] w-[500px] h-[500px] opacity-[0.03] dark:opacity-[0.02] text-primary transition-opacity duration-300">
                <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
                    <circle cx="100" cy="100" r="95" />
                    <circle cx="100" cy="100" r="90" strokeDasharray="5 2" />
                    <circle cx="100" cy="100" r="65" />
                    <circle cx="100" cy="100" r="40" />
                    <polygon points="100,10 178,145 22,145" strokeDasharray="2 2" />
                    <polygon points="100,190 22,55 178,55" strokeDasharray="2 2" />
                </svg>
            </div>

            {/* Contact watermark text */}
            <div className="absolute bottom-[14%] right-[8%] font-serif font-extrabold text-9xl sm:text-[11rem] tracking-[0.18em] text-primary/3 dark:text-primary/2 select-none uppercase pointer-events-none rotate-[8deg] origin-bottom-right">
                DEVELOPER
            </div>
        </div>
    )
}
