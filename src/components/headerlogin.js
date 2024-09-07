import React from 'react';
import Button from '../components/button'; 
import { headerLogin } from '../config/content';

const HeaderL = () => {
    if (!headerLogin || !headerLogin.buttons) {
        console.error('headerLogin or its buttons property is not defined.');
        return null; 
    }

    return (
        <header className="bg-green1 shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo and Company Name */}
                <div className="flex items-center space-x-3">
                    <img 
                        src={headerLogin.logo.src} 
                        alt={headerLogin.logo.alt} 
                        className="h-12"
                    />
                </div>
                
                {/* Navigation Links */}
                <nav className="flex flex-1 justify-center">
                    <ul className="flex space-x-6">
                        {headerLogin.navLinks.map((link) => (
                            <li key={link.name}>
                                <a 
                                    href={link.href} 
                                    className="text-green9 hover:text-green6 transition"
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
                        type="outline" 
                        href={headerLogin.buttons.login.href} 
                        className="py-2 px-4 text-green7 border-green7 hover:bg-green7 hover:text-white transition"
                    >
                        {headerLogin.buttons.login.text}
                    </Button>
                    <Button 
                        type="primary" 
                        href={headerLogin.buttons.signup.href} 
                        className="py-2 px-4 bg-green6 text-white hover:bg-green7 transition"
                    >
                        {headerLogin.buttons.signup.text}
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default HeaderL;
