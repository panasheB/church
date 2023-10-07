import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="flex justify-between w-3/4 ml-8">
        <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-2 sm:grid-rows-1 grid-flow-row sm:grid-flow-col sm:grid-cols-12 gap-4 ml-6">
          <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
            <div className="flex justify-between">
              <Image
                className="h-8 w-auto  object-contain text-blue-500 "
                src="/assets/bible.png"
                width={280}
                height={100}
                alt="OUR CHURCH"
              />{" "}
            </div>

            <p className="mb-4 text-lg">
              <strong className="font-medium">Go therefore </strong> and make
              disciples of all nations, baptizing them in the name of the Father
              and of the Son and of the Holy Spirit..
            </p>
            <div className="flex w-full mt-2 mb-8 -mx-2">
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Facebook className="h-6 w-6" />
              </div>
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Twitter className="h-6 w-6" />
              </div>
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Instagram className="h-6 w-6" />
              </div>
            </div>
            <p className="text-gray-400">
              ©{new Date().getFullYear()} - Our Church
            </p>
          </div>
        </div>
        <hr />
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col w-1/2  mr-8">
          <h1 className="font-bold">LOCATION AND SERVICE TIMES</h1>
          <div className="mt-4">
            <div>
              <h1 className="font-bold">Kuwadzana</h1>
              <h1>Kuwadzana 5 , 66 Close</h1>
              <h1>Service Times: Sunday at 9 am & 11 am</h1>
            </div>
            <div className="mt-4">
              <h1 className="font-bold">Kuwadzana</h1>
              <h1>Kuwadzana 5 , 66 Close</h1>
              <h1>Service Times: Sunday at 9 am & 11 am</h1>
            </div>
            <div className="mt-4">
              <h1 className="font-bold">Kuwadzana</h1>
              <h1>Kuwadzana 5 , 66 Close</h1>
              <h1>Service Times: Sunday at 9 am & 11 am</h1>
            </div>
            <div className="mt-4">
              <h1 className="font-bold">Kuwadzana</h1>
              <h1>Kuwadzana 5 , 66 Close</h1>
              <h1>Service Times: Sunday at 9 am & 11 am</h1>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Footer;
