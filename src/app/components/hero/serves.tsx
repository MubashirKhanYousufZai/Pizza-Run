import Image from "next/image";
import React from "react";
import { FaHamburger } from "react-icons/fa";
import { GiFrenchFries, GiFullPizza } from "react-icons/gi";
import { VscArrowSmallRight } from "react-icons/vsc";

const Serves = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-700">
            What We Serve...
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            We serve pizza, burgers, fries, and drinks that will satisfy your cravings. 
            From classic combinations to unique flavors, there is something for everyone on our menu.
          </p>
        </div>
        <div className="h-1 w-24 bg-orange-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pizzas */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="relative w-full h-56">
              <Image
                src="/pizza.jpeg" 
                alt="Pizza"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mt-5">
              Pizzas <GiFullPizza className="text-2xl" />
            </h2>
            <p className="text-gray-600 mt-2">
              Our pizzas are made with fresh ingredients and topped with gooey cheese for a delicious experience. 
              Each bite is packed with flavor!
            </p>
            <a className="text-orange-700 hover:underline inline-flex items-center mt-3 font-medium" href="/components/menu">
              Order Now <VscArrowSmallRight className="text-xl ml-1" />
            </a>
          </div>

          {/* Burgers */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="relative w-full h-56">
              <Image
                src="/burger.jpeg" 
                alt="Burger"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mt-5">
              Burgers <FaHamburger className="text-2xl" />
            </h2>
            <p className="text-gray-600 mt-2">
              Our burgers are grilled to perfection with fresh lettuce, ripe tomatoes, and delicious sauces. 
              Juicy and full of flavor!
            </p>
            <a className="text-orange-700 hover:underline inline-flex items-center mt-3 font-medium" href="/components/menu">
              Order Now <VscArrowSmallRight className="text-xl ml-1" />
            </a>
          </div>

          {/* Fries */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="relative w-full h-56">
              <Image
                src="/fries.jpeg" 
                alt="Fries"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mt-5">
              Fries <GiFrenchFries className="text-2xl" />
            </h2>
            <p className="text-gray-600 mt-2">
              Our fries are crispy and golden, perfect for dipping or enjoying on their own! 
              Classic or loaded, they are always a great choice.
            </p>
            <a className="text-orange-700 hover:underline inline-flex items-center mt-3 font-medium" href="/components/menu">
              Order Now <VscArrowSmallRight className="text-xl ml-1" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Serves;
