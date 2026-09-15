import vectorLead from '../../assets/footerleadndfang.svg'
import vectorCircle from '../../assets/leadshadow.svg'

export default function Footer (){
    return(
        <footer>
            <section className="pt-20 w-full px-10">
                <div className="flex flex-col">
                    <div className="relative z-2 grid grid-cols-5 items-center -mb-10">
                        <a href='https://twitter.com' className='flex justify-start'><div className='w-min underanim'>leadndfang@gmail.com</div></a>
                        <a href='https://twitter.com'  className='flex justify-center'><div className='w-min underanim'>Twitter</div></a>
                        <div className="relative mx-auto w-[80%]">
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
                        <a href='https://twitter.com'  className='flex justify-end'><div className='w-min underanim'>Linkedin</div></a>
                    </div>
                    <img src={vectorLead} className='relative z-0'>
                    </img>
                </div>
            </section>
        </footer>
    )
}