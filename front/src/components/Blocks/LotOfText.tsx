import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = 'We create visual identities that sink their teeth into memory.';

export default function LotOfTextBlock () {
    const sectionRef = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: { trigger: section, start: 'top 60%', once: true },
            })
                .from('.lot-word', {
                    yPercent: 110,
                    duration: 0.9,
                    ease: 'power4.out',
                    stagger: 0.06,
                })
                .from(
                    '.lot-fade',
                    { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 },
                    '-=0.5'
                );
        }, section);

        return () => ctx.revert();
    }, []);

    return(
        <section ref={sectionRef} className="bg-[#F0EEE6] px-[2.5vw] pt-[5.5vw] pb-[2.5vw] text-[#181716] rounded-b-[4.5vw] max-md:rounded-b-[8vw] flex flex-col gap-[5vw] h-screen max-lg:h-auto max-md:px-4 max-md:pt-24 max-md:pb-10 max-md:gap-8" >
            <p className="text-[9.8vw] text-left uppercase" style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 0.91}} aria-label={HEADLINE}>
                {HEADLINE.split(' ').map((word, i, arr) => (
                    <span key={i} aria-hidden>
                        <span className="inline-block overflow-hidden align-top">
                            <span className="lot-word block will-change-transform">{word}</span>
                        </span>
                        {i < arr.length - 1 ? ' ' : null}
                    </span>
                ))}
            </p>
            <div className="flex flex-row gap-[10vw] pr-[3vw] max-md:flex-col max-md:gap-6 max-md:pr-0">
                <div className="lot-fade min-w-[43.3vw] max-md:min-w-0 pt-[0.2vw]">
                    <p className="text-[3.3vw] max-md:text-[7vw] text-left" style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 1.1}}>
                        Lead & Fang is an independent creative agency based in Nova Scotia, Canada, working with ambitious businesses around the world.
                    </p>
                </div>
                <p className="lot-fade text-[1.2vw] max-lg:text-sm text-left" style={{ fontFamily: '"AzeretMono", sans-serif', lineHeight: 1.1}}>
                    We build identities, campaigns, and visual systems for brands at every stage — from new ventures finding their voice to established companies ready to sharpen it. Our work is distinctive, consistent, and built to perform in the real world.
                </p>
            </div>
            <div className="flex flex-row gap-[13vw] pr-[5vw] max-md:flex-col-reverse max-md:gap-6 max-md:pr-0">
                <button className="lot-fade w-[40vw] max-md:w-full h-[5.2vw] text-[1.2vw] max-lg:text-base pointer-events-auto overflow-hidden bg-[#181716] text-[#F0EEE6] 
                    transition-colors duration-700 before:absolute
                    before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-[#FFBF00]
                    before:transition-transform before:duration-700 before:content-[''] hover:text-[#181716] 
                    hover:before:scale-x-100 min-h-17 flex items-center justify-center rounded-[111px] 
                    border-2 backdrop-blur-[3px] px-8 text-left">Start your project
                </button>
                <p className="lot-fade text-[3vw] max-md:text-[8vw] text-left" style={{ fontFamily: '"Azkia", sans-serif', lineHeight: 1}}>
                    From a single touchpoint to an entire brand system.
                </p>
            </div>
        </section>
    )
}