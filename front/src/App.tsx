import './App.css'
import Header from './components/Header'
import TypingText from './components/TypeWriter'
import ClickSpark from './components/ClickSpark/ClickSparks'
import TextLoop from './components/Flyer/Flyer'
import CustomerReviews from './components/Blocks/CustomerReviews'

function App() {
  return (
    <>
    <ClickSpark>
      <Header/>

      <main className='w-full flex flex-col'>
        <section className="flex flex-col items-center justify-center gap-6 pt-20 pb-12 px-6 text-center max-w-300 w-full mx-auto">  
          <div className="relative flex justify-center max-w-228.75 w-full">
            <p
              className="text-[178px] font-bold " //needs to set font size to be relative
              style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 0.9 }}
            >
              YOUR BRAND HAS SOMETHING TO SAY
            </p>

            <p
              className="absolute top-[104%] -translate-y-1/2 left-[17%] text-9xl stroke-text"
              style={{ fontFamily: '"AZKIA", sans-serif' }}
            >
              We give it teeth
            </p>
          </div>

          <div className='relative mx-auto mt-23 outline-block py-5 px-0 w-147.5'>
            <span className="absolute -right-1 -top-1 block h-3 w-3 border bg-[#F0EEE6] border-[#F0EEE6]" />
            <span className="absolute -left-1 -bottom-1 block h-3 w-3 border bg-[#F0EEE6] border-[#F0EEE6]" />
            <TypingText text='No fluff just brands with bite' className="text-xl max-w-xl" speed={50}>
            </TypingText>

        </div>
        </section>
        <div className=''>
          <TextLoop
            text="PROJECTS"
            shape="wave"
            speed={90}
            direction="forward"
            separator="·"
            curviness={0}
            fontSize={52}
            fontWeight={700}
            letterSpacing={0}
            uppercase
            color="#ffffff"
            ribbon
            ribbonColor="#FF006E"
            ribbonWidth={92}
            pauseOnHover={false}
          />
        </div>
        <div>
          <CustomerReviews>
            
          </CustomerReviews>
        </div>
      </main>
      </ClickSpark>
    </>
  )
}

export default App
