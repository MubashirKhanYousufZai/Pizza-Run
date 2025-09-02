"use client";
import React from "react";
import Hero from "../hero/page";
import Image from "next/image";
import Chefs from "./chefs";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="font-sans">
      {/* ✅ Hero Section */}
      <Hero />

      {/* ✅ About Section */}
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div className="w-full flex flex-col items-center">
            
            {/* ✅ Animated Image */}
            <motion.div
              className="mb-10 overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover object-center rounded-2xl"
                alt="Pizza Run"
                width={288}
                height={288}
                src="/profile.webp"
                priority
              />
            </motion.div>

            {/* ✅ Content Section */}
            <motion.div
              className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 font-bold text-gray-900 tracking-tight">
                Pizza Run <span className="text-orange-500">🍕</span>
              </h1>

              <p className="mb-8 leading-relaxed text-base sm:text-lg text-gray-600 font-light max-w-2xl">
                Born from a cloud kitchen in 2020, we have transformed our passion
                for pizza into a cozy restaurant just for you! Join us for a slice
                of happiness, where every bite tells our story.
              </p>

              {/* ✅ Contact Form */}
              <motion.div
                className="flex flex-col sm:flex-row w-full max-w-md justify-center items-center gap-4 mt-8"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full">
                  <label
                    htmlFor="hero-field"
                    className="leading-7 text-sm text-gray-600 font-medium block mb-2"
                  >
                    Contact Us
                  </label>
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    placeholder="Send your feedback!"
                    className="w-full bg-gray-50 rounded-lg focus:ring-2 focus:ring-orange-300 focus:bg-white border border-gray-200 focus:border-orange-500 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-all duration-200 ease-in-out shadow-sm"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex text-white bg-gradient-to-r from-orange-500 to-orange-600 border-0 py-3 px-8 focus:outline-none hover:from-orange-600 hover:to-orange-700 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 mt-6 sm:mt-7"
                >
                  <a href="/components/contact" className="flex items-center">
                    Send
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ Chefs Section */}
      <Chefs />
    </div>
  );
};

export default Page;
