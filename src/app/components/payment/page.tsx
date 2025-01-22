import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Payment Methods
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              At Pizza Run, we accept a variety of payment methods to make your
              dining experience seamless. Pay with ease using Easy Paisa or Jazz
              Cash, or opt for Cash on Delivery (COD) - our flexible payment
              options make ordering from us a breeze. Whether you prefer digital
              transactions or good old cash, we have got you covered!
            </p>
          </div>
          <div className="flex content-center justify-center text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="flex gap-2 border-2 border-gray-200 px-4 py-6 rounded-lg">
                <p className="leading-relaxed">Easy Paisa</p>
                <GiTakeMyMoney className="text-3xl font-bold text-center" />
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="flex gap-2 border-2 border-gray-200 px-4 py-6 rounded-lg">
                <p className="leading-relaxed">Jazz Cash</p>
                <GiTakeMyMoney className="text-3xl font-bold text-center" />
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="flex gap-2 border-2 border-gray-200 px-4 py-6 rounded-lg">
                <p className="leading-relaxed">COD</p>
                <GiTakeMyMoney className="text-3xl font-bold text-center" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
