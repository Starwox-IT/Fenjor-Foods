import React, { useState } from "react";
import galleryHero from "../../assets/galleryHero.png";
import vidThumb from "../../assets/vidThumb.png";
import { ArrowRightIcon } from "lucide-react";
import frame44 from "../../assets/Frame44.png";
import frame55 from "../../assets/Frame55.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";

const GalleryItem = ({ img, className = "", aspect = "aspect-square" }) => (
  <div className={`relative rounded-lg overflow-hidden group ${aspect} ${className}`}>
    <img
      src={img.src}
      alt={img.description}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/65 transition-all duration-300 flex flex-col justify-end p-4">
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="inline-block text-regular font-semibold font-primary bg-primary text-white px-3 py-0.5 rounded mb-2">
          {img.tab}
        </span>
        <p className="text-white text-semibold font-primary text-[26px] leading-snug">
          {img.description}
        </p>
      </div>
    </div>
  </div>
);

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All Photos");

  const tabs = ["All Photos", "Kitchen", "Bakery", "Equipment", "Storage"];

  const images = [
    {
      id: 1,
      src: image1,
      tab: "Kitchen",
      description:
        "Main kitchen area",
    },
    {
      id: 2,
      src: image2,
      tab: "Equipment",
      description: "Oven",
    },
    {
      id: 3,
      src: image7,
      tab: "Storage",
      description:
        "Utensils",
    },
    {
      id: 4,
      src: image6,
      tab: "Equipment",
      description:
        "Cookers",
    },
    {
      id: 5,
      src: image3,
      tab: "Bakery",
      description:
        "Tables",
    },
    {
      id: 6,
      src: image8,
      tab: "Storage",
      description:
        "Kitchen view",
    },
    {
      id: 7,
      src: image4,
      tab: "Equipment",
      description:
        "Oven",
    },
    {
      id: 8,
      src: image5,
      tab: "Storage",
      description:
        "Fridge",
    },
  ];

  return (
    <div>
      <div className="w-full h-full bg-[#F5F5F5]">
        {/* gallery hero */}
        <div
          className="flex items-end md:py-26 px-6 text-white"
          style={{
            backgroundImage: `url(${galleryHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "444px",
          }}
        >
          <div className="w-full max-w-6xl mx-auto">
            <div className="w-full max-w-125 flex flex-col items-start">
              <h1 className="font-semibold text-[40px] font-poppins">
                Kitchen Gallery
              </h1>
              <p className="text-[15px] font-primary">
                Explore our professional kitchen space through photos and video
              </p>
            </div>
          </div>
        </div>

        {/* gallery content */}
        <div className="w-full flex justify-center bg-[#FDF5EF]">
          <div className="max-w-6xl mx-auto w-full py-16">
            <h2 className="font-poppins font-semibold text-[32px] text-gray-800 mb-2">
              Virtual Tour
            </h2>
            <div className="flex justify-between">
              <p className="font-primary text-gray-500 text-[15px] mb-10">
                Take a complete walkthrough of our facility
              </p>
              <div className="md:block">
                <a
                  href=""
                  className="text-[#2E4D34] flex font-semibold underline"
                >
                  Book Now{" "}
                  <span className="pl-1">
                    <ArrowRightIcon className="w-4 font-semibold" />
                  </span>
                </a>
              </div>
            </div>
            <div
              className="relative rounded-2xl w-full max-w-6xl h-[600px] mt-6 bg-cover bg-center"
              style={{ backgroundImage: `url(${vidThumb})` }}
            >
              {/* Write-up overlaid on the background image */}
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h4 className="font-poppins text-[40px] font-semibold">
                  Complete Kitchen Tour - 3:45
                </h4>
                <p className="font-primary text-[16px] text-white/80 mt-3">
                  See every corner of our certified commercial kitchen
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Tab Div */}
        <div className="w-full flex justify-center bg-[#F5F5F5]">
          <div className="max-w-6xl mx-auto w-full py-16">
            
            {/* 5-tab functionality */}
            <div className="flex justify-start mb-8 px-4 py-2 bg-[#E6F2E8] max-w-2xl rounded">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-1 text-[14px] mx-2 rounded font-semibold transition-colors ${
                    activeTab === tab
                      ? "bg-white text-gray-950"
                      : "text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Image grid: 3 cols x 3 rows */}
            {/* Image grid */}
            {activeTab === 'All Photos' ? (
              <div className="grid grid-cols-3 grid-rows-3 gap-4">
                <GalleryItem img={images[0]} className="row-span-2" aspect="aspect-auto" />
                <GalleryItem img={images[1]} />
                <GalleryItem img={images[2]} />
                <GalleryItem img={images[3]} />
                <GalleryItem img={images[4]} />
                <GalleryItem img={images[5]} />
                <GalleryItem img={images[6]} />
                <GalleryItem img={images[7]} />
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {images.filter(img => img.tab === activeTab).map(img => (
                  <GalleryItem key={img.id} img={img} />
                ))}
              </div>
            )}
          </div>
        </div>


            {/* CTA Section */}
        <div style={{ backgroundColor: "#f5e5d0" }}>
          <div className="max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left — headline + CTA */}
            <div className="flex flex-col gap-6 flex-1">
              <h2
                className="font-poppins font-semibold text-[36px] leading-tight"
                style={{ color: "#2b2b2b" }}
              >
                Ready to cook in this Space?
              </h2>
              <p className="font-primary text-[16px] text-gray-600 max-w-sm">
                Book your session and experience the kitchen in person
              </p>
              <button
                className="self-start px-8 py-3.5 rounded-xl font-semibold font-primary text-white text-[16px]"
                style={{ backgroundColor: "#ff6b3d" }}
              >
                Book a Tour or session
              </button>
            </div>

            {/* Right — two overlapping thumbnails */}
            <div className="relative flex-1 h-72 md:h-80 hidden md:block">
              <img
                src={frame44}
                alt="Kitchen view 1"
                className="absolute w-68 h-48 object-cover rounded-2xl shadow-lg "
                style={{ top: 0, right: "5%" }}
              />
              <img
                src={frame55}
                alt="Kitchen view 2"
                className="absolute w-68 h-48 object-cover rounded-2xl shadow-xl "
                style={{ bottom: 0, left: "5%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
