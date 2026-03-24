import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/equipments", label: "Equipments" },
    { path: "/clients", label: "Clients" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div className="header-contact">
            <a href="tel:+97167481646">
              <span>☎</span> +971-6-7481646
            </a>
            <a href="mailto:sales@sunemirates.com">
              <span>✉</span> sales@sunemirates.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="logo">
            <img 
              src="/images/Common/logo.jpeg" 
              alt="Sun Emirates" 
              title="Sun Emirates Mechanical Works LLC"
            />
            <div className="logo-text">
              Sun <span>Emirates</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="main-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => isActive ? "active" : ""}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            {/* Mobile Menu Toggle */}
            <div 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
