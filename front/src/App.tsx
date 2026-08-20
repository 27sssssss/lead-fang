import './App.css'
import Header from './components/Header'
import TypingText from './components/TypeWriter'
function App() {
  return (
    <>
      <Header/>

      <main className=''>
        <section className="flex flex-col items-center justify-center gap-6 py-20 px-6 text-center">  
          <div className="relative flex justify-center">
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

          <div className='relative mx-auto m-23 outline-block py-5 px-0 w-[590px]'>
            <span className="absolute -right-1 -top-1 block h-[12px] w-[12px] border bg-[#F0EEE6] border-[#F0EEE6]" />
            <span className="absolute -left-1 -bottom-1 block h-[12px] w-[12px] border bg-[#F0EEE6] border-[#F0EEE6]" />
            <TypingText text='No fluff just brands with bite' className="text-xl max-w-xl" speed={50}>
              No fluff. Just brands with bite
            </TypingText>

        </div>
          <div className="flex gap-3">
            <button type="button" className="px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity">
              Get started
            </button>
            <button type="button" className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-h)] hover:bg-[var(--accent-bg)] transition-colors">
              Learn more
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
