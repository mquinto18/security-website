import React from "react";
import s5 from "../assets/s5.jpg";
import { FaCalendarCheck } from "react-icons/fa6";
import {
  MdOutlineSecurity,
  MdManageAccounts,
  MdKeyboardArrowRight,
} from "react-icons/md";

const About = () => {
  return (
    <div className="my-20" id="aboutUs">
      <div className="md:flex text-white items-center gap-20">
        <div>
          <div>
            <p className="font-roboto text-lg md:text-xl">Who we are</p>
            <h1 className="font-della text-[32px] md:text-[50px]">
              Trusted Partner
            </h1>
            <p className="font-roboto text-slate-300 mt-4 md:px-0">
              Founded in [Year], [Your Company Name] is composed of a team of
              experienced IT professionals and cybersecurity experts passionate
              about protecting your business from the ever-evolving landscape of
              cyber threats. Our team brings together a wealth of knowledge and
              expertise in various IT domains, ensuring that we provide
              comprehensive and effective solutions.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="font-della text-[32px] md:text-[50px]">
              Why choose use?
            </h1>
            <div className="py-5 px-5 w-full md:w-[400px] bg-custom-gradient rounded-[30px] border border-glass">
              <p className="py-5">
                Our team consists of certified professionals with extensive
                experience in IT and cybersecurity.
              </p>
              <div className="flex justify-end mt-5">
                <a href="">
                  <button className=" px-6 py-1 text-[13px] border border-glass flex gap-3 items-center">
                    View More
                    <MdKeyboardArrowRight className="text-[17px]" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative mt-10">
            <img src={s5} alt="" className="rounded-[30px] w-[1200px] h-auto" />
            <div className="absolute bottom-0 right-0 mb-4 mr-4">
              <button className=" px-6 py-2 rounded-full text-[13px]  bg-[#2B09FF]  flex gap-3 items-center">
                More Details
                <MdKeyboardArrowRight className="text-[17px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white my-20">
        <h1 className="font-della text-[32px] md:text-[50px]">What we do?</h1>
        <div className="flex flex-col md:flex-row justify-between gap-3 mt-5">
          <div className="p-5 w-full md:w-[30%] cursor-pointer transition-colors duration-300 rounded-[30px] ease-in-out hover:bg-custom-gradient">
            <div className="rounded-md flex md:justify-start justify-center">
              <MdOutlineSecurity className="text-[55px] bg-[#2B09FF] p-3 rounded-md" />
            </div>
            <div className="mt-2 font-roboto text-center md:text-left">
              <h1>Cybersecurity Solutions:</h1>
              <p className="text-[15px] mt-2 text-slate-300">
                Our advanced cybersecurity services include threat detection,
                vulnerability assessments, and incident response to ensure your
                business is protected around the clock.
              </p>
            </div>
          </div>
          <div className="p-5 w-full md:w-[30%] cursor-pointer transition-colors duration-300 rounded-[30px] ease-in-out hover:bg-custom-gradient">
            <div className="rounded-md flex md:justify-start justify-center">
              <MdManageAccounts className="text-[55px] bg-[#2B09FF] p-3 rounded-md" />
            </div>
            <div className="mt-2 font-roboto text-center md:text-left">
              <h1 className="font-medium">Managed IT Services:</h1>
              <p className="text-[15px] mt-2 text-slate-300">
                Our advanced cybersecurity services include threat detection,
                vulnerability assessments, and incident response to ensure your
                business is protected around the clock.
              </p>
            </div>
          </div>
          <div className="p-5 w-full md:w-[30%] cursor-pointer transition-colors duration-300 rounded-[30px] ease-in-out hover:bg-custom-gradient">
            <div className="rounded-md flex md:justify-start justify-center">
              <FaCalendarCheck className="text-[55px] bg-[#2B09FF] p-3 rounded-md" />
            </div>
            <div className="mt-2 font-roboto text-center md:text-left">
              <h1 className="font-medium">Consulting Services:</h1>
              <p className="text-[15px] mt-2 text-slate-300">
                Our advanced cybersecurity services include threat detection,
                vulnerability assessments, and incident response to ensure your
                business is protected around the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
