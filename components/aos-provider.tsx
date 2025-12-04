"use client"

import type React from "react"
import { useEffect, useState } from "react"

export function AOSProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Simple fade-in animation without external AOS library
    setIsReady(true)

    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    // Observe all elements with data-aos attribute
    const animatedElements = document.querySelectorAll("[data-aos]")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return <>{children}</>
}
