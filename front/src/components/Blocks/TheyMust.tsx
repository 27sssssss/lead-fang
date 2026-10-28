import svg from "../../assets/filler.svg"
import LottieAnimation from "../Lottietry"
export default function TheyMust (){
    return(
        <>
            <section className="h-screen max-lg:h-auto flex flex-col items-center bg-[#181716] px-[24vw] max-lg:px-[12vw] max-md:px-4 gap-[2vw] max-md:gap-6">
                <LottieAnimation></LottieAnimation>
                <p className="text-[8.8vw] max-md:text-[15vw] uppercase" style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 0.91}}>
                    They must recognize your brand
                </p>  
                <img src={svg} className="min-w-[8vw] max-md:min-w-[20vw]"></img>
                <p className="text-[3vw] max-lg:text-[4.5vw] max-md:text-[6.5vw] px-[1vw]" style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 0.91}}>
                    A brand doesn’t live in a logo. It lives everywhere people experience it—on a business card, across a presentation, on packaging, in a campaign, on a screen, across a storefront, or on the side of a building. Every touchpoint is an opportunity to build recognition. We make them speak the same language: one brand, one unmistakable visual identity.                </p>            
            </section>
        </>
    )
}