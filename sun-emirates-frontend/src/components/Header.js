import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/equipments", label: "Equipments" },
    { path: "/clients", label: "Clients" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-main">
        <div className="container">

          {/* LOGO */}
          <Link to="/" className="logo" onClick={handleLinkClick}>
            <img 
              src="/images/Common/logo.jpeg" 
              alt="Logo" 
              className="logo-img"
            />

            <div className={`logo-text ${isHome ? 'home-page' : ''}`}>
              <h2>SUN EMIRATES</h2>
              <span>MECHANICAL WORKS L.L.C.</span>
            </div>
          </Link>

          {/* NAV */}
          <nav className="main-nav">
            <ul className={mobileMenuOpen ? "open" : ""}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "active" : ""
                    }
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* MOBILE MENU TOGGLE */}
            <div
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {!mobileMenuOpen ? (
                <>
                  <span></span>
                  <span></span>
                  <span></span>
                </>
              ) : (
                <span className="close-icon">✕</span>
              )}
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;