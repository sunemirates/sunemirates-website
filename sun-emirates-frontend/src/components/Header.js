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
            <div>
              <h1 className="logo-title">SUN EMIRATES</h1>
              <p className="logo-subtitle">MECHANICAL WORKS L.L.C.</p>
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