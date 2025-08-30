import Image from "next/image";
import React from "react";
import Serves from "./serves";
import { Poppins } from "next/font/google"; // Step 1: Import the Poppins font

// Step 2: Configure the font loader
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // You can specify the weights you need
});

const Hero = () => {
  return (
    // Step 3: Apply the font to the main section element.
    // The `poppins.className` will apply the font-family and other styles.
    <section className={`bg-amber-100 text-slate-950 body-font py-24 ${poppins.className}`}>
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded-lg shadow-2xl"
            alt="Delicious cheesy pizza with pepperoni"
            width={600}
            height={550}
            src="/profile.webp"
            priority 
          />
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-extrabold text-gray-900">
            Freshly Made, Flavor Delivered.
          </h1>
          <h2 className="text-xl mb-4 font-semibold text-orange-600">
            Your Favorite Pizzas are just a click away!
          </h2>
          <p className="mb-8 leading-relaxed text-lg">
            Experience the taste of perfection with every slice. At Pizza Run, we
            use only the freshest ingredients to craft mouth-watering pizzas,
            sizzling fast food, and irresistible sides. Order now for a flavorful
            experience you won't forget!
          </p>

          <div className="flex justify-center space-x-4">
            <a href="/components/menu">
              <button className="inline-flex text-white bg-orange-600 border-0 py-3 px-8 focus:outline-none hover:bg-orange-700 rounded-full text-lg font-bold transition-colors duration-300 transform hover:scale-105">
                Order Now
              </button>
            </a>
            <a href="/components/contact">
              <button className="inline-flex text-gray-700 bg-gray-200 border-0 py-3 px-8 focus:outline-none hover:bg-gray-300 rounded-full text-lg transition-colors duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
      <Serves />
    </section>
  );
};

export default Hero;