"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Send Button Click (WhatsApp)
  const handleSend = () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields before sending.");
      return;
    }

    const whatsappMessage = `Hello! 👋\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/923152669152?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative font-[Poppins]">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-200 rounded-2xl overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-lg">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 rounded-2xl"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.403719808026!2d67.06087891100232!3d24.95237534148107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3413f96fe8aab%3A0xfa82434223d3ea33!2sPizza%20Run%20Fast-food!5e0!3m2!1sen!2s!4v1737374592199!5m2!1sen!2s"
              style={{ filter: "grayscale(0.5) contrast(1.1) opacity(0.9)" }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded-xl shadow-md w-full sm:w-auto">
              <div className="lg:w-1/2 px-6">
                <h2 className="font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Office Of The Deputy Commissioner Central, Karachi
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  className="text-orange-600 leading-relaxed"
                  href="mailto:mubashirmpa2008@gmail.com"
                >
                  mubashirmpa2008@gmail.com
                </a>
                <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">0315 2669152</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-2xl shadow-lg p-8">
            <h2 className="text-gray-900 text-xl mb-5 font-bold text-center text-orange-700">
              Order Here & Send Your Feedback! 🍕
            </h2>

            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full bg-white rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none shadow-sm"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-white rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none shadow-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message..."
                className="w-full bg-white rounded-xl border border-gray-300 px-4 py-3 h-32 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none shadow-sm resize-none"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Button */}
            <button
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-400 to-orange-600 shadow-md hover:scale-105 transition-transform duration-300"
              onClick={handleSend}
            >
              Send via WhatsApp
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Your feedback fuels our passion and motivates us to keep delivering
              the best! ❤️
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
