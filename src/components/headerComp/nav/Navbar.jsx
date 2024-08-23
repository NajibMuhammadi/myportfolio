import { useState } from 'react'
import './navbar.css';

const menuItems = [
  { href:'#home', label: "home"},
  { href:'#about', label: "about"},
  { href:'#project', label: "project"},
  { href:'#contact', label: "contact"}
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className='nav'>
      <button className={`header__nav-toggle ${isOpen ? 'header__nav-toggle--open' : ''}`} onClick={toggleMenu}>
        <div className="header__nav-bar"></div>
        <div className="header__nav-bar"></div>
        <div className="header__nav-bar"></div>
      </button>
      <ul className={`header__nav-list ${isOpen ? 'header__nav-list--open' : ''}`}>
        {menuItems.map((item, index) => (
          <li className="header__nav-item" key={index}>
            <a className="header__nav-link" href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
