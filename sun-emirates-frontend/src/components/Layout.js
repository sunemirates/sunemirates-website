import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import WhatsAppButton from "./WhatsAppButton";
import Chatbot from "./Chatbot";   // Import Chatbot

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
      <WhatsAppButton />
      <Chatbot />

    </div>
  );
};

export default Layout;