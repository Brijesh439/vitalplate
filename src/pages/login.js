import React, { useState } from 'react';
import { loginContent } from '../config/content';
import Button from '../components/button';
import HeaderL from '../components/headerlogin';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); 

  return (
    <div className="min-h-screen flex flex-col bg-green1">
      {/* Header Section */}
      <HeaderL />

      {/* Login Page Container */}
      <div className="flex-grow flex items-center justify-center py-12">
        <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-2xl rounded-tl-3xl rounded-br-3xl overflow-hidden">

          {/* Illustration Section with Background Image */}
          <div 
            className="md:w-1/2 flex items-center justify-center p-8"
            style={{
              backgroundImage: `url(/assets/image/gradient.png)`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img
              src={loginContent.illustration}
              alt="Illustration"
              className="max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain"
            />
          </div>
          
          {/* Login Form Section */}
          <div className="md:w-1/2 flex flex-col items-center justify-center p-8 space-y-6 bg-green1">
            <h2 className="text-4xl font-extrabold text-green9 mb-6">{loginContent.title}</h2>
            <form className="w-full max-w-sm space-y-6">
              <div>
                <label className="block text-green10 text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder={loginContent.emailPlaceholder}
                  className="w-full p-4 border border-green5 rounded-lg focus:outline-none focus:ring-2 focus:ring-green7"
                />
              </div>
              <div>
                <label className="block text-green10 text-lg font-medium mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={loginContent.passwordPlaceholder}
                    className="w-full p-4 border border-green5 rounded-lg focus:outline-none focus:ring-2 focus:ring-green7"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-4 flex items-center text-green7 focus:outline-none"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M10 6a2 2 0 1 0 2 2 2 2 0 0 0-2-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"
                          clipRule="evenodd"
                        />
                        <path
                          d="M2 10a8 8 0 0 1 16 0 8 8 0 0 1-16 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <Button type="accent" className="w-full py-4 text-lg font-semibold bg-green6 hover:bg-green7 transition-all">
                {loginContent.signUpButton}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;