import LottieAnimation from "../Lottietry";

export default function LotOfTextBlock () {
    return(
        <section className="bg-[#F0EEE6] px-[2.5vw] pt-[5.5vw] pb-[2.5vw] text-[#181716] rounded-b-[4.5vw] flex flex-col gap-[5vw]" >
            <p className="text-[9.8vw] text-left uppercase" style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 0.91}}>
                We create visual identities that sink their teeth into memory.
            </p>
            <div className="flex flex-row gap-[10vw] pr-[3vw]">
                <div className="min-w-[43.3vw] pt-[0.2vw]">
                    <p className="text-[3.3vw] text-left" style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 1.1}}>
                        Lead & Fang is an independent creative agency based in Nova Scotia, Canada, working with ambitious businesses around the world.
                    </p>
                </div>
                <p className="text-[1.2vw] text-left" style={{ fontFamily: '"AzeretMono", sans-serif', lineHeight: 1.1}}>
                    We build identities, campaigns, and visual systems for brands at every stage — from new ventures finding their voice to established companies ready to sharpen it. Our work is distinctive, consistent, and built to perform in the real world.
                </p>
            </div>
            <div className="flex flex-row gap-[13vw] pr-[5vw]">
                <button className="w-[40vw] h-[5.2vw] text-[1.2vw] pointer-events-auto overflow-hidden bg-[#181716] text-[#F0EEE6] 
                    transition-colors duration-700 before:absolute
                    before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-[#FFBF00]
                    before:transition-transform before:duration-700 before:content-[''] hover:text-[#181716] 
                    hover:before:scale-x-100 min-h-17 flex items-center justify-center rounded-[111px] 
                    border-2 backdrop-blur-[3px] px-8 text-left">Start your project
                </button>
                <p className="text-[3vw] text-left" style={{ fontFamily: '"Azkia", sans-serif', lineHeight: 1}}>
                    From a single touchpoint to an entire brand system.
                </p>
            </div>
        </section>
    )
}