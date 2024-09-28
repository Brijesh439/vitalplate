import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type = 'primary', href, className, children, ...props }) => {
    const baseStyle = 'py-2 px-4 font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
    const typeStyles = {
        primary: '"bg-black hover:bg-white text-white hover:text-black',
        secondary: 'bg-secondary text-gray-900 hover:bg-secondary-dark',
        accent: 'bg-accent text-white hover:bg-accent-dark',
        danger: 'bg-danger text-white hover:bg-danger-dark',
        success: 'bg-success text-white hover:bg-success-dark',
        info: 'bg-info text-white hover:bg-info-dark',
        outline: 'border border-gray-300 text-gray-900 hover:bg-gray-100',
        link: 'text-primary underline hover:text-primary-dark bg-transparent border-none',
        disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
        small: 'py-1 px-2 text-sm',
        large: 'py-3 px-6 text-lg',
        rounded: 'rounded-full',
        square: 'rounded-none',
        soft: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        softOutline: 'border border-gray-300 text-gray-700 hover:bg-gray-200',
        softPrimary: 'bg-primary-light text-primary-dark hover:bg-primary-light-dark',
        gradient: 'bg-gradient-to-r from-primary to-accent text-white',
        glass: 'bg-white bg-opacity-20 backdrop-blur-lg text-gray-700 hover:bg-opacity-30',
        neon: 'bg-black text-neon-green hover:bg-neon-green hover:text-black',
        ghost: 'bg-transparent border-2 border-gray-400 text-gray-900 hover:bg-gray-100',
        shadow: 'bg-white text-gray-900 shadow-lg hover:shadow-xl',
        lightPrimary: 'bg-primary-light text-primary-dark hover:bg-primary-light-dark',
        lightAccent: 'bg-accent-light text-accent-dark hover:bg-accent-light-dark',
        pastel: 'bg-pastel-green text-pastel-pink hover:bg-pastel-pink hover:text-pastel-green',
        subtle: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
        inverted: 'bg-white text-primary border border-primary hover:bg-primary hover:text-white',
    };

    const buttonClasses = `${baseStyle} ${typeStyles[type]} ${className}`;

    return href ? (
        <a href={href} className={buttonClasses} {...props}>
            {children}
        </a>
    ) : (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf([
        'primary', 'secondary', 'accent', 'danger', 'success', 'info', 'outline', 'link', 'disabled', 
        'small', 'large', 'rounded', 'square', 'soft', 'softOutline', 'softPrimary', 'gradient', 
        'glass', 'neon', 'ghost', 'shadow', 'lightPrimary', 'lightAccent', 'pastel', 'subtle', 'inverted'
    ]),
    href: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
};

export default Button;

