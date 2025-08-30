import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-amber-300 text-gray-900 font-[Poppins]">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        {/* Logo */}
        <a
          className="flex title-font font-semibold items-center md:justify-start justify-center text-gray-900"
          href="/"
        >
          <GiFullPizza className="text-orange-700 text-4xl animate-bounce" />
          <span className="ml-3 text-2xl tracking-wide">Pizza Run</span>
        </a>

        {/* Email */}
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-900 sm:py-2 sm:mt-0 mt-4">
          ©{" "}
          <a
            href="mailto:mubashirmpa2008@gmail.com"
            className="hover:text-orange-700 transition duration-300"
          >
            mubashirmpa2008@gmail.com
          </a>
        </p>

        {/* Social Icons */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-xl gap-4">
          <a
            className="text-gray-800 hover:text-orange-700 transform hover:scale-125 transition duration-300"
            href="https://www.linkedin.com/in/mubashir-khan-538a662bb"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            className="text-gray-800 hover:text-orange-700 transform hover:scale-125 transition duration-300"
            href="https://github.com/MubashirKhanYousufZai"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            className="text-gray-800 hover:text-orange-700 transform hover:scale-125 transition duration-300"
            href="https://wa.me/qr/FWX3BWWPABVRG1"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
          <a
            className="text-gray-800 hover:text-orange-700 transform hover:scale-125 transition duration-300"
            href="https://x.com/MubashirKh67451"
          >
            <FaTwitter className="text-3xl" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
