import { useEffect, useRef } from "react"
import gsap from "gsap"
import eyeIcon from "../../assets/Vector_eye.svg"
import closedEyeIcon from "../../assets/Vetor_closed_eye.svg"

interface CustomCursorProps {
    containerRef: React.RefObject<HTMLElement | null>
    isOpen: boolean
}

export default function CustomCursor({ containerRef, isOpen }: CustomCursorProps) {
    const cursorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        const cursor = cursorRef.current
        if (!container || !cursor) return

        // плавно "подтягивает" объект к реальным координатам мыши, а не дёргает его мгновенно
        const setX = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3" })
        const setY = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3" })

        const onMove = (event: MouseEvent) => {
            const rect = container.getBoundingClientRect()
            setX(event.clientX - rect.left)
            setY(event.clientY - rect.top)
        }
        const onEnter = () => gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" })
        const onLeave = () => gsap.to(cursor, { opacity: 0, scale: 0.6, duration: 0.25, ease: "power2.out" })

        container.addEventListener("mousemove", onMove)
        container.addEventListener("mouseenter", onEnter)
        container.addEventListener("mouseleave", onLeave)

        return () => {
            container.removeEventListener("mousemove", onMove)
            container.removeEventListener("mouseenter", onEnter)
            container.removeEventListener("mouseleave", onLeave)
        }
    }, [containerRef])

    return (
        <div
            ref={cursorRef}
            className="pointer-events-none absolute top-0 left-0 z-10 translate-x-1/2 -translate-y-1/2 scale-60 opacity-0"
        >
            <div className="relative h-15 w-15">
                <img
                    src={closedEyeIcon}
                    alt=""
                    className={`absolute inset-0 w-full transition-all duration-300 ease-out ${isOpen ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
                />
                <img
                    src={eyeIcon}
                    alt=""
                    className={`absolute inset-0 w-full transition-all duration-300 ease-out ${isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
                />
            </div>
        </div>
    )
}
