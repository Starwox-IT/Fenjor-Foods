import React from 'react';
import AboutKitchenImg from '../../../assets/AboutKitchen.png';
import AboutKitchenMobileImg from '../../../assets/AboutKitchenMobile.png';

const AboutKitchen = () => {
    return (
        <section className="bg-[#FCF6F0] py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

                    {/* Left Column: Image */}
                    <div className="w-full lg:w-5/12 xl:w-[45%] flex justify-center lg:justify-start order-1 lg:order-1">
                        {/* Desktop Image */}
                        <img
                            src={AboutKitchenImg}
                            alt="Flenjor Foods Kitchen"
                            className="hidden lg:block w-full max-w-[500px] h-auto object-cover rounded-3xl lg:rounded-[2.5rem] shadow-sm"
                        />
                        {/* Mobile Image */}
                        <img
                            src={AboutKitchenMobileImg}
                            alt="Flenjor Foods Kitchen Mobile"
                            className="block lg:hidden w-full max-w-[400px] sm:max-w-[450px] h-auto object-cover rounded-3xl shadow-sm mx-auto"
                        />
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full lg:w-7/12 xl:w-[55%] order-2 lg:order-2">
                        <div className="max-w-2xl text-center sm:text-left mx-auto sm:mx-0">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-poppins text-gray-900 mb-6 lg:mb-8">
                                From Store to Kitchen
                            </h2>

                            <div className="space-y-4 sm:space-y-5 text-gray-700 font-primary text-sm sm:text-[15px] leading-relaxed">
                                <p>
                                    Flenjor Foods began as a specialty store bringing authentic African
                                    ingredients to our community. As we served our customers, we heard
                                    the same challenge again and again: talented home cooks and bakers
                                    wanted to turn their passion into a business, but commercial kitchen
                                    space was either unavailable or unaffordable.
                                </p>
                                <p>
                                    We knew we had to do something. Food is more than sustenance, it's
                                    culture, heritage, and community. Every recipe tells a story, and every
                                    entrepreneur deserves the chance to share theirs.
                                </p>
                                <p>
                                    That's why we built our commercial kitchen: a space where dreams
                                    rise like dough, where traditional recipes meet modern equipment, and
                                    where food entrepreneurs find not just a kitchen, but a community that
                                    believes in them.
                                </p>
                            </div>

                            <div className="mt-8 lg:mt-10">
                                <button className="bg-[#DC5E32] hover:bg-[#c24f28] text-white font-semibold font-primary text-sm py-3.5 px-8 rounded-lg transition-colors inline-block w-full sm:w-auto">
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutKitchen;
