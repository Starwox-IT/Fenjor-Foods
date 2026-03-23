import React from "react";
import PricingBookingHero from "./PricingBookingHero/PricingBookingHero";
import PricingOptions from "./PricingOptions/PricingOptions";
import HowBooking from "./HowBooking/HowBooking";
import RequestBooking from "./RequestBooking/RequestBooking";
import FrequestlyAsked from "./FrequestlyAsked/FrequestlyAsked";

const PricingBooking = () => {
  return (
    <div>
        <PricingBookingHero />
        <PricingOptions />
        <HowBooking />
        <RequestBooking />
        <FrequestlyAsked />
    </div>
  )
};

export default PricingBooking;
