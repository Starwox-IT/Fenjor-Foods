import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import SliderLeft from "../../../assets/HomeSliderLeft.png";
import SliderRight from "../../../assets/HomeSliderRight.png";

// Inline SVG so fill colour can be controlled per-card
const QuoteIcon = ({ active }) => (
    <svg
        width="44"
        height="38"
        viewBox="0 0 44 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block mb-4 flex-shrink-0"
    >
        <path
            d="M0 24.612C0 10.7837 12.767 2.35824 14.7499 1.308C16.1861 0.5256 17.5157 0 18.4267 0C19.2202 0 19.7453 0.38592 19.7453 1.05072C19.7453 1.71504 19.0805 2.49792 18.4267 3.02304C16.5936 4.3416 11.448 11.1912 11.448 17.6443C11.448 19.3488 12.3701 20.9246 13.4203 21.4603C14.6102 22.1141 20.1413 23.304 20.1413 30.2717C20.1413 34.356 16.8504 37.9037 12.241 37.9037C6.18528 37.9042 0 33.3058 0 24.612Z"
            fill={active ? "#8B2525" : "#837F7F"}
        />
        <path
            d="M23.0469 24.612C23.0469 10.7837 35.825 2.35824 37.7973 1.308C39.245 0.5256 40.563 0 41.4846 0C42.2776 0 42.7926 0.38592 42.7926 1.05072C42.7926 1.71504 42.1394 2.49792 41.4846 3.02304C39.6414 4.3416 34.5069 11.1912 34.5069 17.6443C34.5069 19.3488 35.4285 20.9246 36.4792 21.4603C37.6691 22.1146 43.2002 23.304 43.2002 30.2722C43.2002 34.3565 39.8982 37.9042 35.2888 37.9042C29.2427 37.9042 23.0469 33.3058 23.0469 24.612Z"
            fill={active ? "#8B2525" : "#837F7F"}
        />
    </svg>
);

const reviews = [
    {
        text: "Flenjor Kitchen gave me the space to grow my catering business. The flexibility and cleanliness are unmatched!",
        name: "Amara Johnson",
        business: "Sweet Soul Bakery",
    },
    {
        text: "Flenjor Kitchen gave me the space to grow my catering business. The flexibility and cleanliness are unmatched!",
        name: "David Okonkwo",
        business: "Afro Fusion Catering",
    },
    {
        text: "Affordable, professional, and the team is incredibly supportive. Perfect for food entrepreneurs!",
        name: "Lisa Martinez",
        business: "Lisa Specialty Sauce",
    },
    {
        text: "Flenjor Kitchen gave me the space to grow my catering business. The flexibility and cleanliness are unmatched!",
        name: "Abraham Yusuf",
        business: "Yusuf Catering Services",
    },
    {
        text: "The kitchen is spotless and well-equipped. I wouldn't trade this space for anything!",
        name: "Grace Adeyemi",
        business: "Grace's Catering Co.",
    },
    {
        text: "Running my food business has never been easier. Flenjor Kitchen checks every box.",
        name: "Michael Osei",
        business: "Osei's Kitchen",
    },
];

const HomeReview = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 640px)": { slidesToScroll: 1 },
        },
    });

    const [activeIndex, setActiveIndex] = useState(2);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setActiveIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        // Start at index 2 so the 3rd card looks "center active" on load
        emblaApi.scrollTo(2, true);
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <section className="bg-[#FDF5EF] py-14">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                {/* ── Header ── */}
                <div className="mb-10 text-center sm:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-900 mb-2">
                        What Our Community Says
                    </h2>
                    <p className="text-gray-600 font-primary text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
                        More than <strong>2,500 5 star</strong> reviews and real success
                        stories from real entrepreneurs
                    </p>
                </div>

                {/* ── Slider wrapper with side nav buttons ── */}
                <div className="relative">

                    {/* Left button — centred vertically on the slider */}
                    <button
                        onClick={scrollPrev}
                        className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-10 focus:outline-none"
                        aria-label="Previous review"
                    >
                        <img src={SliderLeft} alt="Previous" className="h-10 w-10 object-contain" />
                    </button>

                    {/* Right button */}
                    <button
                        onClick={scrollNext}
                        className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-10 focus:outline-none"
                        aria-label="Next review"
                    >
                        <img src={SliderRight} alt="Next" className="h-10 w-10 object-contain" />
                    </button>

                    {/* Embla viewport */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {reviews.map((review, i) => {
                                const isActive = i === activeIndex;
                                return (
                                    <div
                                        key={i}
                                        className={`flex-none pl-4 w-full sm:w-[47%] lg:w-1/4`}
                                    >
                                        <div className={`h-full min-h-[320px] rounded-2xl p-6 flex flex-col justify-between transition-colors duration-300 ${isActive ? "bg-white sm:bg-[#F5CCB3]" : "bg-white"}`}>
                                            <div>
                                                <QuoteIcon active={isActive} />
                                                <p
                                                    className={`mt-6 font-primary text-sm leading-relaxed [text-indent:2.5rem] ${isActive ? "text-gray-900 font-medium" : "text-gray-600"}`}
                                                >
                                                    {review.text}
                                                </p>
                                            </div>
                                            <div className="mt-6">
                                                <p className={`font-bold font-primary text-sm ${isActive ? "text-gray-900" : "text-gray-800"}`}>
                                                    {review.name}
                                                </p>
                                                <p className="text-gray-500 font-primary text-xs mt-0.5">
                                                    {review.business}
                                                </p>
                                            </div>
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

export default HomeReview;
