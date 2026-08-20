import logo from '../assets/logos/logoopenmouth.svg'

export default function Header() {
  return (
    <header className="border-b border-[var(--border)] px-6 py-4 grid grid-cols-3 items-center">
      <button
        type="button"
        aria-label="Open menu"
        className="justify-self-start flex flex-col gap-1.5 p-1 group"
      >
        <span className="block w-6 h-0.5 bg-[var(--text-h)] transition-transform group-hover:scale-x-110" />
        <span className="block w-4 h-0.5 bg-[var(--text-h)] transition-all group-hover:w-6" />
        <span className="block w-6 h-0.5 bg-[var(--text-h)] transition-transform group-hover:scale-x-110" />
      </button>

      <div className='flex items-center justify-center gap-4'>
        <img
          src={logo}
          alt="Logo"
          className="justify-self-center h-11 w-auto"
        />
        <p className='text-2xl' style={{ fontFamily: '"DRUKCYR", sans-serif'}}>LEAD AND FANG</p>
      </div>
      
      <button
        type="button"
        className="justify-self-end text-sm px-4 py-2 rounded-lg bg-[var(--accent)] text-white hover:opacity-90 transition-opacity"
      >
        Get started
      </button>
    </header>
  )
}