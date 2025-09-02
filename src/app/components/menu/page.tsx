"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { CiWallet } from "react-icons/ci";
import { motion } from "framer-motion";

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

  useEffect(() => {
    axios
      .get<Product[]>("https://678d784ef067bf9e24ea6063.mockapi.io/Pizza")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // WhatsApp Handler
  const handleBuyNow = (product: Product) => {
    const phoneNumber = "923152669152"; // 👈 apna WhatsApp number yahan daalein (country code ke sath)
    const message = `Hello! 👋 I want to purchase "${product.name}" for $${product.price}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 font-[Poppins] bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50 min-h-screen">
      {/* Page Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-center text-orange-700 mb-16 tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        🍕 Our Delicious Menu 😋
      </motion.h1>

      {products.length === 0 ? (
        <p className="text-center text-lg text-gray-600 animate-pulse">
          Loading pizzas for you...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
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
                <motion.h2
                  className="text-2xl font-semibold text-orange-700 mb-3 leading-snug"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.3 }}
                >
                  {product.name}
                </motion.h2>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                <p className="font-bold text-orange-700 mt-5 text-xl tracking-wide">
                  PKR {product.price}
                </p>

                {/* Buy Now Button -> WhatsApp */}
                <motion.button
                  onClick={() => handleBuyNow(product)}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-md hover:shadow-lg transition duration-300"
                >
                  Buy Now
                  <CiWallet className="text-xl" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pizza;
