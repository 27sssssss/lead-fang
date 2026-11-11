import svg from "../../assets/filler.svg"
import LottieAnimation from "../Lottietry"
export default function TheyMust (){
    return(
        <>
            <section className="flex flex-col items-center bg-[#181716] px-[24vw] gap-[2vw] max-md:px-[10vw] max-md:gap-3 max-md:pt-16 md:max-lg:px-[14vw]">
                <LottieAnimation></LottieAnimation>
                <p className="text-[8.8vw] max-md:text-[13.5vw] uppercase" style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 0.91}}>
                    They must recognize your brand
                </p>  
                <img src={svg} className="min-w-[8vw]"></img>
                <p className="text-[3vw] px-[1vw] max-md:text-[4.6vw] max-md:px-0 md:max-lg:text-[3.4vw]" style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 0.91}}>
                    A brand doesn’t live in a logo. It lives everywhere people experience it—on a business card, across a presentation, on packaging, in a campaign, on a screen, across a storefront, or on the side of a building. Every touchpoint is an opportunity to build recognition. We make them speak the same language: one brand, one unmistakable visual identity.                </p>            
            </section>
        </>
    )
}