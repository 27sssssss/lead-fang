import { useState } from 'react'
import logo from '../assets/logos/logoopenmouth.svg'
import BurgerMenu from './butttons/BurgerMenu'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-[var(--border)] px-6 py-4 grid grid-cols-3 items-center w-full">
      <div className='max-w-10'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        <BurgerMenu isOpen={isOpen}>

        </BurgerMenu>
      </div>

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
        className="shake-button justify-self-end rounded-2xl border border-white/15 px-6 py-2 text-sm text-white"
      >
        Get started
      </button>
    </header>
  )
}