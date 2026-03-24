import React from "react";
import AboutHeroImg from "../../../assets/AboutHeroImg.png";
import AboutHeroMobileImg from "../../../assets/AboutHeroMobile.png";

const AboutHero = () => {
    return (
        <section className="relative w-full h-[444px] flex items-center justify-center md:items-end overflow-hidden bg-[#2d4a3a]">

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
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex justify-center md:justify-start md:pb-10">
                <div className="flex flex-col items-center text-center md:items-start md:text-start gap-2 max-w-2xl sm:mx-0">
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-poppins text-white mb-1 sm:mb-2 leading-tight">
                        Our Story
                    </h1>
                    <p className=" text-center md:text-left sm:text-base sm:max-w-[500px] max-w-[400px] font-primary text-gray-200">
                        Empowering food entrepreneurs through accessible, certified kitchen
                        space
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
