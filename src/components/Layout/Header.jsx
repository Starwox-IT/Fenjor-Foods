import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const navLinks = [
    { label: "Home", to: "/" },
    { label: "The Kitchen", to: "/the-kitchen" },
    { label: "Pricing & Booking", to: "/pricing-booking" },
    { label: "Gallery", to: "/gallery" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <NavLink to="/" className="flex-shrink-0">
                        <img
                            src={Logo}
                            alt="Flenjor Foods Logo"
                            className="w-[100px]"
                        />
                    </NavLink>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-sm font-medium font-primary transition-colors duration-200 
                  ${isActive
                                        ? "text-primary underline underline-offset-4"
                                        : "text-gray-700 hover:text-primary"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* CTA Button — Desktop */}
                    <div className="hidden md:block">
                        <NavLink
                            to="/pricing-booking"
                            className="inline-block bg-primary hover:bg-[#4a8754] text-white text-sm font-semibold font-primary px-5 py-2.5 rounded-lg transition-colors duration-200"
                        >
                            Book The Kitchen
                        </NavLink>
                    </div>

                    {/* Hamburger — Mobile */}
                    <button
                        className="md:hidden p-2 text-gray-700 focus:outline-none"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        {/* Hamburger icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 z-50 bg-white flex flex-col transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close Button */}
                <div className="flex justify-end px-5 pt-5">
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col px-6 mt-6 gap-6 flex-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `text-lg font-medium font-primary border-b border-gray-100 pb-4
                ${isActive ? "text-primary" : "text-gray-800"}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile CTA */}
                <div className="px-6 pb-10 mt-4">
                    <NavLink
                        to="/pricing-booking"
                        onClick={() => setMenuOpen(false)}
                        className="block w-full bg-primary hover:bg-[#4a8754] text-white text-base font-semibold font-primary text-center py-3.5 rounded-lg transition-colors duration-200"
                    >
                        Book the Kitchen
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
