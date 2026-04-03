import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import Chatbot from "./Chatbot";   // Import Chatbot
import WhatsApp from "./WhatsApp"; // Import WhatsApp

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      {!isMobile && <Chatbot />}

    </div>
  );
};

export default Layout;