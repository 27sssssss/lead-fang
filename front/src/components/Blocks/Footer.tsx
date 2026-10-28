import vectorLead from '../../assets/footerleadndfang.svg'
import vectorCircle from '../../assets/leadshadow.svg'

export default function Footer (){
    return(
        <footer>
            <section className="pt-20 w-full px-10 max-md:px-4">
                <div className="flex flex-col">
                    <div className="relative z-2 grid grid-cols-5 max-md:grid-cols-2 max-md:gap-y-4 max-md:text-sm items-center -mb-10 max-md:-mb-4">
                        <a href='https://twitter.com' className='flex justify-start max-md:justify-center'><div className='w-min underanim'>leadndfang@gmail.com</div></a>
                        <a href='https://twitter.com'  className='flex justify-center'><div className='w-min underanim'>Twitter</div></a>
                        <div className="relative mx-auto w-[80%] max-md:w-[30%] max-md:order-last max-md:col-span-2">
                            <div
                                className="pointer-events-none absolute -mb-20 inset-[5%] z-0 rounded-full bg-[#181716] blur-[13.1px]"
                            />
                            <img
                                src={vectorCircle}
                                alt=""
                                className="relative z-10 mx-auto w-full"
                            />
                        </div>
                        <a href='https://twitter.com'  className='flex justify-center'><div className='w-min underanim'>Instagram</div></a>
                        <a href='https://twitter.com'  className='flex justify-end max-md:justify-center'><div className='w-min underanim'>Linkedin</div></a>
                    </div>
                    <img src={vectorLead} className='relative z-0'>
                    </img>
                </div>
            </section>
        </footer>
    )
}