import React, { useEffect, useState } from "react";
import bgImage from "../assets/service1/bg.png";
import aboutImg from "../assets/service1/service-1-1.png";
import ticket from "../assets/service1/ticket 1.png";
import Layout from "../components/Layout";
import Stories from "../components/WhyKicket/Stories";
import ourService1phone from "../assets/our-service-phone.png";
import Experience from "../components/Experience";
import Slider from "react-slick";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const features = [
    {
      number: 1,
      title: "Service 1",
      description: "Description for service 1.",
    },
    {
      number: 2,
      title: "Service 2",
      description: "Description for service 2.",
    },
    {
      number: 3,
      title: "Service 3",
      description: "Description for service 3.",
    },
    {
      number: 4,
      title: "Service 4",
      description: "Description for service 4.",
    },
    {
      number: 5,
      title: "Service 5",
      description: "Description for service 5.",
    },
    {
      number: 6,
      title: "Service 6",
      description: "Description for service 6.",
    },
  ];

  return (
    <Layout>
      <div
        className="bg-cover bg-center h-[60vh] flex justify-center items-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-[#FFC019] font-[750] text-[45px]">Service 2</h1>
        <div className="w-full h-[10rem] bg-gradient-to-b from-black/0 to-[#252525]/100 absolute bottom-0"></div>
      </div>

      <div className="flex lgM:flex-col lgM:items-center text-white text-[20px] w-[85%] mx-auto gap-x-14 mt-14">
        <img src={aboutImg} className="smM:hidden w-[30rem]" />
        <img src={ourService1phone} className="z-10 hidden smM:block" />

        <div className="flex flex-col justify-center gap-y-5">
          <h1 className="text-white font-[750] text-[45px] lgM:text-center smM:text-[7vw] smM:whitespace-nowrap smM:mt-5 smM:text-center">
            Service
          </h1>
          <p className="leading-[35px] smM:text-[4vw] smM:leading-[6vw]">
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
        <h1 className="text-white font-[750] text-[45px] text-center mb-10 smM:text-[7vw] smM:whitespace-nowrap smM:mt-5 smM:text-center">
          Key Features
        </h1>
        <Slider {...settings} className="w-[85%] mx-auto">
          {features.map((feature) => (
            <>
              {feature.number % 2 === 1 ? (
                <div
                  key={feature.number}
                  className="text-white"
                >
                  <h2 className="text-[25px] text-center">{feature.title}</h2>
                  <p className="text-[18px] text-[#D9D9D9] text-center">
                    {feature.description}
                  </p>
                  <h1 className="relative w-fit leading-[144px] px-14 text-[120px] text-[#4E4F4F] font-[750] mx-auto">
                    {feature.number}
                    <div className="absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>
                  </h1>
                  <hr className="my-5 mt-[3.99rem]"/>
                  <div className="flex justify-center">
                    <div className="bg-[#363637] border border-[#D9D9D9] h-[15rem] w-[18rem] rounded-2xl flex items-center justify-center">
                      <img src={ticket} alt={`ticket ${feature.number}`} />
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={feature.number}
                  className="text-white space-y-8"
                >
                  <div className="flex justify-center">
                    <div className="bg-[#363637] border border-[#D9D9D9] h-[15rem] w-[18rem] rounded-2xl flex items-center justify-center">
                      <img src={ticket} alt={`ticket ${feature.number}`} />
                    </div>
                  </div>
                  <hr/>

                  <h1 className="relative w-fit leading-[144px] px-14 text-[120px] text-[#4E4F4F] font-[750] mx-auto">
                    {feature.number}
                    <div className="absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>
                  </h1>
                  <h2 className="text-[25px] text-center">{feature.title}</h2>
                  <p className="text-[18px] text-[#D9D9D9] text-center">
                    {feature.description}
                  </p>
                </div>
              )}
            </>
          ))}
        </Slider>
      </div>

      <Stories isPhone={isPhone} title={"Case Studies"} />
      <Experience />
    </Layout>
  );
};

export default Service2;
