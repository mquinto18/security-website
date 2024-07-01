import React from "react";
import s4 from "../assets/s4.png";
import { services } from "../constants";
import { MdOutlineMail } from "react-icons/md";
const Services = () => {
  return (
    <div className="my-20 text-white" id="services">
      <div className="flex justify-center items-center md:flex-row flex-col relative gap-10">
        <div className="relative justify-center">
          <img
            src={s4}
            alt=""
            className="relative  mt-[-50px] w-full xs:w-[300px] sm:w-[400px] md:w-[600px] lg:w-[650px] xl:w-[800px] h-auto z-10"
          />
          <div className="absolute top-[200px] left-[-226px] right-0 bottom-0 flex justify-center items-center">
            <div className="bg-[#2B09FF] rounded-full blur-[200px] w-[150px] h-[150px] sm:w-[350px] sm:h-[350px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px]"></div>
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-della text-[32px] md:text-[50px]">
              Our IT and Cybersecurity Services
            </h1>
            <p className="text-[15px] mt-2 text-slate-300">
              Our solutions are tailored to meet the unique needs of your
              organization, providing advanced protection and reliable IT
              support.
            </p>

            <div className="flex flex-col gap-2 mt-5">
              {services.map((service) => (
                <div
                  className=" px-5 py-3 hover:bg-gray-900 rounded-[10px]"
                  key={service.id}
                >
                  <div className="rounded-md flex flex-col md:flex-row md:justify-start md:items-center gap-4 justify-center">
                    <service.icon className="text-[50px] bg-[#2B09FF] p-3 rounded-md" />
                    <div>
                      <h1 className="font-medium font-roboto ">
                        {service.title}
                      </h1>
                      <p className="text-[15px] mt-2 text-slate-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-25 mt-10 rounded-lg md:rounded-xl">
        <div className="py-8 px-4 md:px-10 lg:px-20 text-center">
          <h1 className="font-della text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Comprehensive training programs to educate your staff on
            cybersecurity best practices.
          </h1>
          <div className="max-w-md mx-auto mt-8 bg-black  py-4 px-4 sm:px-5 rounded-xl">
            <form
              action=""
              className="flex flex-col sm:flex-row justify-center items-center text-center"
            >
              <div className="flex items-center mb-4 sm:mb-0">
                <MdOutlineMail className="text-slate-300 text-2xl sm:text-3xl" />
                <input
                  type="email"
                  className="bg-transparent outline-none px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-white"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <a href="#">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2 px-5 sm:px-6">
                    Join Now
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
