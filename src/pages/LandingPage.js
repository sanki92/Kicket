import React, { useEffect, useState } from "react";
import heroImage from "../assets/heroSection.png";
import maskImage from "../assets/maskGroup.png";
import blur from "../assets/blur.png";
import ourService1 from "../assets/our-service.png";
import ourService1phone from "../assets/our-service-phone.png";

import bgVector from "../assets/bg-vector-1.png";
import serviceBg from "../assets/service-bg.png";
import ourService2 from "../assets/our-service2.png";
import ourService2phone from "../assets/Responsive/service2.png";

import serviceVector1 from "../assets/1.png";
import serviceVector2 from "../assets/2.png";
import OurClients from "../components/OurClients";

import Layout from "../components/Layout";
import SliderComponent from "../components/SliderComponent";
import ClientTestimonial from "../components/ClientTestimonial";
import Experience from "../components/Experience";
import axiosConfig from "../axios/axiosConfig";

const LandingPage = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [serviceSnippet, setServiceSnippet] = useState([]);
  const [clients, setClients] = useState([]);


  const fetchTestimonials = async () => {
    try {
      const response = await axiosConfig.get("/api/testimonial");
      console.log("Testimonials data:", response.data);
      setTestimonials(response.data);
    } catch (error) {
      console.error("Error fetching testimonials data:", error);
    }
  };

  const fetchHomeContent = async () => {
    try {
      const response = await axiosConfig.get("/api/service-snippets");
      console.log("Home content data:", response.data); // Debugging line
      setServiceSnippet(response.data);
    } catch (error) {
      console.error("Error fetching home content data:", error);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await axiosConfig.get("/api/client");
      console.log("Home content data:", response.data); // Debugging line
      setClients(response.data);
    } catch (error) {
      console.error("Error fetching home content data:", error);
    }
  };




  useEffect(() => {
    fetchTestimonials();
    fetchHomeContent();
    fetchClients();
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
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-screen smM:h-[50vh] flex justify-center items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <img src={maskImage} className="w-[85%]" />
      </div>

      {/* Why kicket */}
      <div className="relative flex justify-center">
        <img
          src={blur}
          className="absolute w-full left-0 -top-[15rem] smM:-top-[6rem]"
        />
        <div className="relative flex justify-center">
          <h1 className="text-[45px] font-[750] leading-[54px] text-white absolute smM:text-[7vw] smM:whitespace-nowrap">
            Why{" "}
            <span className="bg-gradient-to-r from-[#FFC019] via-[#ED4C75] via-[#973EFF]  via-[#973EFF] to-[#00D6CC] text-transparent bg-clip-text">
              KICKET
            </span>
          </h1>
          <img src={bgVector} className="absolute left-0 w-[30%]" />
          <div className="h-fit pt-[8rem] smM:pt-[5rem] flex flex-col justify-center items-center gap-y-12">
            <p className="text-white text-xl text-center w-[64%] mgM:w-[95%] mgM:text-start mx-auto leading-[35px] smM:text-[4vw] smM:leading-[6vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className=" smM:py-2 smM:px-[2rem] smM:text-[3.5vw] smM:leading-[6vw] py-4 px-[3rem] rounded-[50px] text-xl bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white">
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* Our services */}
      <div
        style={{ backgroundImage: `url(${serviceBg})` }}
        className="w-[85%] text-white mx-auto block relative z-20 mt-[8rem] smM:mt-[4rem] bg-[center] bg-no-repeat mgM:w-[95%]"
      >
        <h1 className=" text-[45px] font-[750] mb-12 smM:text-center smM:mb-6 smM:text-[7vw] smM:whitespace-nowrap">
          Our Services
        </h1>
        <div className="flex mgM:flex-col justify-between items-center">
          <img src={ourService1} className="z-10 smM:hidden" />
          <img src={ourService1phone} className="z-10 hidden smM:block" />

          <div className="h-fit w-[50%] smM:w-[95%] flex flex-col items-end justify-center smM:justify-normal gap-y-8 relative">
            <div class="line-with-circle absolute -left-[13rem] z-0">
              <div class="line"></div>
              <div class="circle"></div>
            </div>
            <img
              src={serviceVector1}
              className="absolute -left-10 -top-20 w-[50%] z-10 smM:w-[40%] smM:top-0"
            />
            <h1 className="text-[35px] font-normal smM:text-[6vw] smM:whitespace-nowrap smM:mt-[5rem]">
              Our Ticket Booking
            </h1>
            <p className="w-[96%] text-right text-xl leading-[35px] smM:text-[4vw] smM:leading-[6vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum{" "}
            </p>
            <button className="  smM:py-2 smM:px-[2rem] smM:text-[3.5vw] smM:leading-[6vw] py-4 px-[3rem] rounded-[50px] text-xl bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white">
              Know More
            </button>
          </div>
        </div>
        <div className="flex mgM:flex-col mgM:mt-10 flex-row-reverse justify-between items-center">
          <img src={ourService2} className="z-10 smM:hidden" />
          <img src={ourService2phone} className="z-10 hidden smM:block" />

          <div className="h-fit w-[50%] smM:w-[95%] flex flex-col items-start justify-center gap-y-8 relative">
            <div class="line-with-circle absolute -right-[16rem] smM:left-0 smM:right-auto smM:rotate-90 smM:top-0 rotate-180 z-10">
              <div class="line"></div>
              <div class="circle"></div>
            </div>
            <img
              src={serviceVector2}
              className="absolute smM:right-0 smM:w-[40%] smM:top-0 -right-10 -top-20 w-[50%] z-0"
            />
            <h1 className="text-[35px] font-normal  smM:text-[6vw] smM:whitespace-nowrap smM:mt-[5rem]">
              Our Ticket Booking
            </h1>
            <p className="w-[96%] text-left text-xl leading-[35px]  smM:text-[4vw] smM:leading-[6vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum{" "}
            </p>
            <button className=" smM:py-2 smM:px-[2rem] smM:text-[3.5vw] smM:leading-[6vw] py-4 px-[3rem] rounded-[50px] text-xl bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white">
              Know More
            </button>
          </div>
        </div>
      </div>

      <SliderComponent serviceSnippet={serviceSnippet}/>
      <ClientTestimonial testimonials={testimonials} isPhone={isPhone} />
      <OurClients clients={clients} isPhone={isPhone} />
      <Experience />
    </Layout>
  );
};

export default LandingPage;
