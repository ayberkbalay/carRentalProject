"use client";
import React from 'react';
import { CarCardProps } from '@types';
import { generateCarImageUrl } from '@utils';
import Image from 'next/image';
import Link from 'next/link';
  
  const Login = () => {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <div className=" flex w-full">
          <div
            className="w-1/2 bg-white shadow-md rounded-md flex flex-col justify-center items-center"
            style={{
              backgroundImage: `url('')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <form className="px-6 py-8">
              <h2 className="text-2xl font-bold mb-4">Login</h2>
              <h5>Enter your account for a great experience!</h5>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <Link
                href="/profile"
                
              >
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition-colors"
              >
                Sign In
              </button>
              </Link>
            </form>
          </div>
          <div className=" relative max-w-[1440px] mx-auto flex-col justify-center; ">
            <Image src="/hero-bg.png" alt="Hero" width={500} height={400} />
            <Image src="/hero.png" alt="Hero" width={500} height={400}/>
            <Image src="/hero-bg.png" alt="Hero" width={300} height={200} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  