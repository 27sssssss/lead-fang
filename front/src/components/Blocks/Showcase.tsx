import case1 from '../../assets/cases/case1.png'
import case2 from '../../assets/cases/case2.png'
import case3 from '../../assets/cases/case3.png'
import case4 from '../../assets/cases/case4.png'
import case5 from '../../assets/cases/case5.png'

export default function Showcase(){
    return(
        <>
        <section className="">
                <p className="text-[4vw] text-[#FFBF00] stroke-text2 relative top-[1.5vw] left-[3%] text-left" style={{ fontFamily: '"Azkia", sans-serif', lineHeight: 1}}>
                    Showcase
                </p>
                <div className="bg-[#F0EEE6] w-full rounded-br-[6vw] py-[2.5vw]">
                    <p className="text-[10vw] pl-[2.5vw] text-left text-[#181716] uppercase" style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 0.91}}>
                        OUR GOAL IS TO CREATE WORK THAT BITES DEEP INTO THE MEMORY.
                    </p> 
                </div>
            <div className='flex flex-col'>
              <div className='grid grid-cols-2'>
                <div className='flex flex-col justify-between'>
                  <div className='flex flex-col'>
                    <img src={case1} className='w-full rounded-br-[6vw]'></img>
                      <div className='border-[0.3vw] pt-[1vw] px-[2.5vw] pb-[1.4vw] border-[#f0eee6] flex flex-col text-left uppercase rounded-tr-[6vw] font-normal'>
                        <p className='text-[0.66vw]'>
                          Case1case1case1case1casdd1
                        </p>
                        <p className='text-[0.9vw]'>
                          No fluff. Just brands with bite.
                        </p>
                      </div>
                  </div>
                  <div className='grid grid-cols-2'>
                      <div className='flex flex-col'>
                        <img src={case3} className='w-full'></img>
                          <div className='flex flex-col text-left uppercase bg-[#f0eee6] text-[#181716] font-normal border-[0.3vw] pt-[1vw] px-[2.5vw] pb-[1.2vw] border-[#f0eee6]'>
                            <p className='text-[0.66vw]'>
                              No fluff. Just brands with bite.
                            </p>
                            <p className='text-[0.9vw]'>
                              No fluff. Just brands with bite.
                            </p>
                          </div>
                      </div>
                  <div>
                  <div className='flex flex-col'>
                    <img src={case4} className='w-full'></img>
                    <div className='flex flex-col text-left uppercase text-[#f0eee6] font-normal border-[0.3vw] pt-[1vw] px-[2.5vw] pb-[1.2vw] border-[#f0eee6]'>
                        <p className='text-[0.66vw]'>
                          No fluff. Just brands with bite.
                        </p>
                        <p className='text-[0.9vw]'>
                          No fluff. Just brands with bite.
                        </p>
                      </div>
                  </div>
                    </div>
                  </div>
                </div>
                  <div className='flex flex-col'>
                    <img src={case2} className='h-full rounded-tr-[6vw]'></img>
                    <div className='flex flex-col text-left uppercase text-[#181716] font-normal border-l-0 bg-[#f0eee6]  border-[0.3vw] pt-[1vw] px-[2.5vw] pb-[1.2vw] border-[#f0eee6]'>
                        <p className='text-[0.66vw]'>
                          No fluff. Just brands with bite.
                        </p>
                        <p className='text-[0.9vw]'>
                          No fluff. Just brands with bite.
                        </p>
                      </div>
                  </div>
              </div>
              <div className=''>
                <div className='flex flex-col '>
                    <img src={case5} className='w-full'></img>
                    <div className='flex flex-col text-left uppercase bg-[#f0eee6] text-[#181716] font-normal border-[0.3vw] pt-[1vw] px-[2.5vw] pb-[1.2vw] border-[#f0eee6]'>
                        <p className='text-[0.66vw]'>
                          No fluff. Just brands with bite.
                        </p>
                        <p className='text-[0.9vw]'>
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