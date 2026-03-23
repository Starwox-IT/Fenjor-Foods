import React from 'react';
import AboutStoreImg from '../../../assets/AboutStore.png';

const AboutStore = () => {
    return (
        <section className="bg-[#F5C5A3] py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-poppins text-gray-900 mb-5">
                            Flenjor Foods Store
                        </h2>
                        <p className="text-gray-800 font-primary text-sm sm:text-base leading-relaxed mb-2 max-w-lg mx-auto lg:mx-0">
                            While you're using our kitchen, don't forget to visit the Flenjor Foods Store for
                            all your specialty ingredients, African spices, and cooking supplies. We're here
                            to support your entire culinary journey.
                        </p>

                        {/* Bullet List */}
                        <ul className="space-y-2 mb-8 text-gray-800 font-primary text-sm sm:text-base inline-block text-left">
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-700 flex-shrink-0"></span>
                                Authentic African ingredients
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-700 flex-shrink-0"></span>
                                Specialty spices and seasonings
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-700 flex-shrink-0"></span>
                                Bulk purchasing options for businesses
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-700 flex-shrink-0"></span>
                                Expert advice and recipe ideas
                            </li>
                        </ul>

                        {/* CTA Button */}
                        <div className="flex justify-center lg:justify-start">
                            <button className="bg-[#DC5E32] hover:bg-[#c24f28] text-white font-semibold font-primary text-sm py-3.5 px-8 rounded-lg transition-colors w-full sm:w-auto">
                                Visit the Store
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
                        <img
                            src={AboutStoreImg}
                            alt="Flenjor Foods Store"
                            className="w-full max-w-[500px] lg:max-w-none h-auto object-cover rounded-3xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutStore;
