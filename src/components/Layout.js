import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Preloader from './Preloader'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from './LanguageContext'
const Layout = ({children}) => {
  
  const {language} = useLanguage();
  return (
    <div>
      <Preloader/>
        <Navbar/>
        <div className='overflow-x-hidden'>

        {children}
        </div>
        <div className='fixed bottom-10 z-30 left-0 w-[10rem]'>
          <LanguageToggle/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout