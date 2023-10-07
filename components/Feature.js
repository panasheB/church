import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Savior –Christ alone saves us. It is not of our works. No one is good enough. No one is worthy except He has deemed us worthy of salvation. While we were still sinners Christ died for us. It is by His grace and His grace alone.",
  "Sanctifier –Christ sanctifies or makes us holy. It is not of our works. The same grace that saves keeps us saved. His Word cleanses. As we hear the Word of God preached we are made holy. ",
  "Healer—by His stripes we were healed. Sodzo (Gk. Salvation) means salvation, healing and deliverance. Christ’s divine exchange on the cross paid in full and once and for all for our healing (mind of Christ, helmet of salvation; physical healing and deliverance from sin and addiction) ",
  "Spirit Baptizer—Christ by His gifts of grace indwells us and baptizes us in His Holy Spirit for empowerment and service. Passion and power to accomplish the good works He has prepared for us in advanced to walk in. ",
  "Soon Coming King—Christ is coming soon for His bride. Therefore, time is short. We are motivated to share His great good news of freedom and life giving love with the world around us.",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto flex justify-between"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-start ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 flex justify-center">
              Our Beliefs
            </h3>
            <p className="my-2 text-black-500 text-sm">
              Park West Church is unapologetically Pentecostal. We believe and
              adhere to the Fivefold Gospel of Christ. Christ and Christ alone
              saves. Christ and Christ alone sets apart for holiness. Christ and
              Christ alone heals physically, emotionally, financially,
              relationally and spiritually. Christ and Christ alone baptizes in
              His Spirit with power, authority and ability to live in this life.
              Christ and Christ alone will come again as King.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-start ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 flex justify-center">
              Our Mission
            </h3>

            <ul className="text-black-500 self-start list-inside ml-8">
              <motion.li
                className="relative circle-check custom-list"
                variants={scrollAnimation}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                The mission of Park West Church is the same mission Jesus gave
                his followers: Go therefore and make disciples of all nations,
                baptizing them in the name of the Father and of the Son and of
                the Holy Spirit.
              </motion.li>
              <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 flex justify-center mt-4">
                Our Vision
              </h3>
              <motion.li
                className="relative circle-check custom-list"
                variants={scrollAnimation}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                The vision of Park West Church is to be a House of Glory. We
                strive to operate in God's grace, house His glory,and preach His
                Gospel in everything we do!
              </motion.li>
              <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 flex justify-center mt-4">
                Communion
              </h3>
              <motion.li
                className="relative circle-check custom-list"
                variants={scrollAnimation}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                We partake of Communion every week here at Park West as did the
                early church in the book of Acts. "On the first day of the
                week...the disciples came together to break bread" (Acts 20:7).
                We believe we are to be like the early church and partake weekly
                to remember our Lord Jesus and His finished work on the cross.
                As we partake, with a revelation of Jesus and what He
                accomplished at the cross, we honor the Lord's death and receive
                the benefits of the cross. We remember His body was broken so
                ours might be whole (1 Cor 11:24, Isa 53:5) and His blood was
                shed for the forgiveness of all our sins (Matt 26:28, Col 2:13).
              </motion.li>
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>

      {/* <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-start ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 flex justify-center">
              Our Mission
            </h3>
            <p className="my-2 text-black-500 text-sm">
              Park West Church is unapologetically Pentecostal. We believe and
              adhere to the Fivefold Gospel of Christ. Christ and Christ alone
              saves. Christ and Christ alone sets apart for holiness. Christ and
              Christ alone heals physically, emotionally, financially,
              relationally and spiritually. Christ and Christ alone baptizes in
              His Spirit with power, authority and ability to live in this life.
              Christ and Christ alone will come again as King.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              <motion.li
                className="relative circle-check custom-list"
                variants={scrollAnimation}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                The mission of Park West Church is the same mission Jesus gave
                his followers: Go therefore and make disciples of all nations,
                baptizing them in the name of the Father and of the Son and of
                the Holy Spirit.
              </motion.li>
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div> */}
    </div>
  );
};

export default Feature;
