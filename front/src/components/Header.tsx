import { useState } from 'react'
import logo from '../assets/logos/logoopenmouth.svg'
import BurgerMenu from './butttons/BurgerMenu'

import StaggeredMenu from './blocks/Menu'

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];


const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="px-6 py-4 grid grid-cols-3 items-center w-full">
      <div className='max-w-10'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        <BurgerMenu isOpen={isOpen}>

        </BurgerMenu>
      </div>

      <div className='flex items-center justify-center'>
        <img
          src={logo}
          alt="Logo"
          className="justify-self-center h-16 w-auto"
        />

      </div>
      

      <button
        className=" justify-self-end rounded-[6px] px-6 py-2 text-sm text-[#F0EEE6] 
          relative isolate overflow-hidden
          px-5 py-2.5
          font-medium uppercase
          bg-[#FFBF00]
          border-[#FFBF00]
          transition-colors duration-400
          before:absolute before:inset-0 before:-z-10
          before:origin-left before:scale-x-0
          before:bg-[#F0EEE6]

          before:transition-transform before:duration-300
          before:content-['']
          hover:text-[#FFBF00]
          hover:before:scale-x-100
        "
      >
          Contact us
      </button>      
      </header>
        )
}