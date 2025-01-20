import React from 'react'
import Hero from '../hero/page'
import Image from 'next/image'
import Chefs from './chefs'

const page = () => {
  return (
    <div>
      <Hero/>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero" width={720} height={600}
            src="/profile.jpg"
            />
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Pizza Run 🍕🍔🍟
            </h1>
            <p className="mb-8 leading-relaxed">
            Born from a cloud kitchen in 2020, we have transformed our passion for 
            pizza into a cozy restaurant just for you! Join us for a slice of happiness,
             where every bite tells our story.
            </p>
            <div className="flex w-full justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                    htmlFor="hero-field"
                    className="leading-7 text-sm text-gray-600"
                >
                    Contact-Us
                </label>
                <input
                    type="text"
                    id="hero-field"
                    name="hero-field" placeholder='Send Your Feedbacks !'
                    className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                </div>
                <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                <a href="/components/contact">Send</a>
                </button>
            </div>
            </div>
        </div>
      </section>
      <Chefs/>
    </div>
  )
}

export default page
