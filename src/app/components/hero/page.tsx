import Image from 'next/image'
import React from 'react'
import Serves from './serves'

const Hero = () => {
  return (
    <div>
        <section className="text-slate-950 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
                className="object-cover object-center rounded-md"
                alt="hero" width={400} height={400}
                src="/profile.jpg"
            />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 hover:text-orange-700">
                Pizza Run
            </h1>
            <p className="mb-8 leading-relaxed">
            Welcome to Pizza Run! We serve delicious pizzas, sizzling fast food, and irresistible sides, all made with fresh ingredients and a dash of love. 
            Order now or visit us for a flavorful experience you wont forget!
            </p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded text-lg">
                <a href="/components/contact">Contact-us</a>
                </button>
            </div>
            </div>
        </div>
    </section>
    <Serves/>
    </div>
  )
}

export default Hero

