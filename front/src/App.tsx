import './App.css'

function App() {
  return (
    <>
      <header className="border-b border-[var(--border)] px-6 py-4 grid grid-cols-3 items-center">
        <button type="button" aria-label="Open menu" className="justify-self-start flex flex-col gap-1.5 p-1 group">
          <span className="block w-6 h-0.5 bg-[var(--text-h)] transition-transform group-hover:scale-x-110"></span>
          <span className="block w-4 h-0.5 bg-[var(--text-h)] transition-all group-hover:w-6"></span>
          <span className="block w-6 h-0.5 bg-[var(--text-h)] transition-transform group-hover:scale-x-110"></span>
        </button>
        <span className="justify-self-center font-semibold text-[var(--text-h)] text-lg">Logo</span>
        <button type="button" className="justify-self-end text-sm px-4 py-2 rounded-lg bg-[var(--accent)] text-white hover:opacity-90 transition-opacity">
          Get started
        </button>
      </header>

      <main className=''>
        <section className="flex flex-col items-center justify-center gap-6 py-32 px-6 text-center">  
          <div className="relative flex justify-center">
            <p
              className="text-[178px] font-bold "
              style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 0.85 }}
            >
              YOUR BRAND HAS SOMETHING TO SAY
            </p>

            <p
              className="absolute inset-x-0 top-[104%] -translate-y-1/2 text-9xl stroke-text"
              style={{ fontFamily: '"AZKIA", sans-serif' }}
            >
              We give it teeth
            </p>
          </div>
        <div className='p-20 border-dashed border'>
          <p className="text-lg max-w-xl">
            No fluff. Just brands with bite
          </p>
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
