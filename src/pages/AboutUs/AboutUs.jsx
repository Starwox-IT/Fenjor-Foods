import React from "react";
import AboutHero from "./AboutHero/AboutHero";
import AboutMission from "./AboutMission/AboutMission";
import AboutKitchen from "./AboutKitchen/AboutKitchen";
import AboutJourney from "./AboutJourney/AboutJourney";
import AboutValues from "./AboutValues/AboutValues";
import AboutStore from "./AboutStore/AboutStore";
import AboutCommunity from "./AboutCommunity/AboutCommunity";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <AboutMission />
      <AboutKitchen />
      <AboutJourney />
      <AboutValues />
      <AboutStore />
      <AboutCommunity />
    </div>
  );
};

export default AboutUs;
