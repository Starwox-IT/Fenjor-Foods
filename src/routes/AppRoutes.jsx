import React from 'react'
import { Route, Routes } from "react-router-dom";
import MainLayout from '../components/Layout/MainLayout';
import Home from '../pages/Home/Home';
import Kitchen from '../pages/Kitchen/Kitchen';
import Gallery from '../pages/Gallery/Gallery';
import Contact from '../pages/Contact/Contact';
import PricingBooking from '../pages/PricingBooking/PricingBooking';
import AboutUs from '../pages/AboutUs/AboutUs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/the-kitchen" element={<Kitchen />} />
        <Route path="/pricing-booking" element={<PricingBooking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes