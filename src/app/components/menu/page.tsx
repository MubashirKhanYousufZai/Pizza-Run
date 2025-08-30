"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { FaCartArrowDown } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { useCart } from "../context/CartContext"; // Import Cart Context

// Product Type
interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

const Pizza = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get<Product[]>("https://678d784ef067bf9e24ea6063.mockapi.io/Pizza")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 font-[Poppins] bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50 min-h-screen">
      {/* Page Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-orange-700 mb-16 tracking-tight">
        🍕 Our Delicious Menu 😋
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-lg text-gray-600 animate-pulse">
          Loading pizzas for you...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center">
                <h2 className="text-2xl font-semibold text-orange-700 mb-3 leading-snug">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                <p className="font-bold text-orange-700 mt-5 text-xl tracking-wide">
                  ${product.price}
                </p>

                {/* Buttons */}
                <div className="flex gap-5 justify-center mt-6">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-md hover:shadow-lg hover:scale-110 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    aria-label="Add to Cart"
                  >
                    <FaCartArrowDown className="text-xl" />
                  </button>

                  <a
                    href="/components/payment"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md hover:shadow-lg hover:scale-110 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    aria-label="Proceed to Payment"
                  >
                    <CiWallet className="text-xl" />
                  </a>
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
