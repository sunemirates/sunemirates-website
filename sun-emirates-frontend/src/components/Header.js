import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

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

  const headerClass = `header${isScrolled || !isHome ? ' header-scrolled' : ''}${isHome ? ' header-home' : ''}`;

  return (
    <header className={headerClass}>
      <div className="header-main">
        <div className="container">

          {/* LOGO */}
          <Link to="/" className="logo" onClick={handleLinkClick}>
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
          <nav className="main-nav" ref={menuRef}>
            <ul className={`nav-list ${mobileMenuOpen ? "open" : ""}`}>
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

            {/* MOBILE MENU TOGGLE - Hamburger icon */}
            <button
              className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              {!mobileMenuOpen ? (
                <span className="hamburger-icon">☰</span>
              ) : (
                <span className="close-icon">✕</span>
              )}
            </button>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;