import React, { useState } from 'react';
import FAQImg from '../../../assets/FrequentlyAsked.png';
import FAQMobileImg from '../../../assets/FrequentlyAskedMobile.png';

const faqs = [
    {
        question: "What is included in the rental?",
        answer: "Your rental includes access to all kitchen equipment, utensils, cleaning supplies, and basic consumables. You bring your own ingredients and packaging materials."
    },
    {
        question: "Do I need insurance?",
        answer: "Yes, proof of general liability insurance is required for all renters. We can recommend affordable providers if you need assistance."
    },
    {
        question: "Can I store products overnight?",
        answer: "Half-day and full-day bookings include storage access. Hourly rentals can add storage for an additional $15/day."
    },
    {
        question: "Can I book recurring time slots?",
        answer: "Absolutely! We offer discounts for monthly recurring bookings. Contact us to set up a custom schedule."
    },
    {
        question: "What is your cancellation policy?",
        answer: "Cancellations made 48+ hours in advance receive a full refund. Within 48 hours, you will receive a credit for future use."
    },
    {
        question: "Is the kitchen certified for my products?",
        answer: "Our kitchen is certified for most food products. Contact us with specific questions about your products."
    }
];

const FrequestlyAsked = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-[#E8F0E9] py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

                    {/* Left Column: Image */}
                    <div className="w-full lg:w-5/12 xl:w-[40%] flex justify-center lg:justify-start">
                        {/* Desktop Image */}
                        <img
                            src={FAQImg}
                            alt="Frequently Asked Questions"
                            className="hidden lg:block w-full max-w-[450px] h-auto object-cover mx-auto"
                        />
                        {/* Mobile Image */}
                        <img
                            src={FAQMobileImg}
                            alt="Frequently Asked Questions Mobile"
                            className="block lg:hidden w-full h-auto object-cover mx-auto"
                        />
                    </div>

                    {/* Right Column: Content and Accordion */}
                    <div className="w-full lg:w-7/12 xl:w-[60%]">
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold font-poppins text-gray-900 mb-2">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-700 font-primary text-sm sm:text-base">
                                Everything you need to know about booking
                            </p>
                        </div>

                        {/* Accordion Container */}
                        <div className="space-y-3">
                            {faqs.map((faq, index) => {
                                const isOpen = activeIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300"
                                    >
                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            className="w-full px-5 py-3.5 sm:px-6 sm:py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                                        >
                                            <span className="text-left font-primary font-medium text-gray-800 pr-4">
                                                {faq.question}
                                            </span>

                                            {/* Chevron Icon */}
                                            <svg
                                                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* Answer Panel */}
                                        <div
                                            className={`transition-all duration-300 ease-in-out px-5 sm:px-6 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 pb-5 sm:pb-6' : 'max-h-0 opacity-0 pb-0'}`}
                                        >
                                            <p className="text-gray-600 font-primary text-sm leading-relaxed pt-2 border-t border-gray-100">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FrequestlyAsked;
