"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GiFullPizza } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Poppins } from "next/font/google";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const Header = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/components/menu", label: "Menu" },
    { href: "/components/about", label: "About Us" },
    { href: "/components/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`${poppins.className} sticky top-0 z-50 bg-amber-300/95 backdrop-blur-md shadow-md`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-gray-900"
          >
            <GiFullPizza className="text-orange-700 text-4xl drop-shadow-sm" />
            <span className="text-2xl sm:text-3xl tracking-tight">Pizza Run</span>
          </Link>
        </motion.div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-base lg:text-lg">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-gray-900 hover:text-orange-700 transition-colors cursor-pointer group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-orange-700 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="hidden md:inline-flex items-center justify-between px-3 py-2 text-sm lg:text-base font-medium text-gray-950 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition-all focus:outline-none">
              Language
              <RiArrowDropDownLine className="ml-1 text-xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-lg p-2 w-36">
              {["English", "Urdu", "Punjabi", "Sindhi", "Pashto"].map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-100 rounded-md cursor-pointer"
                >
                  {lang}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search (Desktop only) */}
          <motion.div
            whileFocus={{ scale: 1.03 }}
            className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 py-1 shadow-inner focus-within:ring-2 focus-within:ring-orange-500 transition-all"
          >
            <input
              type="text"
              className="bg-transparent outline-none text-sm lg:text-base text-gray-900 placeholder-gray-500 w-24 lg:w-28 focus:w-44 lg:focus:w-56 transition-all duration-300"
              placeholder="Search..."
            />
            <CiSearch className="ml-2 text-xl text-orange-700 cursor-pointer hover:scale-110 transition-transform" />
          </motion.div>

          {/* Github Icon */}
          <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="https://github.com/MubashirKhanYousufZai"
              target="_blank"
              className="flex items-center"
            >
              <FaGithub className="text-orange-700 text-3xl drop-shadow-sm hover:text-orange-800 transition-colors" />
            </Link>
          </motion.div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <HiOutlineMenu className="text-3xl text-gray-900 cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-white p-6">
                <nav className="flex flex-col gap-6 font-medium text-lg">
                  {navLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-900 hover:text-orange-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <hr className="my-4" />
                  <div className="flex flex-col gap-2">
                    {["English", "Urdu", "Punjabi", "Sindhi", "Pashto"].map((lang) => (
                      <button
                        key={lang}
                        className="text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-100 rounded-md"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
