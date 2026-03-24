import React from 'react';
import HeroBg from '../../../assets/PriceBookHero.png';
import HeroBgMobile from '../../../assets/PriceBookHeroMobile.png';

const PricingBookingHero = () => {
    return (
        <section className="relative w-full h-[444px] flex items-center justify-center md:items-end overflow-hidden bg-gradient-to-b from-[#2d3d30] to-[#1a2b1e]">

            {/* Desktop Background */}
            <div
                className="hidden sm:block absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroBg})` }}
            ></div>

            {/* Mobile Background */}
            <div
                className="block sm:hidden absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroBgMobile})` }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto w-full px-4 lg:px-8 flex justify-center md:justify-start md:pb-10">
                <div className="flex flex-col items-center text-center md:items-start md:text-start gap-3 max-w-2xl md:max-w-3xl">
                    <h1 className="text-white font-semibold font-poppins text-3xl sm:text-4xl lg:text-5xl leading-tight">
                        Flexible Pricing for Every Need
                    </h1>
                    <p className="text-gray-200 font-primary text-sm sm:text-base">
                        Choose the plan that fits your production schedule and budget
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingBookingHero;