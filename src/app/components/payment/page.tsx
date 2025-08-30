import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";

// Define the types for the props
interface PaymentOptionProps {
  label: string;
}

// Use the interface to type the props
const PaymentOption: React.FC<PaymentOptionProps> = ({ label }) => (
  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
    <div className="flex items-center gap-2 border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
      <p className="leading-relaxed">{label}</p>
      <GiTakeMyMoney className="text-3xl font-bold text-center" />
    </div>
  </div>
);

// The rest of your code remains the same
const PaymentPage = () => {
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
              Cash, or opt for Cash on Delivery (COD) — our flexible payment
              options make ordering from us a breeze. Whether you prefer digital
              transactions or good old cash, we’ve got you covered!
            </p>
          </div>
          <div className="flex flex-wrap justify-center text-center">
            <PaymentOption label="Easy Paisa" />
            <PaymentOption label="Jazz Cash" />
            <PaymentOption label="COD" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;