import React from "react";
import AboutHeroImg from "../../../assets/AboutHeroImg.png";
import AboutHeroMobileImg from "../../../assets/AboutHeroMobile.png";

const AboutHero = () => {
    return (
        <section className="relative w-full min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] flex flex-col justify-center overflow-hidden">

            {/* Desktop Background */}
            <div
                className="hidden sm:block absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${AboutHeroImg})` }}
            ></div>

            {/* Mobile Background */}
            <div
                className="block sm:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${AboutHeroMobileImg})` }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16 pt-16 pb-12">
                <div className="max-w-2xl text-center sm:text-left sm:mx-0 flex flex-col items-center sm:items-start">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-poppins text-white mb-3 sm:mb-6 leading-tight">
                        Our Story
                    </h1>
                    <p className="text-sm text-center sm:text-left sm:text-base sm:max-w-[500px] max-w-[300px] font-primary text-gray-100 font-medium">
                        Empowering food entrepreneurs through accessible, certified kitchen
                        space
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
