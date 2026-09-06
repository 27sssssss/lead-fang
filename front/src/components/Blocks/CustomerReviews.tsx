import { useMemo } from "react"
import ReviewCard from "../cards/ReviewCard"
import reviews from "../../assets/reviews.json"

const CARD_OFFSETS: {x: number; y: number}[] = [
    { x: 0, y: -60 },
    { x: 20, y: 40 },
    { x: -10, y: -100 },
    { x: 30, y: 20 },
    { x: -20, y: 80 },
    { x: 10, y: -40 },
    { x: -30, y: 60 },
    { x: 0, y: -80 },
    { x: 25, y: 10 },
    { x: -15, y: -30 },
    { x: 15, y: 90 },
    { x: -25, y: -70 },
    { x: 5, y: 50 },
    { x: -35, y: 0 },
    { x: 20, y: -50 },
]


export default function CustomerReviews(){
    // duplicated so the track can loop seamlessly at -50%
    const loopedReviews = [...reviews, ...reviews]


    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[#F0EEE6] text-9xl max-w-96">
                CLIENT REVIEWS
            </h1>
            <div className="w-full overflow-x-hidden">
                <div className="flex w-max items-center gap-24 py-32 animate-marquee hover:[animation-play-state:paused]">
                    {loopedReviews.map((review, index) => {
                        const { x, y } = CARD_OFFSETS[index % CARD_OFFSETS.length]
                        return (
                            <div
                                key={`${review.name}-${index}`}
                                style={{ transform: `translate(${x}px, ${y}px)` }}
                            >
                                <ReviewCard
                                    name={review.name}
                                    company={review.company_position}
                                    text={review.review}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}