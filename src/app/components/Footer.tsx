import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="text-gray-900 bg-amber-300 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          href="/"
        >
          <GiFullPizza className="text-orange-700 text-4xl" />
          <span className="ml-3 text-xl">Pizza Run</span>
        </a>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-900 sm:py-2 sm:mt-0 mt-4">
          ©
          <a href="mailto:mubashirmpa2008@gmail.com">
            {" "}
            mubashirmpa2008@gmail.com
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-xl">
          <a
            className="text-gray-800"
            href="https://www.linkedin.com/in/mubashir-khan-538a662bb"
          >
            <FaLinkedin className="text-orange-700 text-4xl" />
          </a>
          <a
            className="ml-3 text-gray-800"
            href="https://github.com/MubashirKhanYousufZai"
          >
            <FaGithub className="text-orange-700 text-4xl" />
          </a>
          <a
            className="ml-3 text-gray-800"
            href="https://wa.me/qr/FWX3BWWPABVRG1"
          >
            <FaWhatsapp className="text-orange-700 text-4xl" />
          </a>
          <a className="ml-3 text-gray-800" href="">
            <FaFacebook className="text-orange-700 text-4xl" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
