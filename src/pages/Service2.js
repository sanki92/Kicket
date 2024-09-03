import React, { useEffect, useState } from "react";
import bgImage from "../assets/service1/bg.png";
import aboutImg from "../assets/service1/service-1-1.png";
import ticket from "../assets/service1/ticket 1.png";
import Layout from "../components/Layout";
import Stories from "../components/WhyKicket/Stories";
import ourService1phone from "../assets/our-service-phone.png";

import Experience from "../components/Experience";
const Service2 = () => {
  const [isPhone, setIsPhone] = useState(false);

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
    <Layout>
      <div
        className="bg-cover bg-center h-[60vh] flex justify-center items-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-[#FFC019] font-[750] text-[45px]">Service 2</h1>
        <div className="w-full h-[10rem] bg-gradient-to-b from-black/0 to-[#252525]/100 absolute bottom-0"></div>
      </div>
      <div className=" flex lgM:flex-col lgM:items-center text-white text-[20px] w-[85%] mx-auto gap-x-14 mt-14">
        <img src={aboutImg} className="smM:hidden w-[30rem]" />
        <img src={ourService1phone} className="z-10 hidden smM:block" />

        <div className="flex flex-col justify-center gap-y-5">
          <h1 className="text-white font-[750] text-[45px] lgM:text-center smM:text-[7vw] smM:whitespace-nowrap smM:mt-5 smM:text-center">
            Service
          </h1>
          <p className="leading-[35px]  smM:text-[4vw] smM:leading-[6vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="my-[5rem] mb-8">
        <h1 className="text-white font-[750] text-[45px] text-center mb-5 smM:text-[7vw] smM:whitespace-nowrap smM:mt-5 smM:text-center">
          Key Features
        </h1>
        <div className="smM:hidden grid grid-cols-3 smM:flex-row-reverse divide-white w-[85%] items-center mx-auto gap-y-10">
          <div className="space-y-4 text-white">
            <h1 className="text-[25px]">Service</h1>
            <p className="text-[18px] text-[#D9D9D9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h1 className="relative  w-fit leading-[144px] px-14 text-[120px] text-[#4E4F4F] font-[750]">
              1
              <div className="absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-[#363637] border border-[#D9D9D9] h-[15rem] w-[18rem] rounded-2xl flex items-center justify-center">
              <img src={ticket} />
            </div>
          </div>
          <div className="space-y-4 text-white">
            <h1 className="text-[25px]">Service</h1>
            <p className="text-[18px] text-[#D9D9D9] smM:text-[4vw] smM:leading-[6vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h1 className="relative  w-fit leading-[144px] px-14 text-[120px] text-[#4E4F4F] font-[750] ml-auto mr-10 ">
              3
              <div className="absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>
            </h1>
          </div>
        </div>
        <hr className="my-6 w-[85%] mx-auto border-[#848484] border-2" />
        <div className="smM:hidden grid grid-cols-3 smM:grid-cols-1 divide-white w-[85%] items-center mx-auto gap-y-10">
          <div className="flex items-center justify-center">
            <div className="bg-[#363637] border border-[#D9D9D9] h-[15rem] w-[18rem] rounded-2xl flex items-center justify-center">
              <img src={ticket} />
            </div>
          </div>
          <div className="space-y-4 text-white flex flex-col justify-center items-center">
            <h1 className="relative  w-fit leading-[144px] px-14 text-[120px] text-[#4E4F4F] font-[750]">
              2
              <div className="absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>
            </h1>
            <h1 className="text-[25px] w-full">Service</h1>
            <p className="text-[18px] text-[#D9D9D9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-[#363637] border border-[#D9D9D9] h-[15rem] w-[18rem] rounded-2xl flex items-center justify-center">
              <img src={ticket} />
            </div>
          </div>
        </div>

        <div className=" hidden smM:flex w-[90%] mx-auto items-center gap-x-10">
          <div className="flex items-center justify-center">
            <div className="bg-[#363637] border border-[#D9D9D9] h-[8rem] w-[6rem] rounded-2xl flex items-center justify-center">
              <img src={ticket} className="w-14" />
            </div>
          </div>
          <h1 className="relative  w-[6rem] h-fit flex items-center justify-center text-[15vw] text-[#4E4F4F] font-[750]">
            1
            <div className="absolute rounded-md right-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>
          </h1>
          <div className="w-[50%]">
            <h1 className="text-white text-[4vw] text-right">Service</h1>
            <p className="text-[3vw] leading-[5vw] text-right text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className=" hidden smM:flex w-[90%] smM:flex-row-reverse mx-auto items-center gap-x-10">
          <div className="flex items-center justify-center">
            <div className="bg-[#363637] border border-[#D9D9D9] h-[8rem] w-[6rem] rounded-2xl flex items-center justify-center">
              <img src={ticket} className="w-14" />
            </div>
          </div>
          <h1 className="relative  w-[6rem] h-fit flex items-center justify-center text-[15vw] text-[#4E4F4F] font-[750]">
            2
            <div className="absolute rounded-md right-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>
          </h1>
          <div className="w-[50%]">
            <h1 className="text-white text-[4vw] text-left">Service</h1>
            <p className="text-[3vw] leading-[5vw] text-left text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className=" hidden smM:flex w-[90%] mx-auto items-center gap-x-10">
          <div className="flex items-center justify-center">
            <div className="bg-[#363637] border border-[#D9D9D9] h-[8rem] w-[6rem] rounded-2xl flex items-center justify-center">
              <img src={ticket} className="w-14" />
            </div>
          </div>
          <h1 className="relative  w-[6rem] h-fit flex items-center justify-center text-[15vw] text-[#4E4F4F] font-[750]">
            3
            <div className="absolute rounded-md right-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>
          </h1>
          <div className="w-[50%]">
            <h1 className="text-white text-[4vw] text-right">Service</h1>
            <p className="text-[3vw] leading-[5vw] text-right text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <Stories isPhone={isPhone} title={"Case Studies"} />
      <Experience />
    </Layout>
  );
};

export default Service2;
