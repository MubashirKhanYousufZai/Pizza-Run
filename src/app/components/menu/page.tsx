"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { FaCartArrowDown } from "react-icons/fa";
import { useCart } from "../context/CartContext"; // Import Cart Context
import { CiWallet } from "react-icons/ci";

// Define Product Type
interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

const Pizza = () => {
  // Define State with the Correct Type
  const [products, setProducts] = useState<Product[]>([]);  
  const { addToCart } = useCart(); // Get addToCart function from context

  useEffect(() => {
    axios
      .get<Product[]>("https://678d784ef067bf9e24ea6063.mockapi.io/Pizza") // Type the API Response
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-orange-700 mb-12">
        Our Menu 😋
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-orange-700">
                  {product.name}
                </h2>
                <p className="text-gray-600 mt-3 text-base leading-relaxed">
                  {product.description}
                </p>
                <p className="font-bold text-orange-700 mt-4 text-xl">
                  ${product.price}
                </p>
                {/* Add to Cart Button */}
                <div className="flex gap-2">
                <button
                  onClick={() => addToCart(product)}
                  className="inline-flex items-center justify-center w-12 h-12 mt-5 rounded-full bg-orange-100 hover:bg-orange-200 transition duration-300"
                >
                  <a href="/components/cart">
                    <FaCartArrowDown className="text-orange-700 text-2xl" />
                  </a>
                </button>
                <button className="inline-flex items-center justify-center w-12 h-12 mt-5 rounded-full bg-orange-100 hover:bg-orange-200 transition duration-300">
                    <a href="/components/payment"><CiWallet className="text-orange-700 text-2xl"/></a>
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pizza;
