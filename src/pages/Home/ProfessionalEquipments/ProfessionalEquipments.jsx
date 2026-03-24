import React from "react";
import { NavLink } from "react-router-dom";

import Equip1 from "../../../assets/HomeEquip1.png";
import Equip2 from "../../../assets/HomeEquip2.png";
import Equip3 from "../../../assets/HomeEquip3.png";
import Equip4 from "../../../assets/HomeEquip4.png";

const equipments = [
    {
        image: Equip1,
        title: "Industrial Ovens",
        description: "Professional-grade baking",
    },
    {
        image: Equip2,
        title: "Prep Stations",
        description: "Spacious work areas",
    },
    {
        image: Equip3,
        title: "Cold Storage",
        description: "Walk-in cooler & freezer",
    },
    {
        image: Equip4,
        title: "Sinks & Dishwasher",
        description: "Commercial dishwasher",
    },
];

const ProfessionalEquipments = () => {
    return (
        <section className="bg-[#E8F0E9] py-14">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                {/* ── Header row ── */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                    <div className="text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-900 mb-2">
                            Professional Equipments
                        </h2>
                        <p className="text-gray-600 font-primary text-sm max-w-xs leading-relaxed mx-auto sm:mx-0">
                            Access to top-tier commercial kitchen equipment for all your
                            production needs
                        </p>
                    </div>

                    <NavLink
                        to="/gallery"
                        className="hidden sm:flex items-center gap-1.5 text-sm font-semibold font-primary text-gray-900 underline underline-offset-4 hover:text-primary transition-colors duration-200 self-start sm:self-auto whitespace-nowrap"
                    >
                        Browse All Equipments
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </NavLink>
                </div>

                {/* ── Equipment Cards ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {equipments.map((item) => (
                        <div
                            key={item.title}
                            className="relative rounded-2xl overflow-hidden h-[420px] sm:h-[320px] lg:h-[340px] group cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Gradient overlay — sits at the bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                            {/* Label */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-center sm:text-left">
                                <h3 className="text-white font-bold font-poppins text-base leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 font-primary text-xs mt-0.5">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile-only: full-width Browse button below the grid */}
                <div className="mt-6 sm:hidden">
                    <NavLink
                        to="/the-kitchen"
                        className="block w-full bg-(--color-primary) hover:bg-[#4a8754] text-white text-sm font-semibold font-primary text-center py-4 rounded-xl transition-colors duration-200"
                    >
                        Browse all Equipments
                    </NavLink>
                </div>

            </div>
        </section>
    );
};

export default ProfessionalEquipments;
