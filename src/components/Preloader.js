import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Preloader = () => {
  const [close, setClose] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClose(false);
    }, 2000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {close && (
        <div className="bg-[252525] bg-opacity-15 w-full h-screen top-0 left-0 flex justify-center items-center">
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
