"use client"

import { useEffect } from "react"

export function SimpleAnalytics() {
  useEffect(() => {
    const trackPageView = () => {
      try {
        // Track basic page metrics silently
        if (typeof window !== "undefined" && window.performance) {
          const timing = window.performance.timing
          const loadTime = timing.loadEventEnd - timing.navigationStart

          // Store metrics for potential analytics integration
          if (loadTime > 0) {
            sessionStorage.setItem("page_load_time", loadTime.toString())
          }
        }
      } catch (error) {
        // Silently fail
      }
    }

    if (document.readyState === "complete") {
      trackPageView()
    } else {
      window.addEventListener("load", trackPageView)
    }

    // Track scroll depth
    let maxScroll = 0
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
      )
      if (scrollPercent > maxScroll && scrollPercent <= 100) {
        maxScroll = scrollPercent
        sessionStorage.setItem("max_scroll", maxScroll.toString())
      }
    }

    window.addEventListener("scroll", trackScroll, { passive: true })

    return () => {
      window.removeEventListener("load", trackPageView)
      window.removeEventListener("scroll", trackScroll)
    }
  }, [])

  return null
}
