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
            <div className="max-w-133 min-w-133 bg-[#FFBF00] text-[#00211C] border rounded-3xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex flex-col justify-between px-5 py-3 min-h-68">
                    <img src={commas} alt="" className="h-6 w-6 self-start" />
                    <div
                        className={`
                            absolute inset-0 flex flex-col justify-center
                            transition-all duration-500
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${isHovered
                                ? 'opacity-0 -translate-y-8 scale-95 blur-sm'
                                : 'opacity-100 translate-y-0 scale-100 blur-0'
                            }
                        `}
                    >
                        <p
                            className="text-3xl font-semibold uppercase"
                            style={{ fontFamily: '"AzeretMono", sans-serif' }}
                        >
                            {name}
                        </p>

                        <p className="font-light uppercase text-[14px]">
                            {company}
                        </p>
                    </div>
                    <div
                        className={`
                            absolute inset-0 px-15 flex items-center
                            transition-all duration-500
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${isHovered
                                ? 'opacity-100 translate-y-0 scale-100 blur-0'
                                : 'opacity-0 translate-y-8 scale-95 blur-sm'
                            }
                        `}
                    >
                        <p className="font-medium text-[18px]">
                            {text}
                        </p>
                    </div>
                    <img src={commas} alt="" className="self-end h-6 w-6 " />
                </div>
            </div>

            
        
    )
}