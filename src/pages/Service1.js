import React, { useEffect, useState } from "react";
import bgImage from "../assets/service1/bg.png";
import aboutImg from "../assets/service1/service-1-1.png";
import ticket from "../assets/service1/ticket 1.png";
import Layout from "../components/Layout";
import Stories from "../components/WhyKicket/Stories";
import ourService1phone from "../assets/our-service-phone.png";
import Experience from "../components/Experience";
import Slider from "react-slick";
import axiosConfig from "../axios/axiosConfig";
import { useLanguage } from "../components/LanguageContext";

const Service1 = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [data, setData] = useState({
    image: "",
    en: {
      title: "",
      description: "",
    },
    ar: {
      title: "",
      description: "",
    },
  });
  const [features, setFeatures] = useState([
    {
      image: "",
      number: "",
      en: {
        title: "",
        description: "",
      },
      ar: {
        title: "",
        description: "",
      },
    },
  ]);

  const [caseStudies, setCaseStudies] = useState([
    {
      image: "",
      pdf: "",
      en: {
        title: "",
        description: "",
      },
      ar: {
        title: "",
        description: "",
      },
    },
  ]);

  const { language } = useLanguage();

  const fetchService = async () => {
    try {
      const response = await axiosConfig.get("/api/service/1");
      console.log("service 1", response);
      const tempData = {
        image: response.data.main_image,
        en: {
          title: response.data.title,
          description: response.data.description,
        },
        ar: {
          title: response.data.arabic_title,
          description: response.data.arabic_description,
        },
      };
      setData(tempData);
    } catch (error) {
      console.error("Error fetching home content data:", error);
    }
  };
  const fetchFeatures = async () => {
    try {
      const response = await axiosConfig.get("/api/features/1");
      console.log("service 1 keyfeature", response);
      const data = response.data.map((e, i) => ({
        image: e.image,
        number: i + 1,
        en: {
          title: e.title,
          description: e.description,
        },
        ar: {
          title: e.arabic_title,
          description: e.arabic_description,
        },
      }));
      setFeatures(data);
    } catch (error) {
      console.error("Error fetching home content data:", error);
    }
  };

  const fetchCaseStudies = async () => {
    try {
      const response = await axiosConfig.get("/api/services/1/case-studies");
      console.log("service 1 keyfeature", response.data);
      const data = response.data.map((e) => ({
        image: e.image,
        pdf: e.file,
        en: {
          title: e.title,
          description: e.description,
        },
        ar: {
          title: e.arabic_title,
          description: e.arabic_description,
        },
      }));
      setCaseStudies(data);
      // setFeatures(data);
    } catch (error) {
      console.error("Error fetching home content data:", error);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
    fetchFeatures();
    fetchService();
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
    arrows: false,
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

  // const features = [
  //   {
  //     number: 1,
  //     title: "Service 1",
  //     description: "Description for service 1.",
  //   },
  //   {
  //     number: 2,
  //     title: "Service 2",
  //     description: "Description for service 2.",
  //   },
  //   {
  //     number: 3,
  //     title: "Service 3",
  //     description: "Description for service 3.",
  //   },
  //   {
  //     number: 4,
  //     title: "Service 4",
  //     description: "Description for service 4.",
  //   },
  //   {
  //     number: 5,
  //     title: "Service 5",
  //     description: "Description for service 5.",
  //   },
  //   {
  //     number: 6,
  //     title: "Service 6",
  //     description: "Description for service 6.",
  //   },
  // ];

  return (
    <Layout>
      <div
        className="bg-cover bg-center h-[60vh] flex justify-center items-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1
          dir={language === "ar" ? "rtl" : "ltr"}
          className="text-[#FFC019] font-[750] text-[45px]"
        >
          {data[language].title}
        </h1>
        <div className="w-full h-[10rem] bg-gradient-to-b from-black/0 to-[#252525]/100 absolute bottom-0"></div>
      </div>

      <div className="flex lgM:flex-col lgM:items-center text-white text-[20px] w-[85%] mx-auto gap-x-14 mt-14">
        <img
          src={`https://kicketapi.webprismits.us/assets/services/${data.image}`}
          className="smM:hidden w-[30rem]"
        />
        <img src={ourService1phone} className="z-10 hidden smM:block" />

        <div className="flex flex-col justify-center gap-y-5">
          <h1
            dir={language === "ar" ? "rtl" : "ltr"}
            className="text-white font-[750] text-[45px] lgM:text-center smM:text-[7vw] smM:whitespace-nowrap smM:mt-5 smM:text-center"
          >
            {language === "ar" ? "الخدمة" : "Service"}
          </h1>
          <p
            dir={language === "ar" ? "rtl" : "ltr"}
            className="leading-[35px] smM:text-[4vw] smM:leading-[6vw]"
          >
            {data[language].description}
          </p>
        </div>
      </div>

      <div className="my-[5rem] mb-8">
        <h1
          dir={language === "ar" ? "rtl" : "ltr"}
          className="text-white font-[750] text-[45px] text-center mb-10 smM:text-[7vw] smM:whitespace-nowrap smM:mt-5 smM:text-center"
        >
          {language === "ar" ? "الميزات الرئيسية" : "Key Features"}
        </h1>
        <Slider {...settings} className="w-[85%] mx-auto lg:pl-5">
          {features?.map((feature) => (
            <>
              {feature.number % 2 === 1 ? (
                <div key={feature.number} className="text-white">
                  <h2
                    dir={language === "ar" ? "rtl" : "ltr"}
                    className="text-[25px] mb-2 w-[18rem] mgM:text-[2.9vw]"
                  >
                    {feature[language].title}
                  </h2>
                  <p
                    dir={language === "ar" ? "rtl" : "ltr"}
                    className="text-[18px] text-[#D9D9D9] w-[18rem] mgM:text-[2.6vw]"
                  >
                    {feature[language].description}
                  </p>
                  <h1 className="relative w-fit leading-[144px] px-14 text-[120px] text-[#4E4F4F] font-[750] mx-auto">
                    {feature.number}
                    <div className="absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>
                  </h1>
                  {/* <hr className="my-5 mt-[3.99rem]" /> */}
                  <div className="flex mt-12">
                    <div className="bg-[#363637] border border-[#D9D9D9] h-[15rem] w-[18rem] rounded-2xl flex items-center justify-center">
                      <img
                        src={`https://kicketapi.webprismits.us/assets/features/${feature.image}`}
                        alt={`ticket ${feature.number}`}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div key={feature.number} className="text-white space-y-8">
                  <div className="flex ">
                    <div className="bg-[#363637] border border-[#D9D9D9] h-[15rem] w-[18rem] rounded-2xl flex items-center justify-center mb-12">
                      <img
                        src={`https://kicketapi.webprismits.us/assets/features/${feature.image}`}
                        alt={`ticket ${feature.number}`}
                      />
                    </div>
                  </div>

                  <h1 className="relative w-fit leading-[144px] px-14 text-[120px] text-[#4E4F4F] font-[750] mx-auto mb-2">
                    {feature.number}
                    <div className="absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>
                  </h1>
                  <h2
                    dir={language === "ar" ? "rtl" : "ltr"}
                    className="text-[25px] w-[18rem] mgM:text-[2.9vw]"
                  >
                    {feature[language].title}
                  </h2>
                  <p
                    dir={language === "ar" ? "rtl" : "ltr"}
                    className="text-[18px] text-[#D9D9D9] w-[18rem] mgM:text-[2.6vw] "
                  >
                    {feature[language].description}
                  </p>
                </div>
              )}
            </>
          ))}
        </Slider>
      </div>

      <Stories
        isPhone={isPhone}
        title={"Case Studies"}
        dir={"case-studies"}
        data={caseStudies}
      />
    
    </Layout>
  );
};

export default Service1;
