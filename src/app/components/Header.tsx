import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { GiFullPizza } from 'react-icons/gi'
import { TfiShoppingCart } from 'react-icons/tfi'
import { VscAccount } from 'react-icons/vsc'
import { RiArrowDropDownLine } from 'react-icons/ri'
const Header = () => {
  return (
    <header className="text-gray-900 bg-amber-300 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer" href='/'>
            <GiFullPizza className='text-orange-700 text-4xl'/>
            <span className="ml-3 text-xl">Pizza Run</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-semibold">
            <a className="mr-5 cursor-pointer" href='/'>Home</a>
            <a className="mr-5 cursor-pointer" href='/components/menu'>Menu</a>
            <a className="mr-5 cursor-pointer" href='/components/about'>About-us</a>
            <a className="mr-5 cursor-pointer" href='/components/contact'>Contact-us</a>
            </nav>
            <div className='flex gap-2'>
            <div className="relative inline-block text-left text-gray-950">
  <DropdownMenu>
    <DropdownMenuTrigger className="inline-flex items-center justify-between w-full p-2 text-sm font-medium text-gray-950 bg-white border rounded-md hover:bg-gray-100 focus:outline-none">
      Language
      <RiArrowDropDownLine />
    </DropdownMenuTrigger>
    <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg focus:outline-none">
      <DropdownMenuContent className="py-1">
        <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
          English
        </DropdownMenuItem>
        <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
          Urdu
        </DropdownMenuItem>
        <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
          Punjabi
        </DropdownMenuItem>
        <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
          Sindhi
        </DropdownMenuItem>
        <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
          Pashto
        </DropdownMenuItem>
      </DropdownMenuContent>
    </div>
  </DropdownMenu>
            </div>
            <div className="hidden lg:flex items-center bg-gray-100 rounded-md px-3 py-1">
                <input
                    type="text"
                    className="bg-gray-100 outline-none text-sm text-blue-900 placeholder-gray-900"
                    placeholder="Search..."
                />
                <CiSearch className="text-xl bg-orange-700 cursor-pointer" />
                </div>
            <a href="/components/cart"><TfiShoppingCart className='text-orange-700 text-4xl'/></a>
            <a href="/components/profile"><VscAccount className='text-orange-700 text-4xl'/></a>
            </div>
        </div>
    </header>

  )
}

export default Header
