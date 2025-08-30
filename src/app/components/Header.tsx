"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GiFullPizza } from "react-icons/gi";
import { TfiShoppingCart } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const Header = () => {
  return (
    <header className={`${poppins.className} sticky top-0 z-50 bg-amber-300 shadow-lg`}>
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.08, rotate: 3 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="flex title-font font-extrabold items-center text-gray-900">
            <GiFullPizza className="text-orange-700 text-4xl" />
            <span className="ml-3 text-3xl tracking-wide">Pizza Run</span>
          </Link>
        </motion.div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 font-medium text-lg">
          <Link href="/" className="relative text-gray-900 cursor-pointer group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/components/menu" className="relative text-gray-900 cursor-pointer group">
            Menu
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/components/about" className="relative text-gray-900 cursor-pointer group">
            About-us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/components/contact" className="relative text-gray-900 cursor-pointer group">
            Contact-us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex gap-5 items-center">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-950 bg-white border rounded-xl hover:bg-gray-100 shadow-sm transition">
              Language
              <RiArrowDropDownLine className="ml-1 text-xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-xl p-2">
              {["English", "Urdu", "Punjabi", "Sindhi", "Pashto"].map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-amber-100 rounded-md cursor-pointer"
                >
                  {lang}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search */}
          <motion.div
            whileFocus={{ scale: 1.05 }}
            className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 py-1 shadow-inner focus-within:ring-2 focus-within:ring-orange-500 transition"
          >
            <input
              type="text"
              className="bg-transparent outline-none text-sm text-gray-900 placeholder-gray-600 transition-all duration-300 w-24 focus:w-44"
              placeholder="Search..."
            />
            <CiSearch className="text-xl text-orange-700 cursor-pointer" />
          </motion.div>

          {/* Cart & Profile */}
          <motion.div whileHover={{ scale: 1.15 }}>
            <Link href="/cart">
              <TfiShoppingCart className="text-orange-700 text-3xl" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.15 }}>
            <Link href="/profile">
              <VscAccount className="text-orange-700 text-3xl" />
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
