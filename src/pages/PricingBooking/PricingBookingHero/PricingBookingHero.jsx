import React from 'react';
import HeroBg from '../../../assets/PriceBookHero.png';

const PricingBookingHero = () => {
    return (
        <section
            className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] flex items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${HeroBg})` }}
        >

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8 w-full text-center sm:text-left pt-10 sm:pt-0">
                <h1 className="text-white font-bold font-poppins text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                    Flexible Pricing for Every Need
                </h1>
                <p className="text-gray-200 font-primary text-sm sm:text-base max-w-xl mx-auto sm:mx-0">
                    Choose the plan that fits your production schedule and budget
                </p>
            </div>
        </section>
    );
};

export default PricingBookingHero;