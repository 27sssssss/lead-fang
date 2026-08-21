import { useState } from 'react'
import logo from '../assets/logos/logoopenmouth.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-[var(--border)] px-6 py-4 grid grid-cols-3 items-center">
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="justify-self-start flex flex-col gap-1 p-1 group "
      >
        <div id="nav-icon1" className={isOpen ? 'open' : ''}>
          <span></span>
          <span></span>
          <span></span>
        </div>
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
        className="justify-self-end text-sm px-6 py-2  text-white hover:opacity-90 transition-opacity border rounded-2xl"
      >
        Get started
      </button>
    </header>
  )
}