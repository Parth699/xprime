import React from 'react'
import logo from '../asset/4.png'
import './Header.css';

const Header = () => {
  return (
    <nav className='app__header'>
      <img src={logo} alt='xprime_logo'/>
    </nav>
  )
}

export default Header