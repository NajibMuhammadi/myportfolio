import './header.css'

import Logo from '../logo/Logo'
import Navbar from '../nav/Navbar'
import SocialMedia from '../socialMedia/SocialMedia'

function Header() {
  return (
    <header className='header'>
      <Logo text="NM20" link="#" />
      <Navbar />
      <SocialMedia />
    </header>
  )
}

export default Header
