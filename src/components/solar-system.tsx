"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"

export function SolarSystem() {
    const { scrollY } = useScroll()

    // Smooth scroll rotation: 0.08 degree per pixel
    const scrollRotation = useTransform(scrollY, (y) => y * 0.08)

    // Click offset tracking
    const clickMotionValue = useMotionValue(0)
    
    // Smooth spring animation for clicks (Boosts rotation smoothly)
    const smoothClickRotation = useSpring(clickMotionValue, {
        stiffness: 40,
        damping: 12,
        mass: 1
    })

    // Listen to global click events to accelerate the rotation
    useEffect(() => {
        const handleGlobalClick = () => {
            // Add 45 degrees of rotation offset on each click
            clickMotionValue.set(clickMotionValue.get() + 45)
        }
        window.addEventListener("click", handleGlobalClick)
        return () => window.removeEventListener("click", handleGlobalClick)
    }, [clickMotionValue])

    // Combine scroll and click rotations
    const baseRotation = useTransform(
        [scrollRotation, smoothClickRotation],
        ([rScroll, rClick]) => (rScroll as number) + (rClick as number)
    )

    // Dynamic rotation speeds for planets
    const sunGlow = useTransform(baseRotation, r => (Math.sin(r * 0.02) + 1) * 0.2 + 0.8)
    const mercuryRot = useTransform(baseRotation, r => r * 3.5)
    const venusRot = useTransform(baseRotation, r => r * 2.2)
    const earthRot = useTransform(baseRotation, r => r * 1.5)
    const moonRot = useTransform(baseRotation, r => r * 12.0)
    const marsRot = useTransform(baseRotation, r => r * 1.1)
    const jupiterRot = useTransform(baseRotation, r => r * 0.7)
    const saturnRot = useTransform(baseRotation, r => r * 0.4)

    return (
        <div className="fixed top-1/2 -right-52 md:-right-40 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] pointer-events-none overflow-visible -z-10 select-none opacity-[0.22] dark:opacity-[0.12] text-primary transition-opacity duration-300">
            <svg 
                viewBox="0 0 400 400" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.6" 
                className="w-full h-full overflow-visible"
            >
                {/* Central Sun */}
                <motion.circle 
                    cx="200" 
                    cy="200" 
                    r="12" 
                    fill="currentColor" 
                    className="text-primary"
                    style={{ opacity: sunGlow }}
                />
                <circle cx="200" cy="200" r="16" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" />

                {/* 1. Mercury Orbit & Planet */}
                <circle cx="200" cy="200" r="35" stroke="currentColor" strokeWidth="0.3" strokeDasharray="3 3" />
                <motion.g style={{ transformOrigin: "200px 200px", rotate: mercuryRot }}>
                    <circle cx="200" cy="165" r="2" fill="currentColor" />
                </motion.g>

                {/* 2. Venus Orbit & Planet */}
                <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.3" />
                <motion.g style={{ transformOrigin: "200px 200px", rotate: venusRot }}>
                    <circle cx="200" cy="140" r="3.2" fill="currentColor" />
                </motion.g>

                {/* 3. Earth & Moon System */}
                <circle cx="200" cy="200" r="95" stroke="currentColor" strokeWidth="0.4" />
                <motion.g style={{ transformOrigin: "200px 200px", rotate: earthRot }}>
                    {/* Earth */}
                    <circle cx="200" cy="105" r="4.2" fill="currentColor" />
                    {/* Moon Orbit */}
                    <circle cx="200" cy="105" r="11" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 1" />
                    {/* Moon */}
                    <motion.g style={{ transformOrigin: "200px 105px", rotate: moonRot }}>
                        <circle cx="200" cy="94" r="1.2" fill="currentColor" />
                    </motion.g>
                </motion.g>

                {/* 4. Mars Orbit & Planet */}
                <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="0.4" strokeDasharray="4 2" />
                <motion.g style={{ transformOrigin: "200px 200px", rotate: marsRot }}>
                    <circle cx="200" cy="70" r="3" fill="currentColor" />
                </motion.g>

                {/* 5. Jupiter Orbit & Planet */}
                <circle cx="200" cy="200" r="165" stroke="currentColor" strokeWidth="0.4" />
                <motion.g style={{ transformOrigin: "200px 200px", rotate: jupiterRot }}>
                    {/* Jupiter */}
                    <circle cx="200" cy="35" r="6.8" fill="currentColor" />
                    {/* Faint band line */}
                    <line x1="194.5" y1="35" x2="205.5" y2="35" stroke="var(--background)" strokeWidth="0.5" />
                </motion.g>

                {/* 6. Saturn Orbit & Planet with Rings */}
                <circle cx="200" cy="200" r="200" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 3" />
                <motion.g style={{ transformOrigin: "200px 200px", rotate: saturnRot }}>
                    {/* Saturn */}
                    <circle cx="200" cy="0" r="5" fill="currentColor" />
                    {/* Rings */}
                    <ellipse cx="200" cy="0" rx="9" ry="2.2" stroke="currentColor" strokeWidth="0.8" transform="rotate(15 200 0)" />
                </motion.g>

                {/* Aesthetic vector line crosshairs */}
                <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 4" />
                <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 4" />
            </svg>
        </div>
    )
}
