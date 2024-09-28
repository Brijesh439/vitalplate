// src/components/Header.js
import React from "react";
import Button from "../components/button";
import { headerContent } from "../config/content";

const Header = () => {
  if (!headerContent || !headerContent.buttons) {
    console.error("headerContent or its buttons property is not defined.");
    return null; // Render nothing if data is missing   
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <img
            src={headerContent.logo.src}
            alt={headerContent.logo.alt}
            className="h-10"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-1 justify-center">
          <ul className="flex space-x-6">
            {headerContent.navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login/Sign Up Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            type={headerContent.buttons.login.type}
            href={headerContent.buttons.login.href}
            className="py-2 px-4"
          >
            {headerContent.buttons.login.text}
          </Button>
          <Button
            type={headerContent.buttons.signup.type}
            href={headerContent.buttons.signup.href}
            className="py-2 px-4"
          >
            {headerContent.buttons.signup.text}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
