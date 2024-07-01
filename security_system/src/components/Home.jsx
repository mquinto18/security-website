import React from "react";
import styles from "../style";
import s1 from "../assets/s1.png";
import { stats } from "../constants";
const Home = () => {
  return (
    <div>
      <section
        id="home"
        className={`relative flex justify-center items-center md:flex-row flex-col ${styles.paddingX} mt-28`}
      >
        <div className="absolute w-[600px] h-[600px] overflow-hidden top-[-250px] left-[-150px] bg-[#2B09FF] rounded-full blur-[150px]" />
        <div className="relative w-full">
          <h1 className="flex-1 font-della font-light ss:text-[72px] text-[35px] text-white ss:leading-[100.8px] leading-[60px]">
            Advanced Protection, <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Reliable IT Solutions</span>{" "}
          </h1>
          <div>
            <p className="text-white font-roboto text-[14px] sm:text-[16px] md:text-[18px] lg:text-[15px] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[400px]">
              Exemplifies our commitment to delivering cutting-edge
              cybersecurity and dependable IT services tailored to your business
              needs.
            </p>
          </div>
          <div className="mt-5 sm:mt-10 text-white flex sm:justify-start">
            <a
              href=""
              className="border hover:bg-[#2B09FF] py-2 px-8 sm:px-12 rounded-full button cursor-pointer font-roboto font-medium text-[14px] sm:text-[16px] md:text-[18px] transition duration-300 ease-in-out"
            >
              <button>Get Started </button>
            </a>
          </div>
        </div>
        <div className="absolute right-0 bg-[#2B09FF] rounded-full blur-[150px] w-[150px] h-[150px] sm:w-[350px] sm:h-[350px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px]"></div>

        <div className="relative">
          <img
            src={s1}
            alt=""
            className="w-full xs:w-[300px] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[800px] h-auto"
          />
        </div>
      </section>
      <div
        className={` ${styles.paddingX} flex flex-col sm:flex-row justify-between items-center text-white mt-10`}
      >
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex justify-center items-center gap-4 font-roboto mb-4 sm:mb-0"
          >
            <h1 className="text-[32px] sm:text-[40px] font-bold">
              {stat.value}
            </h1>
            <p className="text-[16px] sm:text-[22px] bg-gradient-to-r from-[#2B09FF] to-[#FFFFFF] text-transparent bg-clip-text">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
