import React from 'react';

import Desktop1 from '../../../assets/HowBookingDesktop1.png';
import Desktop2 from '../../../assets/HowBookingDesktop2.png';
import Desktop3 from '../../../assets/HowBookingDesktop3.png';

import Mobile1 from '../../../assets/HowBookingMobile1.png';
import Mobile2 from '../../../assets/HowBookingMobile2.png';
import Mobile3 from '../../../assets/HowBookingMobile3.png';

const steps = [
    {
        stepNum: "Step 1",
        title: "Choose Your Date & Time",
        desc: "Select from available time slots that fit your schedule",
        desktopImg: Desktop1,
        mobileImg: Mobile1,
        badgeBg: "bg-[#F0F5F1]",
        badgeText: "text-[#2B5435]",
        imgClassesDesktop: "right-0 lg:right-0 bottom-0 lg:bottom-6",
        imgClassesMobile: "right-0 bottom-0"
    },
    {
        stepNum: "Step 2",
        title: "Secure Your Booking",
        desc: "Complete payment and receive instant confirmation",
        desktopImg: Desktop2,
        mobileImg: Mobile2,
        badgeBg: "bg-[#FCF0EE]",
        badgeText: "text-[#A63A29]",
        imgClassesDesktop: "left-1/3 -translate-x-1/2 bottom-0",
        imgClassesMobile: "left-0 bottom-0"
    },
    {
        stepNum: "Step 3",
        title: "Arrive & Create",
        desc: "Show up and start cooking in your certified space",
        desktopImg: Desktop3,
        mobileImg: Mobile3,
        badgeBg: "bg-[#F0F5F1]",
        badgeText: "text-[#2B5435]",
        imgClassesDesktop: "right-0 bottom-0",
        imgClassesMobile: "right-0 bottom-0"
    }
];

const HowBooking = () => {
    return (
        <section className="bg-[#E8F0E9] py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                {/* ── Header ── */}
                <div className="mb-12 text-center sm:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-poppins text-gray-900 mb-3">
                        How Bookings Work
                    </h2>
                    <p className="text-gray-700 font-primary text-sm sm:text-base">
                        Three simple steps to secure your kitchen time
                    </p>
                </div>

                {/* ── Cards Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.stepNum}
                            className="bg-white rounded-[1.5rem] pt-6 lg:pt-8 px-6 lg:px-8 relative overflow-hidden flex flex-col min-h-[280px] md:min-h-[320px] lg:min-h-[360px] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                        >
                            {/* Step Badge */}
                            <div className={`inline-block px-5 py-2 rounded-full text-sm font-semibold font-primary self-start mb-4 lg:mb-6 ${step.badgeBg} ${step.badgeText}`}>
                                {step.stepNum}
                            </div>

                            {/* Text Content */}
                            <div className="relative z-10 flex-1">
                                <h3 className="text-2xl md:text-xl lg:text-2xl font-bold font-poppins text-gray-900 mb-2 pr-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 font-primary text-sm md:text-xs lg:text-sm leading-relaxed max-w-[260px]">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Desktop Image */}
                            <img
                                src={step.desktopImg}
                                alt={step.title}
                                className={`absolute hidden md:block max-w-[70%] lg:max-w-[85%] max-h-[40%] lg:max-h-[55%] object-contain ${step.imgClassesDesktop}`}
                            />

                            {/* Mobile Image */}
                            <img
                                src={step.mobileImg}
                                alt={step.title}
                                className={`absolute block md:hidden max-w-[75%] max-h-[45%] object-contain ${step.imgClassesMobile}`}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HowBooking;
