import React from "react";
import { plans, solutions } from "../constants";
import s3 from "../assets/s3.jpg";
const Solutions = () => {
  return (
    <div className="my-20 text-white" id="solutions">
      <h1 className="font-della text-[32px] md:text-[50px]">
        Our IT and Cybersecurity Services
      </h1>
      <div className="flex justify-center items-center md:flex-row flex-col relative md:gap-24">
        <div className="mt-10">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 gap-4">
            {solutions.map((solution) => (
              <div className="w-full" key={solution.id}>
                <div className="border-b font-della text-2xl md:text-3xl">
                  {solution.title}
                </div>
                <div className="mt-6">
                  <h1 className="font-roboto font-medium">
                    {solution.subtitle}
                  </h1>
                  <p className="text-base text-slate-300">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative justify-center mt-20">
          <img
            src={s3}
            alt=""
            className="relative mt-[-50px] w-[250px] xs:w-[300px] sm:w-[400px] md:w-[600px] lg:w-[400px] xl:w-[800px] h-auto z-10"
          />
          <div className="absolute top-[200px] left-0 right-[-226px] bottom-0 flex justify-center items-center">
            <div className="bg-[#2B09FF] rounded-full blur-[200px] w-[150px] h-[150px] sm:w-[350px] sm:h-[350px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px]"></div>
          </div>
        </div>
      </div>
      {/* price and offers */}
      <div className="mt-28">
        <div className="font-della text-center text-[32px] md:text-[50px]">
          Choose your plan
        </div>
        <div className="flex mt-10 flex-col justify-between md:flex-row gap-10">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="w-full py-5 px-7 bg-[#00A3FF] bg-opacity-25 rounded-[30px]"
            >
              <div className="flex justify-between items-center">
                <div className="bg-[#00A3FF] bg-opacity-10 py-1 px-3 text-slate-300 rounded-lg">
                  {plan.title}
                </div>
                <div className="bg-white p-2 rounded-full">
                  <plan.arrow className="text-black text-[25px]" />
                </div>
              </div>

              <div className="mt-5">
                <h1 className="font-medium font-roboto text-[30px]">
                  {plan.price}
                </h1>
                <p className="text-[15px] text-slate-300">{plan.description}</p>

                <div className="mt-10 flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <plan.icon className="text-[24px]" />
                    <p className="text-slate-300">{plan.first}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <plan.icon className="text-[24px]" />
                    <p className="text-slate-300">{plan.second}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <plan.icon className="text-[24px]" />
                    <p className="text-slate-300">{plan.third}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <plan.icon className="text-[24px]" />
                    <p className="text-slate-300">{plan.fourth}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <plan.icon className="text-[24px]" />
                    <p className="text-slate-300">{plan.fifth}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <plan.icon className="text-[24px]" />
                    <p className="text-slate-300">{plan.six}</p>
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href=""
                    className="font-roboto font-medium py-2 rounded-full flex bg-[#2B09FF] justify-center items-center w-full"
                  >
                    {plan.planBtn}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
