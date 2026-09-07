import ReviewCard from "./ReviewCard"
import { useDraggableCards } from "./MovableCards"
export default function MovableContainer () {
    useDraggableCards("#container", ".flair--1")
    return(
        <div className="bg-amber-500 w-full h-50" id="container">
            <div className="flair flair--1 w-5 h-5 bg-amber-950">
            </div>
        </div>
    )
}