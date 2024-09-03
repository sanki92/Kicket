import React, { useEffect, useState } from "react";
import heroImage from "../assets/whyKicket/heroBg.png";
import aboutImg from "../assets/whyKicket/aboutImg.png";
import Stories from "../components/WhyKicket/Stories";
import WhyChoose from "../components/WhyKicket/WhyChoose";
import Experience from "../components/Experience";
import Layout from "../components/Layout"
import Footer from "../components/Footer";
import ourService1phone from "../assets/our-service-phone.png";
import axiosConfig from "../axios/axiosConfig";

const WhyKicket = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [stories, setStories] = useState([]);


  const fetchStories = async () => {
    try {
      const response = await axiosConfig.get("/api/success-stories");
      console.log("stories data:", response.data); // Debugging line
      setStories(response.data);
    } catch (error) {
      console.error("Error fetching home content data:", error);
    }
  };

  useEffect(() => {
    fetchStories();
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
      <div className="">
        <div
          className="bg-cover bg-center h-screen flex smM:h-[50vh] justify-center items-center smM:relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <h1 className="text-[#FFC019] font-[750] text-[45px]">Why Kicket</h1>
          <div className="w-full h-[10rem] smM:h-[5rem] bg-gradient-to-b from-black/0 to-[#252525]/100 absolute bottom-0"></div>
        </div>

        <div className=" flex lgM:flex-col lgM:items-center text-white  text-[20px] w-[85%] smM:w-[90%] mx-auto gap-x-14 mt-14">
          <img src={aboutImg} className="smM:hidden w-[30rem]" />
          <img src={ourService1phone} className="hidden smM:block" />


          <div className="flex flex-col justify-center gap-y-5 lgM:items-center">
            <h1 className="text-white font-[750] text-[45px] smM:text-[7vw] smM:whitespace-nowrap smM:text-center smM:mt-3">About Kicket</h1>
            <p className="leading-[35px]  smM:text-[4vw] smM:leading-[6vw] lgM:text-[2vw] lgM:leading-[3vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <Stories data={stories} dir={"stories"} isPhone={isPhone}/>

        <div className=" flex lgM:flex-col lgM:items-center text-white text-[20px] w-[85%] smM:w-[90%] mx-auto gap-x-14 mt-14">
          <img src={aboutImg} className="smM:hidden w-[30rem]" />
          <img src={ourService1phone} className="z-10 hidden smM:block" />

          <div className="flex flex-col justify-center gap-y-10">
            <h1 className="text-white font-[750] lgM:text-center text-[45px] smM:text-[7vw] smM:whitespace-nowrap smM:text-center smM:mt-5">Why Choose Us</h1>

            <WhyChoose />
          </div>
        </div>

        <Experience />
      </div>
    </Layout>
  );
};

export default WhyKicket;
