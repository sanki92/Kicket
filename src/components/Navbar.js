import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menuIcon.png";
import { RxCross2 } from "react-icons/rx";
import RequestDemo from "./RequestDemo";
import { useLanguage } from "../components/LanguageContext";

const Navbar = () => {
  const { language } = useLanguage(); // Get the current language from context
  const [open, setOpen] = useState(false);
  const [requestDemo, setRequestDemo] = useState(false);

  // Hardcoded translations for navbar links and Request a Demo button
  const translations = {
    en: {
      home: "Home",
      whyKicket: "Why Kicket",
      service1: "Accreditation",
      service2: "Registration",
      contact: "Contact",
      requestDemo: "Request A Demo",
    },
    ar: {
      home: "الرئيسية",
      whyKicket: "لماذا كيكيت",
      service1: "الاعتماد",
      service2: "تسجيل",
      contact: "تواصل",
      requestDemo: "طلب عرض توضيحي",
    },
  };

  const navLinks = [
    { path: "/", label: translations[language].home },
    { path: "/why-kicket", label: translations[language].whyKicket },
    { path: "/accreditation", label: translations[language].service1 },
    { path: "/registration", label: translations[language].service2 },
    { path: "/contact", label: translations[language].contact },
  ];

  return (
    <div className="w-full flex justify-center fixed z-50">
      <div className="py-3 px-3 my-12 bg-gray-800 bg-opacity-45 backdrop-blur-md text-white border rounded-[100px] text-xl w-[85%] lgM:w-[95%] mgM:hidden mx-auto">
        <ul className="flex justify-between xlM:text-[1.8vw]">
          <li className="flex justify-center items-center w-fit gap-x-3 text-xl">
            <img src={logo} className="w-[3.2rem] ml-5" />
            <p className="font-[750]">KICKET</p>
          </li>
          <li className="flex items-center justify-between w-[70%] lgM:w-[75%]">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-[#FFC019]" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <li>
              <button
                onClick={() => setRequestDemo(true)}
                className="w-[194px] h-[52px] lgM:w-[160px] lgM:h-[48px] rounded-[26px] bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white"
              >
                {translations[language].requestDemo}
              </button>
            </li>
          </li>
        </ul>
      </div>

      <div className="hidden mgM:block w-screen bg-gray-800 bg-opacity-45 backdrop-blur-md">
        <div className="my-3 flex justify-between px-7">
          <img src={logo} className="w-[2.3rem] object-contain" />
          <div
            onClick={() => setOpen(true)}
            className="bg-white rounded-full min-h-[2rem] min-w-[3rem] bg-opacity-10 flex items-center justify-center p-2"
          >
            <img src={menuIcon} className="w-[2rem] min-h-[2rem]" />
          </div>
        </div>

        {open && (
          <div className="p-5 h-screen w-[22rem] fixed top-0 right-0 bg-gray-800 bg-opacity-75 backdrop-blur-md text-white rounded-s-3xl flex justify-end">
            <div className="bg-white absolute right-7 top-3 rounded-full h-[3rem] w-[3rem] bg-opacity-20 cursor-pointer flex items-center justify-center p-2">
              <RxCross2 onClick={() => setOpen(false)} className="text-2xl" />
            </div>

            <ul>
              <li className="mt-[5rem] flex flex-col items-end gap-y-5">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.path}
                    className={({ isActive }) =>
                      `transition-colors ${isActive ? "text-[#FFC019]" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <button
                  onClick={() => setRequestDemo(true)}
                  className="w-[194px] h-[52px] lgM:w-[160px] lgM:h-[48px] rounded-[26px] bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white"
                >
                  {translations[language].requestDemo}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {requestDemo && <RequestDemo setRequestDemo={setRequestDemo} />}
    </div>
  );
};

export default Navbar;
