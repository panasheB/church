import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full h-full text-center justify-center ">
        <div className="flex flex-col w-full  h-full   justify-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed pb-8">
            Contact Us
          </h3>

          <div className=" w-full h-full px-4 sm:w-2/3 lg:w-1/2 mx-auto ">
            <form
              class="w-full max-w-lg  rounded h-full"
              
            >
              <div class="flex flex-wrap -mx-3 mb-6 w-full">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2 mt-4"
                    for="first-name"
                  >
                    First Name
                  </label>

                  <input
                    class=" w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4   leading-tight focus:outline-none focus:bg-white"
                    id="first-name"
                    type="text"
                    name="firstname"
                    placeholder=" First Name"
                    required
                    errorBorderColor="slate-500"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase  text-gray-700 text-xs font-bold mb-2 mt-4"
                    for="last-name"
                  >
                    Last Name
                  </label>
                  <input
                    name="lastname"
                    class="block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4   leading-tight focus:outline-none focus:bg-white"
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    class="block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4  mb-4  leading-tight focus:outline-none focus:bg-white"
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"
                    for="subject"
                  >
                    Subject of Message
                  </label>
                  <input
                    name="subject"
                    className="block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4 mb-4  leading-tight focus:outline-none focus:bg-white"
                    id="subject"
                    type="text"
                    placeholder="Subject of Message"
                    required
                  />
                </div>
                <div class="w-full  px-3">
                  <textarea
                    name="message"
                    className="block w-3/4 h-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-8 px-4 mt-4  leading-tight focus:outline-none focus:bg-white"
                    placeholder="Message"
                    required
                  />
                </div>

              
              </div>

              <div className="w-full  px-3 flex justify-start">
                <button className="block w-1/2 justiy-center bg-white-300 hover:bg-sky-500 text-gray-700 border border-sky-500 rounded py-3 px-4 mt-8  leading-tight focus:outline-none focus:bg-white ">
                  Submit
                </button>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2"></div>
            </form>
          </div>
        </div>

        <div className="flex flex-col w-full my-16 " id="testimoni">
          <div className="w-full flex flex-col">
            <div variants={scrollAnimation}>
              <Testimoni />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
