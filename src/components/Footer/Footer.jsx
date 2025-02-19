import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-[#e9ecef] border-t-[#33353F] text-white z-10">
      <div
        data-aos="fade-up"
        className="container p-10 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Logo Section */}
        <div className="rounded-full bg-black/40 w-[150px] h-[150px] lg:w-[120px] lg:h-[120px] flex items-center justify-center">
          <img
            src="/images/canva13.png"
            alt="Surendar, Frontend Developer"
            className="w-[100px] h-[100px] object-cover"
          />
        </div>

        {/* Footer Text */}
        <p className="text-black text-xl text-center md:text-left">All rights reserved.</p>

        {/* Social Icons Section */}
        <div className="flex flex-row gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-custom-color transition-all duration-150"
          >
            <FaGithub size={30} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-custom-color transition-all duration-150"
          >
            <FaLinkedin size={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
