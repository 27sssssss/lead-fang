import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// один ScrollSmoother на всё приложение — страницы монтируются внутрь #smooth-content
export default function SmoothScroll({ children }: { children: ReactNode }) {
    const smootherRef = useRef<ScrollSmoother | null>(null)
    const { pathname } = useLocation()

    useLayoutEffect(() => {
      const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      })
      smootherRef.current = smoother
      return () => {
        smoother.kill()
        smootherRef.current = null
      }
    }, [])

    // при смене страницы — сразу наверх и пересчёт триггеров под новую высоту контента
    useLayoutEffect(() => {
      smootherRef.current?.scrollTop(0)
      ScrollTrigger.refresh()
    }, [pathname])

    return (
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {children}
        </div>
      </div>
    )
}
