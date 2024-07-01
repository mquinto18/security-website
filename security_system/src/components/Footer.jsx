import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { CgTwitter } from "react-icons/cg";
const Footer = () => {
  return (
    <div id="contactUs">
      <div className="mt-10 text-white border-t-1px">
        <div className="xl:max-w-[1280px] m-auto px-12 py-16">
          <div className="flex flex-col items-center justify-center xl:max-w-[1280px] mx-auto  py-10 sm:py-10 lg:py-10 xl:py-10">
            <div className="flex flex-col items-center sm:flex-row justify-between w-full">
              {/* Left Section */}
              <div className="mb-8 sm:mb-0 sm:mr-8 sm:text-left">
                <div className="flex items-center justify-center font-sonsie">
                  <div className="text-6xl sm:text-6xl text-[#4D94FF]">I</div>
                  <div className="ml-2 text-[15px] sm:text-3xl">
                    nfosec
                    <br />
                    Solutions
                  </div>
                </div>

                <div className="font-roboto mt-4 text-center sm:text-left">
                  <h1 className="text-slate-300 text-lg sm:text-xl">
                    Get in touch with us
                  </h1>
                  <h1 className="font-medium text-lg sm:text-xl">
                    @infotecSolutions@gmail.com
                  </h1>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full sm:w-[400px]">
                <div className="text-center sm:text-left mb-6">
                  <h1 className="font-della text-lg sm:text-xl">
                    Stay connected with us on social media for the latest
                    updates, news, and insights.
                  </h1>
                </div>
                <div className="bg-transparent border border-glass py-1 sm:px-5 rounded-full">
                  <form action="" className="flex justify-center items-center">
                    <div className="flex items-center gap-1 justify-center">
                      <MdOutlineMail className="text-slate-300 text-2xl sm:text-3xl" />
                      <input
                        type="email"
                        className="bg-transparent outline-none w-[120px] md:w-full  py-2 sm:px-4 sm:py-3 text-white placeholder-white text-[14px]"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <a href="#">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full py-2 px-5 sm:px-6">
                          Submit
                        </button>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:max-w-[1280px] mx-auto text-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-5">
        <div className="flex gap-4 flex-col-reverse sm:flex-row justify-between items-center">
          <h1 className="text-sm sm:text-base lg:text-lg">
            © 2024 BlueBrown Partners. All rights reserved.
          </h1>
          <div className="flex justify-center items-center gap-3 text-[25px]">
            <FaLinkedin className="hover:text-blue-600" />
            <CgTwitter className="hover:text-blue-400" />
            <FaFacebookSquare className="hover:text-blue-800" />
            <RiInstagramFill className="hover:text-pink-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
