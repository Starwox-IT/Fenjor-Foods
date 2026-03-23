import React, { useState } from "react";
import contactHero from "../../assets/contactHero.png";
import formImg from "../../assets/inner2.png";
import igThumb1 from "../../assets/bread.png";
import igThumb2 from "../../assets/food.png";
import igThumb3 from "../../assets/grill.png";
import igThumb4 from "../../assets/rice.png";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  ChevronDown,
  Instagram,
  InstagramIcon,
} from "lucide-react";

const cards = [
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Our Phone Numbers",
    desc: "Main: (902) 555-0100",
    lines: ["Others: (902) 555-0100, (902) 555-0100"],
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    desc: "hello@flenjorfoods.com",
    lines: ["We respond within 24 hours"],
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Address",
    desc: "3 stores across Halifax & Dartmouth",
    lines: ["Get Directions"],
    link: "https://maps.google.com",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Kitchen Hours",
    desc: "Daily: 6am – 10pm",
    lines: ["Book your preferred time"],
  },
];

const Contact = () => {
  return (
    <div>
      <div className="w-full ">
        <div
          className="flex items-end md:py-26 px-6 text-white"
          style={{
            backgroundImage: `url(${contactHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "444px",
          }}
        >
          <div className="w-full max-w-6xl mx-auto">
            <div className="w-full max-w-125 flex flex-col items-start">
              <h1 className="font-semibold text-[40px] font-poppins">
                Get in Touch
              </h1>
              <p className="text-[15px] font-primary">
                We'd love to hear from you. Send us a message or call us and
                we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full max-w-6xl mx-auto py-16">
            <h2 className="font-semibold text-[30px] font-poppins mb-6">
              Contact Information
            </h2>
            {/* Contact card */}
            <div className="flex gap-4">
              {cards.map(({ icon, title, desc, lines, link }) => (
                <div
                  key={title}
                  className="flex-1 border border-gray-200 rounded-xl p-5 flex flex-col gap-3 items-center text-center"
                >
                  <div className="text-[#E15B2E] flex items-center justify-center rounded-full w-10 h-10 bg-[#FDF5EF]">
                    {icon}
                  </div>
                  <h3 className="font-poppins text-[18px] font-semibold text-[#1A1A1A]">
                    {title}
                  </h3>
                  {desc && (
                    <p className="font-primary text-[14px] text-gray-700">
                      {desc}
                    </p>
                  )}
                  {lines.map((line) =>
                    link ? (
                      <a
                        key={line}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="font-primary text-sm text-[#E15B2E] underline"
                      >
                        {line}
                      </a>
                    ) : (
                      <p
                        key={line}
                        className="font-primary text-sm text-gray-500"
                      >
                        {line}
                      </p>
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* contact form */}

        {/* Follow us section */}
        <div className="w-full bg-white py-16">
          <div className="max-w-6xl mx-auto  flex flex-col items-center gap-8">
            {/* Heading */}
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex bg-[#F4F9F5] rounded-full p-4 ">
                <Instagram  className="w-10 h-10 text-[#2E4D34]"/>
              </div>
              <h2 className="font-poppins font-bold text-[32px] text-gray-900">
                Follow us on Instagram
              </h2>
              <div className="flex w-full justify-between">
                <p className="font-primary flex items-center text-[16px] text-gray-800">
                  Join our community @flenjorfoods for daily updates, new products, and customer stories
                </p>
                {/* CTA */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#579A62] text-white font-semibold font-primary px-7 py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                  Follow @Flenjorfoods
                </a>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-between gap-4 w-full">
              {[igThumb1, igThumb2, igThumb3, igThumb4].map((src, i) => (
                <a
                  key={i}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative w-screen h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={src}
                    alt={`Instagram post ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <Instagram className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
