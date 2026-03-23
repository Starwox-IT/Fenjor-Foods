import React from 'react'

import ReadyDesktop from '../../../assets/HomeReadyDesktop.png'
import ReadyMobile from '../../../assets/HomeReadyMobile.png'

const HomeReady = () => {
    return (
        <section className="bg-[#E8F0E9] py-14 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gray-900 leading-tight mb-4">
                            Ready to Start Your Food Business?
                        </h2>
                        <p className="text-gray-700 font-primary text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0 mb-8">
                            Book your first session today and join our community of successful food entrepreneurs
                        </p>
                        <button className="bg-white text-primary font-bold font-primary text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200">
                            View Pricing & Book now
                        </button>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full">
                        <img 
                            src={ReadyDesktop} 
                            alt="Couple cooking together" 
                            className="hidden md:block w-full h-auto rounded-2xl shadow-sm object-cover"
                        />
                        <img 
                            src={ReadyMobile} 
                            alt="Couple cooking together" 
                            className="block md:hidden w-full h-[400px] rounded-2xl shadow-sm object-cover object-center"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HomeReady
