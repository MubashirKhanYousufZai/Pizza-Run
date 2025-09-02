"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const chefs = [
  {
    name: "Main Chef 👩🏻‍🍳",
    image: "/chef1.jpeg",
    delay: 0.2,
  },
  {
    name: "Chef 1 👩🏻‍🍳",
    image: "/chef2.jpeg",
    delay: 0.4,
  },
  {
    name: "Chef 2 👩🏻‍🍳",
    image: "/chef3.jpeg",
    delay: 0.6,
  },
];

const Chefs = () => {
  return (
    <section className="text-gray-600 body-font">
      {/* Title */}
      <motion.h1
        className="title-font sm:text-4xl text-3xl mb-12 font-bold text-gray-900 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Chefs 👩🏻‍🍳
      </motion.h1>

      {/* Chef Cards */}
      <div className="container px-5 pb-24 mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {chefs.map((chef, i) => (
          <motion.div
            key={i}
            className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: chef.delay }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <Image
              alt={chef.name}
              width={400}
              height={400}
              src={chef.image}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-2xl font-semibold text-white drop-shadow-md">
                {chef.name}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Chefs;
