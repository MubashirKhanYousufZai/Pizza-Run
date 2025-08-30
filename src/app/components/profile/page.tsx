"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 


const LoginPage = () => {
  const router = useRouter();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }


    if (email === "abc@gmail.com" && password === "12345678") {
      setError("");
      localStorage.setItem("token", "dummy-auth-token");

      alert("Login Successful!");
      router.push("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <p className="text-center text-sm text-gray-500 mt-2">
          Please login using your account details below.
        </p>

        {error && <p className="text-center text-red-500 mt-2">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-6">

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 border-2 border-gray-300 rounded-md p-3"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 border-2 border-gray-300 rounded-md p-3"
            />
          </div>

          <div className="mb-4">
            <a href="#" className="text-orange-500 text-sm hover:underline">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white w-full h-10 rounded-md hover:bg-orange-600"
          >
            Sign In
          </button>
        </form>


        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
