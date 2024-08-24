import React from "react";
import logo from "../assets/logo.png";
import icons from "../assets/footerIcons.png";
import footerBg from "../assets/footerbg.png";

const Footer = () => {
  return (
    <div className="relative">
      <img src={footerBg} className="absolute bottom-0 right-0" />
      <div className=" flex flex-col items-center justify-between w-[80%] smM:w-[85%] mx-auto">
        <div className=" grid grid-cols-3 smM:grid-cols-4 h-full gap-x-20 w-full text-white">
          <div className="space-y-5 smM:col-span-4">
            <div className="flex justify-center items-center w-fit gap-x-3 text-xl">
              <img
                src={logo}
                className="w-[3.2rem] ml-5 smM:ml-0 smM:w-[2.8rem]"
              />
              <p className="font-[750]">KICKET</p>
            </div>
            <p className="leading-[23px] text-[14px]">
              Lorem ipsum dolor sit amet consectetur. Duis tempus duis mattis
              sollicitudin lorem. Nulla sed gravida orci amet vitae vel feugiat
              diam est. Ac adipiscing nisi eget nam elementum euismod nibh sed.{" "}
            </p>
            <img src={icons} className="w-[70%]" />
          </div>
          <div className="smM:col-span-2">
            <h1 className="text-[18px] mb-2">Account Link</h1>
            <ul className="text-[15px] space-y-1">
              <li>Home</li>
              <li>About Us</li>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="smM:col-span-2">
            <h1 className="text-[18px] mb-2">Get In Touch</h1>
            <ul className="text-[15px] space-y-1">
              <li>Email</li>
              <li>email@email.com</li>
              <li className="pt-2">Phone no.</li>
              <li>+91 1234567899</li>
            </ul>
          </div>
        </div>
        <div className=" text-white text-[14px] py-8 w-full h-[20%] flex items-center justify-center smM:text-center ">
          <p>
            Copyright © Kicket | All Rights Reserved | Designed By Web Prism
            Dynamics
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
