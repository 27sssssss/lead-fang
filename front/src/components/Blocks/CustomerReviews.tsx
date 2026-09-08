import ReviewCard from "../cards/ReviewCard"
import reviews from "../../assets/review_cards.json"
import CustomCursor from "../cursor/CustomCursor"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import { InertiaPlugin } from "gsap/InertiaPlugin"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

gsap.registerPlugin(Draggable, InertiaPlugin)


const CARD_OFFSETS: {x: number; y: number}[] = [
    { x: 0, y: -80 },
    { x: 20, y: 50 },
    { x: -10, y: -120 },
    { x: 30, y: 30 },
    { x: -20, y: 40 },
    { x: 10, y: -80 },
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

// отрицательное значение — карточка накладывается на предыдущую, положительное — обычный зазор
const CARD_MARGINS: number[] = [
    0, -64, 32, 32, -64, 32, -64, 32, 32, -64, 32, -64, -64, 32, 32,
]


export default function CustomerReviews(){
    const loopedReviews = [...reviews, ...reviews]
    const trackRef = useRef<HTMLDivElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])
    const lastXRef = useRef(0)
    const [isCardHovered, setIsCardHovered] = useState(false)

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
            maxDuration: 1,
            minDuration: 0.3,
            overshootTolerance: 0,
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

        // карточки со своим базовым наклоном из reviews.rotation, к которому добавляется общий drag-наклон
        function getCardTargets() {
            return cardRefs.current
                .map((el, i) => ({ el, base: loopedReviews[i]?.rotation ?? 0 }))
                .filter((card): card is { el: HTMLDivElement; base: number } => card.el !== null)
        }

        // один и тот же дополнительный наклон применяется сразу ко всем карточкам, пропорционально скорости скролла
        function applyDragEffects(this: Draggable) {
            wrapDragPosition.call(this)

            const deltaX = this.x - lastXRef.current
            lastXRef.current = this.x

            const tilt = gsap.utils.clamp(-6, 6, deltaX * 0.2)
            const targets = getCardTargets()
            gsap.to(targets.map(t => t.el), {
                rotate: (i) => targets[i].base + tilt,
                duration: 0.2,
                ease: "power2.out",
                overwrite: "auto"
            })
        }

        // плавно возвращает наклон каждой карточки к её собственному базовому значению после отпускания
        function springTiltBack() {
            const targets = getCardTargets()
            gsap.to(targets.map(t => t.el), {
                rotate: (i) => targets[i].base,
                duration: 0.6,
                ease: "elastic.out(1, 0.4)",
                overwrite: "auto"
            })
        }

        return () => {
            tween.kill()
            draggable.kill()
        }
    }, [])

    return (
        <div className="flex flex-col items-center">
            <div className="relative flex flex-col justify-center max-w-228.75 w-full pb-10">
                <p
                className="text-[11rem] font-bold "
                style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 0.9 }}
                >
                CUSTOMERS
                </p>

                <p
                className="text-9xl stroke-text absolute top-[40%] left-[33%]"
                style={{ fontFamily: '"AZKIA", sans-serif' }}
                >
                Confessions
                </p>
          </div>
            <div ref={wrapperRef} className="relative w-full overflow-x-hidden overflow-y-hidden">
                <CustomCursor containerRef={wrapperRef} isOpen={isCardHovered} />
                <div ref={trackRef} className="flex w-max items-center py-32 cursor-grab active:cursor-grabbing">
                    {loopedReviews.map((review, index) => {
                        const { y } = CARD_OFFSETS[index % CARD_OFFSETS.length]
                        return (
                            <div
                                key={`${review.name}-${index}`}
                                ref={el => { cardRefs.current[index] = el }}
                                onMouseEnter={() => setIsCardHovered(true)}
                                onMouseLeave={() => setIsCardHovered(false)}
                                style={{
                                    transform: `translateY(${y}px) rotate(${review.rotation}deg)`,
                                    marginLeft: index === 0 ? 0 : CARD_MARGINS[index % CARD_MARGINS.length],
                                }}
                            >
                                <ReviewCard name={review.name} company={review.company_position} text={review.review} variant={review.variant} rotation={review.rotation}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}