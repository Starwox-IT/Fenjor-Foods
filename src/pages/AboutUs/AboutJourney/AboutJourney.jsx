import React from 'react';

const timelineData = [
    {
        year: "2020",
        title: "The Dream Begins",
        desc: "Flenjor Foods Store opens, serving the community with quality African ingredients."
    },
    {
        year: "2022",
        title: "Listening to Our Community",
        desc: "Customers share their struggles finding affordable commercial kitchen space."
    },
    {
        year: "2023",
        title: "Kitchen Construction",
        desc: "We invest in building a certified commercial kitchen to serve food entrepreneurs."
    },
    {
        year: "2024",
        title: "Grand Opening",
        desc: "Flenjor Foods Commercial Kitchen opens, serving 50+ entrepreneurs in year one."
    }
];

const JourneyCard = ({ data, isLeftDesktop }) => {
    return (
        <div className={`relative w-full bg-white rounded-2xl p-6 sm:p-8 xl:p-10 border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col ${isLeftDesktop ? 'md:items-end md:text-right items-start text-left' : 'items-start text-left'}`}>

            {/* Arrow Triangle Configured via 45deg rotation */}
            {isLeftDesktop ? (
                // Only active on Desktop for Left Cards (points RIGHT)
                <div className="hidden md:block absolute top-1/2 -mt-3 -right-3 w-6 h-6 bg-white border-t border-r border-gray-200 rotate-45 transform origin-center z-10 rounded-tr-[3px]"></div>
            ) : (
                // Active on Desktop Right Cards & Mobile All Cards (points LEFT)
                <div className="absolute top-1/2 -mt-3 -left-3 w-6 h-6 bg-white border-b border-l border-gray-200 rotate-45 transform origin-center z-10 rounded-bl-[3px]"></div>
            )}

            {/* Year Badge */}
            <div className="bg-[#FCF0EE] text-[#D85A38] font-medium text-sm py-1.5 px-6 rounded-full inline-block mb-4 font-primary">
                {data.year}
            </div>

            {/* Content */}
            <h3 className="text-lg sm:text-xl font-semibold font-poppins text-gray-900 mb-3">{data.title}</h3>
            <p className="text-gray-600 font-primary max-w-[300px] sm:max-w-[350px] text-sm leading-relaxed">{data.desc}</p>

        </div>
    );
};

const TimelineItem = ({ data, index }) => {
    const isLeftDesktop = index % 2 === 0;

    return (
        <div className="relative flex items-center w-full mb-10 md:mb-16 last:mb-0">

            {/* --- Left Column (Desktop Only for Left Elements) --- */}
            <div className="hidden md:flex w-1/2 justify-end pr-8 xl:pr-12">


                {isLeftDesktop && <JourneyCard data={data} isLeftDesktop={true} />}
            </div>

            {/* --- Center Timeline Dot Anchors --- */}
            <div className="absolute left-[15px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#FCF0EE] z-10 shadow-sm border-[3px] md:border-4 border-white">
                <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#DC5E32]"></div>
            </div>

            {/* --- Right Column (Mobile All Elements, Desktop Right Elements) --- */}
            <div className="w-full md:w-1/2 flex justify-start pl-[46px] sm:pl-[60px] md:pl-8 xl:pl-12">
                {/* On mobile, ALL cards render here. On desktop, Left cards hide this div completely */}
                <div className={`w-full flex ${isLeftDesktop ? 'md:hidden' : 'block'}`}>
                    <JourneyCard data={data} isLeftDesktop={false} />
                </div>
            </div>

        </div>
    );
};

const AboutJourney = () => {
    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                {/* Module Heading */}
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-poppins text-gray-900 mb-4">
                        Our Journey
                    </h2>
                    <p className="text-gray-600 font-primary text-sm sm:text-base">
                        From single store to a trusted brand
                    </p>
                </div>

                {/* Timeline Axis & Items */}
                <div className="relative overflow-hidden md:overflow-visible pb-4">

                    {/* The Background Line Stroke */}
                    {/* Placed precisely under the dots. Mobile: 15px. Desktop: 50% left */}
                    <div className="absolute top-4 bottom-4 w-px bg-gray-200 left-[15px] md:left-1/2 transform -translate-x-1/2"></div>

                    {/* Iterating the components */}
                    {timelineData.map((item, i) => (
                        <TimelineItem key={i} data={item} index={i} />
                    ))}

                </div>
            </div>
        </section>
    );
};

export default AboutJourney;
