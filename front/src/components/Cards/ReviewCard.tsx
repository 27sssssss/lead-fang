import commas from '../../assets/Vector.svg'
import { useState } from 'react';

interface ReviewCardFilling {
    name: string;
    company: string;
    text: string;
}


export default function ReviewCard({name, company, text}: ReviewCardFilling){
    const [isHovered, setIsHovered] = useState(false)

    return(
            <div className="max-w-130 min-w-130 bg-[#FFBF00] text-[#00211C] border rounded-3xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex flex-col justify-between px-5 py-3 min-h-60">
                    <img src={commas} alt="" className="h-6 w-6 self-start" />
                        <div className=''>
                            <p className='text-3xl font-semibold uppercase' style={{ fontFamily: '"AzeretMono", sans-serif'}}>Alessandro Romano</p>
                            <p className='font-light uppercase text-[14px]'>
                                Founder & CEO, Hospitality Group
                            </p>
                        </div>
                    <img src={commas} alt="" className="self-end h-6 w-6 " />
                </div>
            </div>
        
    )
}