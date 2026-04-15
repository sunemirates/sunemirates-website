import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Equipments from "./pages/Equipments";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";

// Additional pages
import Feedback from "./pages/Feedback";

import LocationMap from "./pages/LocationMap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";

// Product detail pages
import StainlessSteel from "./pages/StainlessSteel";
import MildSteel from "./pages/MildSteel";
import MachineShop from "./pages/MachineShop";
import PreFabrication from "./pages/PreFabrication";
import SurfaceTreatment from "./pages/SurfaceTreatment";
import FinishingActivities from "./pages/FinishingActivities";

// Admin
import AdminDashboard from "./pages/admin/AdminDashboard";

import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>

      {/* Main Layout */}
      <Route path="/" element={<Layout />}>

        {/* Main Pages */}
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
        <Route path="clients" element={<Clients />} />
        <Route path="equipments" element={<Equipments />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<ContactUs />} />

        {/* Extra Pages */}
        <Route path="feedback" element={<Feedback />} />
        <Route path="sitemap" element={<Sitemap />} />
        <Route path="locationmap" element={<LocationMap />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="disclaimer" element={<Disclaimer />} />

        {/* Products Pages */}
        <Route path="stainless-steel" element={<StainlessSteel />} />
        <Route path="mild-steel" element={<MildSteel />} />
        <Route path="machine-shop" element={<MachineShop />} />
        <Route path="pre-fabrication" element={<PreFabrication />} />
        <Route path="surface-treatment" element={<SurfaceTreatment />} />
        <Route path="finishing-activities" element={<FinishingActivities />} />

        {/* 404 Page */}
        <Route path="*" element={<PageNotFound />} />

      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboard />} />

    </Routes>
  );
}

export default App;