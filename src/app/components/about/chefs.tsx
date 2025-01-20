import Image from 'next/image'
import React from 'react'

const Chefs = () => {
  return (
    <div>
     <section className="text-gray-600 body-font">
     <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
                Our Chefs 👩🏻‍🍳
     </h1>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <Image
          alt="gallery" width={840} height={340}
          className="w-full object-cover h-full object-center block  opacity-25 absolute inset-0"
          src="/chef1.jpeg"
        />
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
            Main Chef 👩🏻‍🍳
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <Image
              alt="gallery" width={542} height={460}
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="/chef2.jpeg"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                Chef 1 👩🏻‍🍳
              </h2>
            </div>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <Image
              alt="gallery" width={542} height={420}
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="/chef3.jpeg"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                Chef 2 👩🏻‍🍳
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 
    </div>
  )
}

export default Chefs
