import React, { useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import AOS from 'aos';

const HeroSection = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/sur.pdf"; // URL or path to the file
    link.download = "CV.pdf"; // Optional: Specify the filename for the download
    link.click(); // Trigger the download
  };


  return (
    <div id='home' className="bg-custom-gradient scroll-smooth">
      {/* <img
         src = '/pop.png' width={500} height={500} alt="gradient" 
         className="absolute top-56 left-2 sm:top-48 lg:-top-16 right-0 lg:left-1/4 lg:w-[50%] w-[250px] sm:w-[70%] sm:h-auto h-[250px] lg:h-auto"            
         style={{ opacity: 0.50}}
         /> */}
      <section className="relative top-20 lg:left-48 lg:top-32">
        <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
          <div data-aos="fade-right" className="col-span-1 sm:col-span-7">
            <h1 className="text-white mb-4 text-3xl text-center lg:text-left sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600">
                Hello, I&apos;m{" "}
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600">
                <TypeAnimation
                  sequence={[
                    "Surendar",
                    1000,
                    "Frontend Developer",
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>



            <p className="text-white text-base   text-center lg:text-left sm:text-lg mb-6 lg:text-xl">
              Hi, I'm Surendar. I am currently a Frontend Developer, <br />and I’m now focusing on becoming a Full Stack Developer.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row items-center sm:ml-10">
              <Link
                href="#contact"
                className="px-6 py-2 w-full border-1 border-white-transparent sm:w-auto rounded-full mr-0 sm:mr-4 bg-[#FFF] text-black text-lg font-medium hover:bg-custom-text text-center"
              >
                Hire Me
              </Link>
              <button
                onClick={handleDownload}
                className="px-6 py-2 w-full border-1 border-white-transparent sm:w-auto rounded-full mr-0 sm:mr-4 bg-[#FFF] text-black text-lg font-medium hover:bg-custom-text text-center"
              >
                Download CV
              </button>
            </div>

          </div>
          <div data-aos="fade-left" className="col-span-1 sm:col-span-5 lg:col-span-3 mt-8 sm:mt-0 flex justify-center sm:justify-center">
            <div className="rounded-full bg-black/40 w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] relative">
              <Image
                src="/images/canva13.png"
                alt="Surendar, Frontend Developer"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={230}
                height={230}
              />
            </div>
          </div>

        </div>
      </section>
      <div className="mt-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
          <path
            fill="#fff"
            fill-opacity="1"
            stroke="none"
            d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
