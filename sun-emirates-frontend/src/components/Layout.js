import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import WhatsAppButton from "./WhatsAppButton";   // Import WhatsApp component

const Layout = () => {
  return (
    <div>
      <Header />

      <Breadcrumb />

      <main className="page-container">
        <Outlet />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;