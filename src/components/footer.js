import React from 'react';
import content from '../config/content';

const Footer = () => {
    const { company, product, support, contact } = content.footer;

    return (
        <footer className="bg-background text-text py-6">
            <div className="container mx-auto flex flex-wrap justify-between space-x-6">
                {/* Company Section */}
                <div className="flex-1 min-w-[200px] mb-4">
                    <h2 className="text-2xl font-bold">{company.logo}</h2>
                    <p className="mt-2">{company.quote}</p>
                </div>

                {/* Product Section */}
                <div className="flex-1 min-w-[200px] mb-4">
                    <h3 className="text-xl font-semibold mb-2">Product</h3>
                    <ul>
                        {product.features.map((feature, index) => (
                            <li key={index} className="mb-1">{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* Company Section */}
                <div className="flex-1 min-w-[200px] mb-4">
                    <h3 className="text-xl font-semibold mb-2">Company</h3>
                    <ul>
                        {company.links.map((link, index) => (
                            <li key={index} className="mb-1">{link}</li>
                        ))}
                    </ul>
                </div>

                {/* Support Section */}
                <div className="flex-1 min-w-[200px] mb-4">
                    <h3 className="text-xl font-semibold mb-2">Support</h3>
                    <ul>
                        {support.features.map((feature, index) => (
                            <li key={index} className="mb-1">{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="flex-1 min-w-[200px] mb-4">
                    <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                    <p>{contact.info}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
