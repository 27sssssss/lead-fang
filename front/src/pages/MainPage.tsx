import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import TypingText from '../components/TypeWriter'
import TextLoop from '../components/flyer/Flyer'
import CustomerReviews from '../components/blocks/CustomerReviews'
import Footer from '../components/blocks/Footer'
import case1 from '../assets/cases/case1.png'
import case2 from '../assets/cases/case2.png'
import case3 from '../assets/cases/case3.png'
import case4 from '../assets/cases/case4.png'
import case5 from '../assets/cases/case5.png'
import LottieAnimation from '../components/Lottietry'
import LotOfTextBlock from '../components/Blocks/LotOfText'

//clamp(10px, 1vw, 140px)

export default function MainPage(){
    return(
        <main className='w-full flex flex-col'>
          <section className="flex flex-col items-center justify-center gap-6 pt-37 pb-12 px-6 text-center w-full mx-auto">
            <div className="relative flex justify-center px-[10%] w-full">
              <p
                className="text-[14.7vw] font-bold "
                style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 0.9 }}
              >
                YOUR BRAND HAS SOMETHING TO SAY
              </p>

              <p
                className="absolute top-[98%] -translate-y-1/2 left-[23.6%] text-[11vw] stroke-text"
                style={{ fontFamily: '"AZKIA", sans-serif' }}
              >
                We give it teeth
              </p>
            </div>

            <div className='relative mx-auto mt-23 outline-block py-5 px-0 w-[50vw]'>
              <span className="absolute -right-1 -top-1 block h-3 w-3 border bg-[#F0EEE6] border-[#F0EEE6]" />
              <span className="absolute -left-1 -bottom-1 block h-3 w-3 border bg-[#F0EEE6] border-[#F0EEE6]" />
              <div className='py-[0.5vw]'>
                <TypingText text='No fluff just brands with bite' className="text-[1.8vw]" speed={50}>
                </TypingText>
              </div>

          </div>
          </section>

            <section className='pt-20'>
              <LotOfTextBlock></LotOfTextBlock>
            </section>

          <section className='w-full px-[2.5vw] pt-50'>

            <div className='flex flex-col gap-[1.8vw]'>
              <p
                className="text-[11rem] uppercase font-bold"
                style={{ fontFamily: '"DRUKCYR", sans-serif'}}
              >
                our work
              </p>
              <div className='grid grid-cols-2 gap-[1.7vw] pt-30'>
                <div className='flex h-full flex-col justify-between'>
                  <div className='flex flex-col gap-[1vw]'>
                    <img src={case1} className='w-full'></img>
                      <div className='flex flex-col text-left uppercase font-normal'>
                        <p className='text-[0.7vw]'>
                          No fluff. Just brands with bite.
                        </p>
                        <p className='text-[1.05vw]'>
                          No fluff. Just brands with bite.
                        </p>
                      </div>
                  </div>
                  <div className='grid grid-cols-2 gap-[1.6vw]'>
                      <div className='flex flex-col gap-[1vw]'>
                        <img src={case3} className='w-full'></img>
                          <div className='flex flex-col text-left uppercase font-normal'>
                            <p className='text-[0.7vw]'>
                              No fluff. Just brands with bite.
                            </p>
                            <p className='text-[1.05vw]'>
                              No fluff. Just brands with bite.
                            </p>
                          </div>
                      </div>
                  <div>
                  <div className='flex flex-col gap-[1vw]'>
                    <img src={case4} className='w-full'></img>
                      <div className='flex flex-col text-left uppercase font-normal'>
                        <p className='text-[0.7vw]'>
                          No fluff. Just brands with bite.
                        </p>
                        <p className='text-[1.05vw]'>
                          No fluff. Just brands with bite.
                        </p>
                      </div>
                  </div>
                    </div>
                  </div>
                </div>
                  <div className='flex flex-col gap-[1vw]'>
                    <img src={case2} className='w-full'></img>
                      <div className='flex flex-col text-left uppercase font-normal'>
                        <p className='text-[0.7vw]'>
                          No fluff. Just brands with bite.
                        </p>
                        <p className='text-[1.05vw]'>
                          No fluff. Just brands with bite.
                        </p>
                      </div>
                  </div>
              </div>
              <div className=''>
                <div className='flex flex-col gap-[1vw]'>
                    <img src={case5} className='w-full'></img>
                      <div className='flex flex-col text-left uppercase font-normal'>
                        <p className='text-[0.7vw]'>
                          No fluff. Just brands with bite.
                        </p>
                        <p className='text-[1.05vw]'>
                          No fluff. Just brands with bite.
                        </p>
                      </div>
                  </div>
              </div>
            </div>
          </section>

          <section className='pt-40'>

            <CustomerReviews>

            </CustomerReviews>
          </section>
          <Footer></Footer>
        </main>
    )
}
