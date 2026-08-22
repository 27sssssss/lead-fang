import { useState } from "react";

type BurgerMenuProps = {
    isOpen: boolean;
}

export default function BurgerMenu({isOpen}: BurgerMenuProps) {
    return(
      <div
        className="relative justify-self-start p-2"
        >

        <button
          type="button"
          aria-label="Open menu"
          className="flex items-center justify-center p-2 "
        >
          <div id="nav-icon1" className={isOpen ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className={`
              absolute left-0 top-full
              min-w-55 transition-all duration-200
              ${isOpen ? 'opacity-100 visible translate-y-0' : 'pointer-events-none invisible opacity-0 -translate-y-2'}
            `}>
          <div
            className={`
              min-w-55 rounded-2xl border border-white/10 bg-[#1b1a1a] p-3
              shadow-2xl
            `}
          >
            <nav className="flex flex-col gap-2 text-sm text-white">
              <a href="#" className="rounded-xl px-3 py-2 hover:bg-white/5">Home</a>
              <a href="#" className="rounded-xl px-3 py-2 hover:bg-white/5">About</a>
              <a href="#" className="rounded-xl px-3 py-2 hover:bg-white/5">Services</a>
              <a href="#" className="rounded-xl px-3 py-2 hover:bg-white/5">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    )
}

