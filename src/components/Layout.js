import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "./Preloader";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageContext";
import Experience from "./Experience";
const Layout = ({ children }) => {
  const [isPhone, setIsPhone] = useState(false);
  const [requestDemo, setRequestDemo] = useState(false);

  const { language } = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Preloader />
      <Navbar requestDemo={requestDemo} setRequestDemo={setRequestDemo}/>
      <div className="overflow-x-hidden">{children}</div>
      <div className="fixed bottom-10 z-50 left-0 w-[10rem]">
        <LanguageToggle />
      </div>
      <Experience isPhone={isPhone} setRequestDemo={setRequestDemo} />

      <Footer />
    </div>
  );
};

export default Layout;
