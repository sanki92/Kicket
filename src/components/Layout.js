import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Preloader from './Preloader'
import LanguageToggle from './LanguageToggle'
const Layout = ({children}) => {
  
  return (
    <div>
      <Preloader/>
        <Navbar/>
        {children}
        {/* <div className='fixed bottom-10 z-30 left-0 w-[10rem]'>
          <LanguageToggle/>
        </div> */}
        <Footer/>
    </div>
  )
}

export default Layout