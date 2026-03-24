import React from 'react';
import { NavLink } from 'react-router-dom';
import AboutCommunityImg from '../../../assets/AboutCommunity.png';
import AboutCommunityMobileImg from '../../../assets/AboutCommunity.pngMobile.png';

const AboutCommunity = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#2d3d30] to-[#1a2b1e]">

            {/* Desktop Background Image */}
            <div
                className="hidden sm:block absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${AboutCommunityImg})` }}
            ></div>

            {/* Mobile Background Image */}
            <div
                className="block sm:hidden absolute inset-0 bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: `url(${AboutCommunityMobileImg})` }}
            ></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-2xl mx-auto sm:mx-0">

                    <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold font-poppins text-white mb-4 sm:mb-5 leading-tight">
                        Join Our Community
                    </h2>
                    <p className="text-gray-200 font-primary text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-sm lg:max-w-lg">
                        Become part of a growing network of food entrepreneurs building their dreams
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <NavLink
                            to="/pricing-booking"
                            className="bg-[#4A8C5C] hover:bg-[#3d7a4e] text-white font-semibold font-primary text-sm py-3.5 px-8 rounded-lg transition-colors w-full sm:w-auto text-center"
                        >
                            Book the Kitchen
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="bg-white/10 hover:bg-white/20 border border-white text-white font-semibold font-primary text-sm py-3.5 px-8 rounded-lg transition-colors w-full sm:w-auto text-center"
                        >
                            Contact Us
                        </NavLink>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutCommunity;
