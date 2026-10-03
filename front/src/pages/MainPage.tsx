import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import TypingText from '../components/TypeWriter'
import TextLoop from '../components/flyer/Flyer'
import CustomerReviews from '../components/blocks/CustomerReviews'
import Footer from '../components/blocks/Footer'
import QasAccordion from '../components/Blocks/Accordeon'
import LotOfTextBlock from '../components/Blocks/LotOfText'
import ServicesBlock from '../components/Blocks/Services'
import TheyMust from '../components/Blocks/TheyMust'
import Showcase from '../components/Blocks/Showcase'

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
              <TheyMust></TheyMust>

            <div className='px-5'>
              <ServicesBlock></ServicesBlock>
            </div>
            
            <Showcase>
            </Showcase>
            
            <QasAccordion></QasAccordion>

          <section className='pt-40'>

            <CustomerReviews>

            </CustomerReviews>
          </section>
          <Footer></Footer>
        </main>
    )
}
