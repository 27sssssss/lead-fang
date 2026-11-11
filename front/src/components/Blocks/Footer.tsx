import vectorLead from '../../assets/footerleadndfang.svg'
import vectorCircle from '../../assets/leadshadow.svg'

export default function Footer (){
    return(
        <footer>
            <section className="pt-20 w-full px-10 max-md:pt-6 max-md:px-2.5 max-md:pb-10">
                <div className="flex flex-col">
                    <div className="relative z-2 grid grid-cols-5 items-center -mb-10 max-md:contents">
                        <a href='https://twitter.com' className='flex justify-start max-md:order-3 max-md:relative max-md:z-3 max-md:mt-8'><div className='w-min underanim'>leadndfang@gmail.com</div></a>
                        <a href='https://twitter.com'  className='flex justify-center max-md:order-3 max-md:relative max-md:z-3 max-md:justify-start max-md:mt-6'><div className='w-min underanim'>Twitter</div></a>
                        <div className="relative mx-auto w-[80%] max-md:order-1 max-md:w-[40%] max-md:z-2 max-md:-mb-[26vw]">
                            <div
                                className="pointer-events-none absolute -mb-20 inset-[5%] z-0 rounded-full bg-[#181716] blur-[13.1px]"
                            />
                            <img
                                src={vectorCircle}
                                alt=""
                                className="relative z-10 mx-auto w-full"
                            />
                        </div>
                        <a href='https://twitter.com'  className='flex justify-center max-md:order-3 max-md:relative max-md:z-3 max-md:justify-start max-md:mt-6'><div className='w-min underanim'>Instagram</div></a>
                        <a href='https://twitter.com'  className='flex justify-end max-md:order-3 max-md:relative max-md:z-3 max-md:justify-start max-md:mt-6'><div className='w-min underanim'>Linkedin</div></a>
                    </div>
                    <img src={vectorLead} className='relative z-0 max-md:order-2'>
                    </img>
                </div>
            </section>
        </footer>
    )
}