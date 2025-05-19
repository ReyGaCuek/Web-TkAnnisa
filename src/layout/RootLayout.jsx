import React from 'react'
import Navbar from '../components/Navbar'
import { MobileMenu } from '../components/MobileMenu'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { useState } from 'react'

const RootLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout