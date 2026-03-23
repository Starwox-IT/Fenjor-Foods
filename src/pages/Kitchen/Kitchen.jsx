import React from "react";
import kitHero from "../../assets/kitHero.png";
import kitHeroMob from "../../assets/kitHeroMob.png";
import rice from "../../assets/rice.png";
import { ArrowRightIcon, ChefHatIcon, Flame, Scale } from "lucide-react";
import { Snowflake } from "lucide-react";
import { Droplets } from "lucide-react";
import { Plug } from "lucide-react";
import { Croissant } from "lucide-react";
import { Package } from "lucide-react";
import bread from "../../assets/bread.png";
import grill from "../../assets/grill.png";
import sieve from "../../assets/sieve.png";
import health from "../../assets/health.png";
import food from "../../assets/food.png";
import fire from "../../assets/fire.png";
import HACCP from "../../assets/HACCP.png";
import badgeGreen from "../../assets/badgeGreen.png";
import badgeOrange from "../../assets/badgeOrange.png";
import long from "../../assets/long.png";
import inner from "../../assets/inner.png";
import inner2 from "../../assets/inner2.png";

const equipments = [
  {
    title: "Commercial Range & Ovens",
    desc: "6-burner gas ranges with convection ovens, perfect for high-volume cooking.",
    icon: <Flame />,
  },
  {
    title: "Refrigeration",
    desc: "Walk-in cooler, freezer, and reach-in refrigerators for all storage needs.",
    icon: <Snowflake />,
  },
  {
    title: "Sinks & Sanitation",
    desc: "3-compartment sinks, hand wash stations, and commercial dishwasher.",
    icon: <Droplets />,
  },
  {
    title: "Prep Equipment",
    desc: "Food processors, mixers, slicers, and all essential prep tools.",
    icon: <Plug />,
  },
  {
    title: "Baking Suite",
    desc: "Deck ovens, proofing cabinets, and specialized baking equipment.",
    icon: <Croissant />,
  },
  {
    title: "Packaging Arena",
    desc: "Dedicated space for final product packaging and labeling.",
    icon: <Package />,
  },
];

const Kitchen = () => {
  return (
    <div>
      <div className=" mx-auto">
        {/* Mobile hero */}
        <div
          className="md:hidden flex items-end py-16 px-6 text-white"
          style={{
            backgroundImage: `url(${kitHeroMob})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "444px",
          }}
        >
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[353px] flex flex-col items-center text-center">
              <h1 className="font-semibold text-[26px] font-poppins">The Kitchen</h1>
              <p className="text-[13px] font-primary">A fully certified, professional space for your culinary vision</p>
            </div>
          </div>
        </div>

        {/* Desktop hero */}
        <div
          className="hidden md:flex items-end md:py-26 px-8 text-white"
          style={{
            backgroundImage: `url(${kitHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "444px",
          }}
        >
          <div className="text-start max-w-6xl mx-auto w-full flex flex-col items-start gap-4">
            <h1 className="font-semibold text-[38px] font-poppins">The Kitchen</h1>
            <p className="text-[16px] font-primary">A fully certified, professional space for your culinary vision</p>
          </div>
        </div>

        <div className="bg-secondary-light">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row py-16 gap-10 px-4 md:px-0">
            <img src={rice} alt="Rice" className="w-full max-w-[353px] mx-auto md:hidden rounded-2xl object-cover" />
            <div className="flex-1 flex flex-col items-center md:items-start">
              <div className="w-full max-w-[353px] md:max-w-none flex flex-col items-center md:items-start gap-6 text-center md:text-start">
                <h1 className="font-poppins font-semibold text-[28px] md:text-[38px]">
                  Built for Food Entrepreneurs
                </h1>
                <div className="font-primary text-[16px] flex flex-col gap-4">
                  <p>
                    Flenjor Foods Commercial Kitchen was created with a simple
                    mission:
                    <br /> to make professional kitchen space accessible to
                    everyone with a passion for food and a dream to share it.
                  </p>
                  <p>
                    Whether you're a baker scaling your home operation, a caterer
                    managing multiple events, or an entrepreneur launching a new
                    food product, our space is designed to meet your needs.
                  </p>
                  <p>
                    We celebrate African culinary heritage while embracing all
                    food traditions. Our kitchen is where community meets
                    commerce, where recipes become businesses, and where food
                    entrepreneurs thrive.
                  </p>
                </div>
                <button className="px-6 py-3 bg-[#E15B2E] text-white font-semibold font-primary rounded-lg">
                  Learn More About Us
                </button>
              </div>
            </div>
            <img src={rice} alt="Rice" className="max-w-140 hidden md:block" />
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-6xl mx-auto py-16 ">
            <h2 className="font-poppins font-semibold text-[32px] text-gray-800 mb-2">
              Professional Equipments
            </h2>
            <div className="flex justify-between">
              <p className="font-primary text-gray-500 text-[15px] mb-10">
                Everything you need for professional food production, all
                included in your rental.
              </p>
              <div className="md:block">
                <a
                  href=""
                  className="text-[#2E4D34] flex font-semibold underline"
                >
                  Browse All Equipments{" "}
                  <span className="pl-1">
                    <ArrowRightIcon className="w-4 font-semibold" />
                  </span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {equipments.map((item) => (
                <div
                  key={item.title}
                  className="bg-secondary-light rounded-2xl p-4 md:p-6 shadow-sm flex items-center md:items-start md:flex-col gap-4 md:gap-10"
                >
                  <div className="bg-secondary p-2 rounded w-16 h-16 md:w-auto md:h-auto flex items-center justify-center shrink-0">
                    <span className="text-white md:text-[#8C2A20] text-xl ">
                      {item.icon}
                    </span>
                  </div>
                  <div className="gap-2 flex flex-col">
                    <h3 className="font-poppins font-semibold text-gray-800 text-[15px] md:text-[18px]">
                      {item.title}
                    </h3>
                    <p className="font-primary text-[#1A1A1A] text-[13px] md:text-[16px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 md:hidden">
              <button className="w-full md:w-auto px-8 py-3.5 bg-[#F57C00] text-white font-semibold font-primary rounded-xl">
                Browse all Equipments
              </button>
            </div>
          </div>
        </div>

        <div className="bg-primary-light">
          <div className="max-w-6xl mx-auto py-16 flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-6">
              <span className="self-start px-4 py-2 bg-primary text-white text-[13px] font-semibold font-primary rounded-xl">
                Featured Specialty
              </span>
              <h2 className="font-poppins font-semibold text-[40px] text-gray-800 leading-tight">
                Professional Bakery Suite
              </h2>
              <p className="font-primary text-[16px] text-gray-600 max-w-2xl">
                Transform your baking passion into a thriving business with our
                state-of-the-art commercial bakery facilities. From artisan
                breads to wedding cakes, we have everything you need to scale
                your operations.
              </p>
            </div>

            {/* Image cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Grill card */}
              <div
                className="relative rounded-2xl overflow-hidden min-h-80 flex items-end"
                style={{
                  backgroundImage: `url(${grill})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "490px",
                }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="relative z-10 p-6 text-white">
                  <h4 className="font-poppins font-semibold text-[20px]">
                    Commercial-Grade Equipment
                  </h4>
                  <p className="font-primary text-[16px] text-white/80 mt-1">
                    Double-deck ovens with steam injection for perfect crusts
                  </p>
                </div>
              </div>

              {/* Bread card */}
              <div
                className="relative rounded-2xl overflow-hidden min-h-80 flex items-end"
                style={{
                  backgroundImage: `url(${bread})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "490px",
                }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="relative z-10 p-6 text-white">
                  <h4 className="font-poppins font-semibold text-[20px]">
                    Artisan Baking Space
                  </h4>
                  <p className="font-primary text-[16px] text-white/80 mt-1">
                    Dedicated proofing racks and prep surfaces for every bake
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center gap-12">
            <img
              src={sieve}
              alt="Bakery sieve"
              className="w-full md:w-1/2 rounded-2xl object-cover"
            />
            <div className="flex flex-col gap-6 flex-1">
              <h2 className="font-poppins font-semibold text-[40px] text-gray-800 leading-tight">
                Why Our Bakery Suite Stands Out
              </h2>
              <div className="flex flex-col gap-4 font-primary text-[16px] text-gray-600">
                <p>
                  We understand the unique challenges bakers face when
                  transitioning from home kitchens to commercial production.
                  That's why we've invested in creating a dedicated bakery space
                  that goes beyond basic equipment. Our bakery suite features
                  climate-controlled environments, specialized proofing
                  cabinets, and professional-grade ovens that deliver consistent
                  results every single time.
                </p>
                <p>
                  Whether you're perfecting your sourdough starter, scaling a
                  wedding cake business, or preparing for farmers market sales,
                  our bakery provides the professional environment you need
                  without the overwhelming overhead costs of owning your own
                  facility.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary-light">
          <div className="max-w-6xl mx-auto py-16 gap-6 flex flex-col">
            <h2 className="font-poppins font-semibold text-[32px] text-gray-800">
              Specialized Bakery Equipments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: "Professional Deck Ovens",
                  desc: "Double-deck commercial ovens with precise temperature control for perfect baking.",
                  icon: "oven",
                },
                {
                  title: "Commercial Mixers",
                  desc: "20-quart and 60-quart planetary mixers for doughs, batters, and more.",
                  icon: "coffee_maker",
                },
                {
                  title: "Proofing Cabinet",
                  desc: "Climate-controlled proofing cabinet for consistent bread and pastry rising.",
                  icon: "kitchen",
                },
                {
                  title: "Baking Tools & Molds",
                  desc: "Extensive collection of pans, molds, piping bags, and specialty tools.",
                  icon: "bakery_dining",
                },
                {
                  title: "Precision Scales",
                  desc: "Commercial-grade digital scales for accurate ingredient measurement.",
                  icon: <Scale />,
                },
                {
                  title: "Cooling & Prep Stations",
                  desc: "Stainless steel work tables and cooling racks for production efficiency.",
                  icon: <ChefHatIcon />,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-sm flex items-center md:items-start md:flex-col gap-4 md:gap-10"
                >
                  <div className="bg-secondary p-2 rounded w-16 h-16 md:w-auto md:h-auto flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#8C2A20] text-[28px]">
                      {item.icon}
                    </span>
                  </div>
                  <div className="gap-2 flex flex-col">
                    <h3 className="font-poppins font-semibold text-gray-800 text-[15px] md:text-[18px]">
                      {item.title}
                    </h3>
                    <p className="font-primary text-[#1A1A1A] text-[13px] md:text-[16px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-primary-light">
          <div className="max-w-6xl mx-auto py-16 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="font-poppins font-semibold text-[32px] text-gray-800">
                Certified & Compliant
              </h2>
              <p className="font-primary text-gray-500 text-[15px]">
                Our kitchen meets all local and state requirements for commercial
                food production
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { img: health, badge: badgeGreen, title: "Health Department Approved", desc: "HD-2024-5678" },
                { img: food, badge: badgeOrange, title: "Food Safety Certified", desc: "FSC-A1234" },
                { img: fire, badge: badgeGreen, title: "Fire Safety Compliant", desc: "FS-COM-2024" },
                { img: HACCP, badge: badgeOrange, title: "HACCP Certified", desc: "HACCP-12345" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
                  {/* Image + badge */}
                  <div className="relative">
                    <img src={item.img} alt={item.title} className="w-full  object-cover" />
                    <img
                      src={item.badge}
                      alt="badge"
                      className="absolute top-0 right-0.5 w-12 h-12 object-contain"
                    />
                  </div>
                  {/* Write-up */}
                  <div className="p-4 flex flex-col gap-2">
                    <h4 className="font-poppins font-semibold text-[16px] text-gray-800">{item.title}</h4>
                    <p className="font-primary text-[12px] text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-6xl mx-auto py-16  flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="font-poppins font-semibold text-[40px] text-gray-800 leading-tight">See The Space</h2>
                <p className="font-primary text-[16px] text-gray-500">Tour our kitchen through these photos</p>
              </div>
              <a href="" className="flex items-center underline gap-1 text-[#579A62] font-semibold font-primary text-[15px] shrink-0">
                View Full Gallery
                <ArrowRightIcon className="w-4" />
              </a>
            </div>

            {/* Image grid: long left, inner + inner2 stacked right */}
            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <img src={long} alt="Kitchen interior" className="w-full h-full object-cover rounded-2xl" />
              <div className="flex flex-col gap-4">
                <img src={inner} alt="Kitchen inner view" className="w-full object-cover rounded-2xl flex-1" />
                <img src={inner2} alt="Kitchen inner view 2" className="w-full object-cover rounded-2xl flex-1" />
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#f5e5d0" }}>
          <div className="max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Left — headline + CTA */}
            <div className="flex flex-col gap-6 flex-1">
              <h2
                className="font-poppins font-semibold text-[40px] leading-tight"
                style={{ color: "#2b2b2b" }}
              >
                Ready to book the kitchen?
              </h2>
              <p className="font-primary text-[16px] text-gray-600 max-w-sm">
                See our flexible pricing options and reserve your time slot today
              </p>
              <button
                className="self-start px-8 py-3.5 rounded-xl font-semibold font-primary text-white text-[16px]"
                style={{ backgroundColor: "#ff6b3d" }}
              >
                View Pricing & Book now
              </button>
            </div>

            {/* Right — two overlapping thumbnails */}
            <div className="relative flex-1 h-72 md:h-80 hidden md:block">
              <img
                src={inner}
                alt="Kitchen view 1"
                className="absolute w-68 h-48 object-cover rounded-2xl shadow-lg border-3 border-white"
                style={{ top: 0, right: "5%" }}
              />
              <img
                src={inner2}
                alt="Kitchen view 2"
                className="absolute w-68 h-48 object-cover rounded-2xl shadow-xl border-3 border-white"
                style={{ bottom: 0, left: "5%" }}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
