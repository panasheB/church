import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import {  useState, useEffect } from "react";
import heroImgData from "./heroimgData";
import { Link } from "react-router-dom";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"; 

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
const[currentSlide, setCurrentSlide] = useState(0);
const slideLength = heroImgData.length;

const autoScroll = true;
let slideInterval;
let intervalTime = 5000;

const nextSlide = () => {
  setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
};

const prevSlide = () => {
  setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
};

function auto() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

useEffect(() => {
  setCurrentSlide(0);
}, []);

useEffect(() => {
  if (autoScroll) {
    auto();
  }
  return () => clearInterval(slideInterval);
}, [currentSlide]);

const heroImageList = heroImgData.map((slide) => {
  return (
    <>
      <div className="slide" key={slide.id}>
        {slide.id === currentSlide && (
          <img className="slide-img" src={slide.image} />
        )}
      </div>
      {slide.id === currentSlide && (
        <div className="content">
          <p>{slide.line1}</p>
          <h1>{slide.heading}</h1>
          <p>{slide.line2}</p>
          {/* <div>
            <Link to="/products" className="btn">
              Buy now
            </Link>
          </div> */}
        </div>
      )}
    </>
  );
}); 
 

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      {/*  */}

      <div>
        <div className="hero">
          <div className="mask">
            <div>
              <BsArrowLeftCircle className="arrow prev" onClick={prevSlide} />
              <BsArrowRightCircle className="arrow next" onClick={nextSlide} />
            </div>
            {heroImageList}
          </div>
        </div>
      </div>

      <div className="relative w-full flex ">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          <motion.div
            className="flex items-center justify-center sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0 "
            variants={scrollAnimation}
          >
            <div className=" text-lg uppercase font-bold">
              In my distress I called to the Lord; I cried to my God for help.
              From his temple he heard my voice; my cry came before him, into
              his ears.
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0 "
            variants={scrollAnimation}
          >
            <div className=" text-lg uppercase font-bold">
              Make it your goal to live a quiet life, minding your own business
              and working with your hands, just as we instructed you before.
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0 "
            variants={scrollAnimation}
          >
            <div className=" text-lg uppercase font-bold">
              The Lord is my shepherd, I lack nothing. He makes me lie down in
              green pastures, he leads me beside quiet waters,
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
