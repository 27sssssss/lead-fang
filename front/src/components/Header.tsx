// Header.tsx
import StaggeredMenu from './blocks/Menu'
import logo from '../assets/logos/logoopenmouth.svg'

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
  { label: 'Our merch', ariaLabel: 'Get in touch', link: '/contact123123' },

]

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
]

export default function Header() {
  return (
    <StaggeredMenu
      position="left"
      items={menuItems}
      socialItems={socialItems}
      logoUrl={logo}
      isFixed
      colors={['#FFBF00', '#28BEA5']}
      accentColor="#797877"
      menuButtonColor="#F0EEE6"
      openMenuButtonColor="#797877"
    />
  )
}