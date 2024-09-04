import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { useLanguage } from "./LanguageContext";

const Preloader = () => {
  const { loading, setLoading } = useLanguage();
  const [close, setClose] = useState(true);

  useEffect(() => {
    // Disable scrolling when preloader is visible
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setClose(false);
      // Re-enable scrolling when preloader disappears
      document.body.style.overflow = "auto";
    }, 3000);

    // Cleanup the timer and reset overflow if the component unmounts
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {close && (
        <div className="bg-[#252525] bg-opacity-80 w-full h-screen top-0 left-0 fixed flex justify-center items-center z-50">
          <img
            className="h-[4rem] w-[4rem] animate-slow-spin" //speed  -> slow
            src={logo}
            alt="Loading..."
          />
        </div>
      )}
    </>
  );
};

export default Preloader;
