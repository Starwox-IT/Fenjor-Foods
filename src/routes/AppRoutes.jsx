import React from 'react'
import { Route, Routes } from "react-router-dom";
import MainLayout from '../components/Layout/MainLayout';
import Home from '../pages/Home/Home';
import PricingBooking from '../pages/PricingBooking/PricingBooking';
import AboutUs from '../pages/AboutUs/AboutUs';
import Kitchen from '../pages/Kitchen/Kitchen';
import Gallery from '../pages/Gallery/Gallery';
import Contact from '../pages/Contact/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/the-kitchen" element={<div className="p-10 text-center text-gray-500">The Kitchen — coming soon</div>} />
        <Route path="/pricing-booking" element={<div className="p-10 text-center text-gray-500">Pricing & Booking — coming soon</div>} />
        <Route path="/gallery" element={<div className="p-10 text-center text-gray-500">Gallery — coming soon</div>} />
        <Route path="/about" element={<div className="p-10 text-center text-gray-500">About Us — coming soon</div>} />
        <Route path="/contact" element={<div className="p-10 text-center text-gray-500">Contact — coming soon</div>} />
      </Route>
    </Routes>
  )
}

export default AppRoutes