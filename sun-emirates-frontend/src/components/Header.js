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
      <div className="header-main">
        <div className="container">

          {/* LOGO */}
          <Link to="/" className="logo">
            <img 
              src="/images/Common/logo.jpeg" 
              alt="Logo" 
              className="logo-img"
            />

            <div className="logo-text">
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
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* MOBILE */}
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