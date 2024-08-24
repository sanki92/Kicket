import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menuIcon.png";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex justify-center fixed z-50">
      <div className="py-3 px-3 my-12 bg-gray-800 bg-opacity-45 backdrop-blur-md text-white border rounded-[100px] text-xl w-[85%] lgM:w-[95%] mgM:hidden mx-auto">
        <ul className="flex justify-between">
          <li className="flex justify-center items-center w-fit gap-x-3 text-xl">
            <img src={logo} className="w-[3.2rem] ml-5" />
            <p className="font-[750]">KICKET</p>
          </li>
          <li className="flex items-center justify-between w-[70%]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-[#FFC019]" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/why-kicket"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-[#FFC019]" : ""}`
              }
            >
              Why Kicket
            </NavLink>
            <NavLink
              to="/service-1"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-[#FFC019]" : ""}`
              }
            >
              Service 1
            </NavLink>
            <NavLink
              to="/service-2"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-[#FFC019]" : ""}`
              }
            >
              Service 2
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-[#FFC019]" : ""}`
              }
            >
              Contact
            </NavLink>
            <li>
              <button className="w-[194px] h-[52px] rounded-[26px] bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white">
                Request A Demo
              </button>
            </li>
          </li>
        </ul>
      </div>
      <div className="hidden mgM:block w-screen">
        <div className="my-10 flex justify-between px-7">
          <img src={logo} className="w-[2.3rem] object-contain " />
          <div
            onClick={() => setOpen(true)}
            className="bg-white rounded-full min-h-[2rem] min-w-[3rem] bg-opacity-10 flex items-center justify-center p-2"
          >
            <img src={menuIcon} className="w-[2rem] min-h-[2rem]" />
          </div>
        </div>

        {open && (
          <div className="p-5 h-screen w-[22rem] fixed top-0 right-0 bg-gray-800 bg-opacity-45 backdrop-blur-md text-white rounded-s-3xl flex justify-end">
            <div className="bg-white absolute right-3 top-3 rounded-full h-[3rem] w-[3rem] bg-opacity-10 flex items-center justify-center p-2">
              <RxCross2 onClick={() => setOpen(false)} className="text-2xl" />
            </div>

            <ul className="">
              <li className="mt-[5rem] flex flex-col items-end gap-y-5">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `transition-colors ${isActive ? "text-[#FFC019]" : ""}`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/why-kicket"
                  className={({ isActive }) =>
                    `transition-colors ${isActive ? "text-[#FFC019]" : ""}`
                  }
                >
                  Why Kicket
                </NavLink>
                <NavLink
                  to="/service-1"
                  className={({ isActive }) =>
                    `transition-colors ${isActive ? "text-[#FFC019]" : ""}`
                  }
                >
                  Service 1
                </NavLink>
                <NavLink
                  to="/service-2"
                  className={({ isActive }) =>
                    `transition-colors ${isActive ? "text-[#FFC019]" : ""}`
                  }
                >
                  Service 2
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `transition-colors ${isActive ? "text-[#FFC019]" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
