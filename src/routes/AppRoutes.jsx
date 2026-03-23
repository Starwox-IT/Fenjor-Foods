import React from 'react'
import { Route, Routes } from "react-router-dom";
import MainLayout from '../components/Layout/MainLayout';
import Home from '../pages/Home/Home';
import Kitchen from '../pages/Kitchen/Kitchen';
import Gallery from '../pages/Gallery/Gallery';
import Contact from '../pages/Contact/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/the-kitchen" element={<Kitchen />} />
        <Route path="/pricing-booking" element={<div className="p-10 text-center text-gray-500">Pricing & Booking — coming soon</div>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<div className="p-10 text-center text-gray-500">About Us — coming soon</div>} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes