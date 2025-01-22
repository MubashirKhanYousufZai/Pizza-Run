import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="bg-slate-100 w-[500px] p-8 rounded-lg shadow-lg">
          <h1 className="text-center text-black text-3xl font-bold">Login</h1>
          <p className="text-center text-lg font-normal mt-4 text-slate-500">
            Please login using account details below
          </p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-10 border-slate-500 border-2 rounded-md p-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-10 border-slate-500 border-2 rounded-md p-2 mt-4"
            />
          </div>
          <p className="text-lg font-normal mt-4 text-slate-500">
            Forgot your Password?
          </p>
          <button className="bg-orange-500 text-white cursor-pointer w-full h-10 rounded-sm mt-4">
            Sign In
          </button>
          <p className="text-center text-lg font-normal mt-4 text-slate-500">
            Dont have an Account?{" "}
            <a href="#" className="text-blue-500">
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
