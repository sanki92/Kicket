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
import { useLanguage } from "../components/LanguageContext";
import { Link } from "react-router-dom";

const LandingPage = () => {
  
  const [isPhone, setIsPhone] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [serviceSnippet, setServiceSnippet] = useState([]);
  const [homeService, setHomeService] = useState([
    {
      image: "",
      en: {
        title: "",
        description: "",
      },
      ar: {
        title: "",
        description: "",
      },
    },
    {
      image: "",

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
  const [homeContent, setHomeContent] = useState({
    en: "",
    ar: "",
  });
  const [clients, setClients] = useState([]);
  const { language, setLoading } = useLanguage();

  const fetchTestimonials = async () => {
    try {
      const response = await axiosConfig.get("/api/testimonial");

      const data = response.data.map((e) => ({
        image: e.image,
        en: {
          name: e.name,
          message: e.message,
        },
        ar: {
          name: e.arabic_name,
          message: e.arabic_message,
        },
      }));

      setTestimonials(data);
      console.log("**", response);
    } catch (error) {
      console.error("Error fetching testimonials data:", error);
    }
  };

  const fetchHomeContent = async () => {
    try {
      const response = await axiosConfig.get("/api/service-snippets");
      const data = response.data.map((e) => ({
        image: e.image,
        en: {
          title: e.title,
          description: e.description,
        },
        ar: {
          title: e.arabic_title,
          description: e.arabic_description,
        },
      }));
      setServiceSnippet(data);
    } catch (error) {
      console.error("Error fetching home content data:", error);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await axiosConfig.get("/api/client");
      setClients(response.data);
    } catch (error) {
      console.error("Error fetching clients data:", error);
    }
  };

  const fetchHomeDetails = async () => {
    try {
      setLoading(true);
      const response = await axiosConfig.get("/api/home-content");
      setHomeContent({
        en: response.data[0].why_kicket,
        ar: response.data[0].arabic_why_kicket,
      });
    } catch (error) {
      console.error("Error fetching home details data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchHomeService = async () => {
    try {
      setLoading(true);
      const response = await axiosConfig.get("/api/service");
      console.log("Home service data:", response.data);
      const data = response.data.map((e) => ({
        image: e.main_image,
        en: {
          title: e.title,
          description: e.description,
        },
        ar: {
          title: e.arabic_title,
          description: e.arabic_description,
        },
      }));
      console.log("Data:", data);
      setHomeService(data);
    } catch (error) {
      console.error("Error fetching home details data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
    fetchHomeContent();
    fetchHomeDetails();
    fetchHomeService();
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
        <img src={maskImage} className="w-[85%]" alt="Mask" />
      </div>

      {/* Why Kicket */}
      <div className="relative flex justify-center">
        <img
          src={blur}
          className="absolute w-full left-0 -top-[15rem] smM:-top-[6rem]"
          alt="Blur Background"
        />

        <div className="relative flex justify-center">
          <h1
            dir={language === "ar" ? "rtl" : "ltr"}
            className="text-[45px] font-[750] leading-[54px] text-white absolute smM:text-[7vw] smM:whitespace-nowrap"
          >
            {language === "ar" ? "لماذا" : "Why"}{" "}
            <span className="bg-gradient-to-r from-[#FFC019] via-[#ED4C75] to-[#00D6CC] text-transparent bg-clip-text">
              {language === "ar" ? "كيكيت" : "KICKET"}
            </span>
          </h1>
          <img
            src={bgVector}
            className="absolute left-0 w-[30%]"
            alt="Background Vector"
          />
          <div
            dir={language === "ar" ? "rtl" : "ltr"}
            className="h-fit pt-[8rem] smM:pt-[5rem] flex flex-col justify-center items-center gap-y-12"
          >
            <p className="text-white text-xl text-center w-[64%] mgM:w-[95%] mgM:text-start mx-auto leading-[35px] smM:text-[4vw] smM:leading-[6vw]">
              {homeContent[language]}
            </p>
            <Link
            to={"/why-kicket"}
              dir={language === "ar" ? "rtl" : "ltr"}
              className="smM:py-2 smM:px-[2rem] smM:text-[3.5vw] smM:leading-[6vw] py-4 px-[3rem] rounded-[50px] text-xl bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white"
            >
              {language === "ar" ? "اعرف أكثر" : "Know More"}
            </Link>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div
        style={{ backgroundImage: `url(${serviceBg})` }}
        className="w-[85%] lgM:w-[90%] text-white mx-auto block relative z-20 mt-[8rem] smM:mt-[4rem] bg-[center] bg-no-repeat mgM:w-[95%]"
      >
        <h1
          dir={language === "ar" ? "rtl" : "ltr"}
          className="text-[45px] font-[750] mb-12 smM:text-center smM:mb-6 smM:text-[7vw] smM:whitespace-nowrap"
        >
          {language === "ar" ? "خدماتنا" : "Our Services"}
        </h1>
        <div className="flex mgM:flex-col justify-between items-center lgM:mb-[5rem]">
          <img
            src={`https://kicketapi.webprismits.us/assets/services/${homeService[0].image}`}
            className="z-10 smM:hidden"
            alt="Our Service 1"
          />
          <img
            src={`https://kicketapi.webprismits.us/assets/services/${homeService[0].image}`}
            className="z-10 hidden smM:block"
            alt="Our Service 1 (Phone)"
          />

          <div className="h-fit w-[50%] smM:w-[95%] flex flex-col items-end justify-center smM:justify-normal gap-y-8 relative">
            <div class="line-with-circle absolute -left-[13rem] z-0">
              <div class="line"></div>
              <div class="circle"></div>
            </div>
            <img
              src={serviceVector1}
              className="absolute -left-10 -top-20 w-[50%] z-10 smM:w-[40%] smM:top-0"
              alt="Service Vector 1"
            />
            <h1
              dir={language === "ar" ? "rtl" : "ltr"}
              className="text-[35px] font-normal smM:text-[6vw] mgM:mx-auto mgM:mt-5 smM:whitespace-nowrap smM:mt-[5rem]"
            >
              {homeService[0][language].title}
            </h1>
            <p
              dir={language === "ar" ? "rtl" : "ltr"}
              className="w-[96%] text-right text-xl mgM:text-center lgM:text-[2vw] lgM:leading-[3vw] leading-[35px] smM:text-[4vw] smM:leading-[6vw]"
            >
              {homeService[0][language].description}
            </p>
            <Link
            to={"/accreditation"}
              dir={language === "ar" ? "rtl" : "ltr"}
              className="smM:py-2 smM:px-[2rem] smM:text-[3.5vw] smM:leading-[6vw] py-4 px-[3rem] rounded-[50px] text-xl bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white"
            >
              {language === "ar" ? "اعرف أكثر" : "Know More"}
            </Link>
          </div>
        </div>
        <div className="flex mgM:flex-col mgM:mt-10 flex-row-reverse justify-between items-center">
        <img
            src={`https://kicketapi.webprismits.us/assets/services/${homeService[1].image}`}
            className="z-10 smM:hidden"
            alt="Our Service 1"
          />
             <img
            src={`https://kicketapi.webprismits.us/assets/services/${homeService[1].image}`}
            className="z-10 hidden smM:block"
            alt="Our Service 1 (Phone)"
          />

          <div className="h-fit w-[50%] smM:w-[95%] flex flex-col items-start justify-center smM:justify-normal gap-y-8 relative">
            <div class="line-with-circle absolute -right-[16rem] smM:left-0 smM:right-auto smM:rotate-90 smM:top-0 rotate-180 z-10">
              <div class="line"></div>
              <div class="circle"></div>
            </div>
            <img
              src={serviceVector2}
              className="absolute -right-10 -top-20 w-[50%] z-10 smM:w-[40%] smM:top-0"
              alt="Service Vector 2"
            />
            <h1
              dir={language === "ar" ? "rtl" : "ltr"}
              className="text-[35px] font-normal smM:text-[6vw] mgM:mx-auto mgM:mt-5 smM:whitespace-nowrap smM:mt-[5rem]"
            >
              {homeService[1][language].title}
            </h1>
            <p
              dir={language === "ar" ? "rtl" : "ltr"}
              className="w-[96%] text-left text-xl mgM:text-center lgM:text-[2vw] lgM:leading-[3vw] leading-[35px] smM:text-[4vw] smM:leading-[6vw]"
            >
              {homeService[1][language].description}
            </p>
            <Link
            to={"/registration"}
              dir={language === "ar" ? "rtl" : "ltr"}
              className="smM:py-2 smM:px-[2rem] smM:text-[3.5vw] smM:leading-[6vw] py-4 px-[3rem] rounded-[50px] text-xl bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white"
            >
              {language === "ar" ? "اعرف أكثر" : "Know More"}
            </Link>
          </div>
        </div>
      </div>
      <SliderComponent serviceSnippet={serviceSnippet} />
      <OurClients isPhone={isPhone} clients={clients} />
      <ClientTestimonial isPhone={isPhone} testimonials={testimonials} />
    </Layout>
  );
};

export default LandingPage;
