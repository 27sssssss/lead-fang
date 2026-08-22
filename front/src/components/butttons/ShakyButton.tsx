import type { ReactNode } from "react"

type Props = {
    isActive: boolean
    className?: string
    children: ReactNode;
}

export default function ShakyButton({
    isActive, className = "", children
}: Props){
    return (
        <button
        type="button"
        className={[
            "transition-all duration-200",
            isActive ? "scale-up-center" : "",
            className,
        ]
            .filter(Boolean)
            .join(" ")}
        >
        {children}
        </button>
    )
}