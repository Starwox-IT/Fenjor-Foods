import React from "react";
import { NavLink } from "react-router-dom";

// Background
import HeroBg from "../../../assets/Heropage.png";

// Card icon imports
import KnifeIcon from "../../../assets/Heroknife.png";
import TimeIcon from "../../../assets/Herotime.png";
import ShieldIcon from "../../../assets/Heroshield.png";
import LocationIcon from "../../../assets/Herolocation.png";

// Badge imports (top-right corner of each card)
import GreenBadge from "../../../assets/Herogreen.png";
import OrangeBadge from "../../../assets/Heroorange.png";

const features = [
  {
    icon: KnifeIcon,
    badge: GreenBadge,
    title: "Quality Products",
    description: "Authentic equipments for cooking, baking and others.",
  },
  {
    icon: TimeIcon,
    badge: OrangeBadge,
    title: "Flexible Hourly Rental",
    description: "Book by the hour to fit your production schedule and budget.",
  },
  {
    icon: ShieldIcon,
    badge: GreenBadge,
    title: "Fully Certified Space",
    description: "Health department approved and inspected commercial kitchen.",
  },
  {
    icon: LocationIcon,
    badge: OrangeBadge,
    title: "Early Access & Parking",
    description: "Convenient location with ample parking for deliveries.",
  },
];

const HomeHero = () => {
  return (
    <section
      className="relative w-full min-h-[75vh] flex flex-col justify-between bg-cover bg-center bg-[#2d4a3a]"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* ── Hero Content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center sm:items-start text-center sm:text-left max-w-6xl mx-auto w-full px-4 lg:px-8 pt-16 pb-8 md:pt-24 md:pb-10">
        {/* Headline */}
        <h1 className="text-white font-bold font-poppins text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl">
          Your Culinary Dreams, <br className="hidden sm:block" />
          Our Certified Kitchen
        </h1>

        {/* Sub-text */}
        <p className="mt-4 text-gray-200 font-primary text-sm sm:text-base max-w-xl">
          Hourly commercial kitchen rental for food entrepreneurs, bakers, and
          caterers
        </p>

        {/* CTA Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row w-full max-w-[280px] sm:max-w-none mx-auto sm:mx-0 justify-center sm:justify-start items-stretch sm:items-center gap-4">
          <NavLink
            to="/pricing-booking"
            className="flex w-full sm:w-auto justify-center items-center gap-2 bg-primary hover:bg-[#4a8754] text-white text-sm font-semibold font-primary px-5 py-3 rounded-lg transition-colors duration-200"
          >
            Book the Kitchen
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

          <NavLink
            to="https://www.flenjorfoods.com/s1/home"
            target="_blank"
            className="w-full sm:w-auto text-center border border-white text-white hover:bg-white/10 text-sm font-semibold font-primary px-5 py-3 rounded-lg transition-colors duration-200"
          >
            Visit Flenjor Store
          </NavLink>
        </div>
      </div>

      {/* ── Feature Cards ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((card) => (
            <div
              key={card.title}
              className="relative bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-5 pt-8 flex flex-col gap-3 overflow-visible"
            >
              {/* Badge — absolutely pinned to top-right, half hanging over the top edge */}
              <img
                src={card.badge}
                alt="badge"
                className="absolute top-0 right-4 h-10 w-10 object-contain"
              />

              {/* Main icon */}
              <img
                src={card.icon}
                alt={card.title}
                className="h-10 w-10 object-contain"
              />

              {/* Text */}
              <div>
                <h3 className="text-white font-bold font-primary text-sm mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-300 font-primary text-xs leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
