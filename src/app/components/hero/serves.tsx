import Image from "next/image";
import React from "react";
import { FaHamburger } from "react-icons/fa";
import { GiFrenchFries, GiFullPizza } from "react-icons/gi";
import { VscArrowSmallRight } from "react-icons/vsc";
import { Poppins } from "next/font/google";

// Configure the font loader for consistency with the hero section
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

// Refactored data into an array for cleaner, scalable code
const menuItems = [
  {
    title: "Pizzas",
    icon: <GiFullPizza className="text-2xl" />,
    imageSrc: "/pizza.jpeg",
    description:
      "Our pizzas are made with fresh ingredients and topped with gooey cheese for a delicious experience. Each bite is packed with flavor!",
    alt: "A mouth-watering pizza with melted cheese",
  },
  {
    title: "Burgers",
    icon: <FaHamburger className="text-2xl" />,
    imageSrc: "/burger.jpeg",
    description:
      "Our burgers are grilled to perfection with fresh lettuce, ripe tomatoes, and delicious sauces. Juicy and full of flavor!",
    alt: "A juicy beef burger with all the fixings",
  },
  {
    title: "Fries",
    icon: <GiFrenchFries className="text-2xl" />,
    imageSrc: "/fries.jpeg",
    description:
      "Our fries are crispy and golden, perfect for dipping or enjoying on their own! Classic or loaded, they are always a great choice.",
    alt: "A basket of crispy, golden french fries",
  },
];

const Serves = () => {
  return (
    // Updated background color and font class for a cohesive design
    <section className={`bg-orange-50 text-gray-900 py-20 px-6 md:px-12 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-700">
            What We Serve...
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            We serve pizza, burgers, fries, and drinks that will satisfy your
            cravings. From classic combinations to unique flavors, there is
            something for everyone on our menu.
          </p>
        </div>
        <div className="h-1 w-24 bg-orange-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2"
            >
              <div className="relative w-full h-56">
                <Image
                  src={item.imageSrc}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg object-cover"
                />
              </div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-orange-700 mt-5">
                {item.title} {item.icon}
              </h2>
              <p className="text-gray-600 mt-2">
                {item.description}
              </p>
              <a
                className="text-orange-700 hover:underline inline-flex items-center mt-3 font-medium transition-colors duration-300"
                href="/components/menu"
              >
                Order Now <VscArrowSmallRight className="text-xl ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Serves;