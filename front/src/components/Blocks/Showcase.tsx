import case1 from '../../assets/cases/case1.png'
import case2 from '../../assets/cases/case2.png'
import case3 from '../../assets/cases/case3.png'
import case4 from '../../assets/cases/case4.png'
import case5 from '../../assets/cases/case5.png'

// на ховере полная картинка затемняется и становится фоном, а её копия сжимается в центр — «картинка в картинке»
function CaseImage({ src, className = '' }: { src: string; className?: string }) {
    const ease = 'duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none'
    return (
        <div className={`group relative overflow-hidden ${className}`}>
            <img src={src} className='block w-full h-full object-cover' />
            <div className={`absolute inset-0 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100 ${ease}`} />
            <img
                src={src}
                aria-hidden='true'
                className={`absolute inset-0 w-full h-full object-cover rounded-[1.5vw] transition-transform group-hover:scale-70 ${ease}`}
            />
        </div>
    )
}

export default function Showcase(){
    return(
        <>
        <section className="">
                <p className="text-[4vw] max-md:text-[9vw] text-[#FFBF00] stroke-text2 relative top-[1.5vw] max-md:top-[3vw] left-[3%] text-left" style={{ fontFamily: '"Azkia", sans-serif', lineHeight: 1}}>
                    Showcase
                </p>
                <div className="bg-[#F0EEE6] w-full rounded-br-[6vw] py-[2.5vw]">
                    <p className="text-[10vw] pl-[2.5vw] text-left text-[#181716] uppercase" style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 0.91}}>
                        OUR GOAL IS TO CREATE WORK THAT BITES DEEP INTO THE MEMORY.
                    </p> 
                </div>
            <div className='flex flex-col'>
              <div className='grid grid-cols-2 max-md:grid-cols-1'>
                <div className='flex flex-col justify-between'>
                  <div className='flex flex-col'>
                    <CaseImage src={case1} className='rounded-br-[6vw]' />
                      <div className='border-[0.3vw] max-md:border-2 pt-[1vw] px-[2.5vw] max-md:px-4 pb-[1.4vw] border-[#f0eee6] flex flex-col text-left uppercase rounded-tr-[6vw] font-normal'>
                        <p className='text-[0.66vw] max-lg:text-[10px]'>
                          Case1case1case1case1casdd1
                        </p>
                        <p className='text-[0.9vw] max-lg:text-xs'>
                          No fluff. Just brands with bite.
                        </p>
                      </div>
                  </div>
                  <div className='grid grid-cols-2'>
                      <div className='flex flex-col'>
                        <CaseImage src={case3} />
                          <div className='flex flex-col text-left uppercase bg-[#f0eee6] text-[#181716] font-normal border-[0.3vw] max-md:border-2 pt-[1vw] px-[2.5vw] max-md:px-4 pb-[1.2vw] border-[#f0eee6]'>
                            <p className='text-[0.66vw] max-lg:text-[10px]'>
                              No fluff. Just brands with bite.
                            </p>
                            <p className='text-[0.9vw] max-lg:text-xs'>
                              No fluff. Just brands with bite.
                            </p>
                          </div>
                      </div>
                  <div>
                  <div className='flex flex-col'>
                    <CaseImage src={case4} />
                    <div className='flex flex-col text-left uppercase text-[#f0eee6] font-normal border-[0.3vw] max-md:border-2 pt-[1vw] px-[2.5vw] max-md:px-4 pb-[1.2vw] border-[#f0eee6]'>
                        <p className='text-[0.66vw] max-lg:text-[10px]'>
                          No fluff. Just brands with bite.
                        </p>
                        <p className='text-[0.9vw] max-lg:text-xs'>
                          No fluff. Just brands with bite.
                        </p>
                      </div>
                  </div>
                    </div>
                  </div>
                </div>
                  <div className='flex flex-col'>
                    <CaseImage src={case2} className='h-full rounded-tr-[6vw]' />
                    <div className='flex flex-col text-left uppercase text-[#181716] font-normal border-l-0 bg-[#f0eee6]  border-[0.3vw] max-md:border-2 pt-[1vw] px-[2.5vw] max-md:px-4 pb-[1.2vw] border-[#f0eee6]'>
                        <p className='text-[0.66vw] max-lg:text-[10px]'>
                          No fluff. Just brands with bite.
                        </p>
                        <p className='text-[0.9vw] max-lg:text-xs'>
                          No fluff. Just brands with bite.
                        </p>
                      </div>
                  </div>
              </div>
              <div className=''>
                <div className='flex flex-col '>
                    <CaseImage src={case5} />
                    <div className='flex flex-col text-left uppercase bg-[#f0eee6] text-[#181716] font-normal border-[0.3vw] max-md:border-2 pt-[1vw] px-[2.5vw] max-md:px-4 pb-[1.2vw] border-[#f0eee6]'>
                        <p className='text-[0.66vw] max-lg:text-[10px]'>
                          No fluff. Just brands with bite.
                        </p>
                        <p className='text-[0.9vw] max-lg:text-xs'>
                          No fluff. Just brands with bite.
                        </p>
                      </div>
                  </div>
              </div>
            </div>
        </section>
        </>
    )
}