import React from 'react';
import AboutValues1 from '../../../assets/AboutValues1.png';
import AboutValues2 from '../../../assets/AboutValues2.png';
import AboutValues3 from '../../../assets/AboutValues3.png';
import AboutValues4 from '../../../assets/AboutValues4.png';
import AboutValuesMobile1 from '../../../assets/AboutValuesMobile1.png';
import AboutValuesMobile2 from '../../../assets/AboutValuesMobile2.png';
import AboutValuesMobile3 from '../../../assets/AboutValuesMobile3.png';
import AboutValuesMobile4 from '../../../assets/AboutValuesMobile4.png';

const valuesData = [
    {
        desktopImg: AboutValues1,
        mobileImg: AboutValuesMobile1,
        title: "Community Trust",
        desc: "We believe in lifting each other up and creating opportunities for all."
    },
    {
        desktopImg: AboutValues2,
        mobileImg: AboutValuesMobile2,
        title: "Inclusive Access",
        desc: "Professional kitchen space should be accessible to every food entrepreneur."
    },
    {
        desktopImg: AboutValues3,
        mobileImg: AboutValuesMobile3,
        title: "Quality Standard",
        desc: "We maintain the highest certification and cleanliness standards."
    },
    {
        desktopImg: AboutValues4,
        mobileImg: AboutValuesMobile4,
        title: "Growth Support",
        desc: "Your success is our success. We grow together as a community."
    }
];

const ValueCard = ({ item }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden flex flex-col">
            {/* Desktop Image */}
            <img
                src={item.desktopImg}
                alt={item.title}
                className="hidden sm:block w-full h-48 lg:h-52 object-cover"
            />
            {/* Mobile Image */}
            <img
                src={item.mobileImg}
                alt={item.title}
                className="block sm:hidden w-full h-52 object-cover"
            />
            {/* Text Content */}
            <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-[16px] font-semibold font-poppins text-gray-900 mb-2">
                    {item.title}
                </h3>
                <p className="text-gray-600 font-primary font-medium text-[14px] leading-relaxed">
                    {item.desc}
                </p>
            </div>
        </div>
    );
};

const AboutValues = () => {
    return (
        <section className="bg-[#E8F0E9] py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

                {/* Section Heading */}
                <div className="text-center sm:text-left mb-10 sm:mb-14">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-poppins text-gray-900 mb-3">
                        Our Values
                    </h2>
                    <p className="text-gray-600 font-primary text-sm sm:text-base">
                        The principles that guide everything we do
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {valuesData.map((item, i) => (
                        <ValueCard key={i} item={item} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutValues;
