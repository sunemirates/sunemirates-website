import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import Chatbot from "./Chatbot";   // Import Chatbot
import WhatsApp from "./WhatsApp"; // Import WhatsApp

const Layout = () => {
  return (
    <div>

      {/* Website Header */}
      <Header />

      {/* Page Breadcrumb */}
      <Breadcrumb />

      {/* Page Content */}
      <main className="page-container">
        <Outlet />
      </main>

      {/* Website Footer */}
      <Footer />

      {/* Floating Support Buttons */}
      
      <WhatsApp />
      <Chatbot />

    </div>
  );
};

export default Layout;