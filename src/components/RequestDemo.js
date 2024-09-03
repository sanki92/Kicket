import React from "react";
import { RxCross2 } from "react-icons/rx";

const RequestDemo = ({ setRequestDemo }) => {
  return (
    <div className="w-screen bg-[#252525] bg-opacity-30 h-screen fixed flex justify-center items-end top-0">
      {/* decrease Size */}
      <div className="bg-[#25252521] relative backdrop-blur-md w-[70%] smM:w-[85%] mb-12 mgM:mb-0 rounded-xl border text-white p-10 flex flex-col ">
        <RxCross2
          onClick={() => setRequestDemo(false)}
          className="absolute cursor-pointer top-7 right-7 text-2xl"
        />
        <h1 className="text-3xl font-bold mgM:mb-4">Request A Demo</h1>
        <div className="mgM:gap-y-3 mgM:overflow-y-scroll my-8 mgM:h-[60vh] flex flex-col gap-y-10">
          <div className="flex gap-x-8 mgM:flex-col gap-y-3">
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="flex gap-x-8 mgM:flex-col gap-y-3">
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="email"
              placeholder="Email"
            />
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="number"
              placeholder="Phone number"
            />
          </div>
          <div className="flex gap-x-8 mgM:flex-col gap-y-3">
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="text"
              placeholder="Company"
            />
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="text"
              placeholder="Job Title"
            />
          </div>
          <div className="flex gap-x-8 mgM:flex-col gap-y-3">
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="text"
              placeholder="Type of Event"
            />
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="text"
              placeholder="How did you hear about us?"
            />
          </div>
        </div>
        <button className=" smM:py-2 w-fit mx-auto smM:px-[2rem] smM:text-[3.5vw] mgM:text-[2vw] mgM:px-[1.8rem] mgM:py-2 mgM:mx-auto smM:leading-[6vw] py-4 px-[3rem] rounded-[50px] text-xl bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white">
          Request A Demo
        </button>
      </div>
    </div>
  );
};

export default RequestDemo;
