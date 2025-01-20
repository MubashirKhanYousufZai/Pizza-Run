"use client";
import { useCart } from "../context/CartContext";
import Image from "next/image";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-orange-700 mb-12">
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-orange-700">
                  {item.name}
                </h2>
                <p className="font-bold text-orange-700 mt-4 text-xl">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
