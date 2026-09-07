import ReviewCard from "../cards/ReviewCard"
import reviews from "../../assets/review_cards.json"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import { InertiaPlugin } from "gsap/InertiaPlugin"
import { useEffect } from "react"
import { useRef } from "react"

gsap.registerPlugin(Draggable, InertiaPlugin)


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
    const loopedReviews = [...reviews, ...reviews]
    const trackRef = useRef<HTMLDivElement>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])
    const lastXRef = useRef(0)

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        // ширина одного "прогона" ленты — половина, т.к. массив продублирован
        const loopWidth = track.scrollWidth / 2

        const tween = gsap.to(track, {
            x: -loopWidth,
            duration: 40,
            ease: "none",
            repeat: -1,
            modifiers: {
                // оборачиваем координату так, чтобы лента "телепортировалась" бесшовно
                x: gsap.utils.unitize(x => parseFloat(x) % loopWidth)
            }
        })

        const [draggable] = Draggable.create(track, {
            type: "x",
            inertia: true,
            onPress: function (this: Draggable) {
                tween.pause()
                lastXRef.current = this.x
            },
            onDrag: applyDragEffects,
            onThrowUpdate: applyDragEffects,
            onDragEnd: () => {
                tween.resume()
                springTiltBack()
            },
            onThrowComplete: () => {
                tween.resume()
                springTiltBack()
            },
        })

        // телепортирует ленту на loopWidth назад/вперёд, когда драг уходит за пределы одной копии контента
        function wrapDragPosition(this: Draggable) {
            const wrapped = gsap.utils.wrap(-loopWidth, 0, this.x)
            if (wrapped !== this.x) {
                gsap.set(track, { x: wrapped })
                this.update()
            }
        }

        // один и тот же наклон применяется сразу ко всем карточкам, пропорционально скорости скролла
        function applyDragEffects(this: Draggable) {
            wrapDragPosition.call(this)

            const deltaX = this.x - lastXRef.current
            lastXRef.current = this.x

            const tilt = gsap.utils.clamp(-15, 15, deltaX * 0.6)
            const cards = cardRefs.current.filter((el): el is HTMLDivElement => el !== null)
            gsap.to(cards, { rotate: tilt, duration: 0.2, ease: "power2.out", overwrite: "auto" })
        }

        // плавно возвращает наклон всех карточек в 0 с пружинным эффектом после отпускания
        function springTiltBack() {
            const cards = cardRefs.current.filter((el): el is HTMLDivElement => el !== null)
            gsap.to(cards, { rotate: 0, duration: 0.6, ease: "elastic.out(1, 0.4)", overwrite: "auto" })
        }

        return () => {
            tween.kill()
            draggable.kill()
        }
    }, [])

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[#F0EEE6] text-9xl max-w-96">
                CLIENT REVIEWS
            </h1>
            <div className="w-full overflow-x-hidden">
                <div ref={trackRef} className="flex w-max items-center gap-24 py-32 cursor-grab active:cursor-grabbing">
                    {loopedReviews.map((review, index) => {
                        const { y } = CARD_OFFSETS[index % CARD_OFFSETS.length]
                        return (
                            <div
                                key={`${review.name}-${index}`}
                                ref={el => { cardRefs.current[index] = el }}
                                style={{ transform: `translateY(${y}px)` }}
                            >
                                <ReviewCard name={review.name} company={review.company_position} text={review.review} variant={review.variant}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}