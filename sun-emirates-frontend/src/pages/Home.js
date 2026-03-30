import React from "react";
import { Link } from "react-router-dom";
import { FaCut, FaCogs, FaIndustry, FaTools, FaFire, FaDraftingCompass } from "react-icons/fa";
import Chatbot from "../components/Chatbot";

const clients = [
  { src: "/images/Clients/Clients1.png", alt: "KHANSAHEB" },
  { src: "/images/Clients/Clients2.png", alt: "AL Basti & Muktha LLC" },
  { src: "/images/Clients/Clients3.png", alt: "ThyssenKrupp" },
  { src: "/images/Clients/Clients4.png", alt: "MEGARME" },
  { src: "/images/Clients/Clients5.png", alt: "New Trade Links LLC" },
  { src: "/images/Clients/Clients6.png", alt: "Ferrotech International Fze" },
  { src: "/images/Clients/Clients7.png", alt: "Al Ghandi Electronics" },
  { src: "/images/Clients/Clients8.png", alt: "Hi-Tec" },
  { src: "/images/Clients/Clients9.png", alt: "Somec-Sharaf" },
  { src: "/images/Clients/Clients10.png", alt: "STADLERS" },
  { src: "/images/Clients/Clients11.png", alt: "AL REYAMI" },
  { src: "/images/Clients/Clients12.png", alt: "Dutco Balfour Beatty LLC" },
  { src: "/images/Clients/Clients13.png", alt: "AL REYAMI INTERIORS" }
];

const services = [
  {
    title: "Steel Fabrication",
    description: "Custom steel fabrication for structural, architectural, and industrial applications with precision engineering.",
    icon: "⚙"
  },
  {
    title: "Structural Works",
    description: "Complete structural steel solutions including beams, columns, trusses, and complex metal structures.",
    icon: "🏗"
  },
  {
    title: "Pipe Fabrication",
    description: "Professional pipe fabrication and piping systems for oil, gas, water, and industrial applications.",
    icon: "🔧"
  },
  {
    title: "Welding Works",
    description: "Certified welding services including MIG, TIG, ARC, and submerged arc welding for various metals.",
    icon: "🔥"
  },
  {
    title: "Surface Treatment",
    description: "Comprehensive surface treatment including sand blasting, shot blasting, and protective coatings.",
    icon: "🛡"
  },
  {
    title: "Machine Shop",
    description: "Full machine shop capabilities for precision machining, drilling, cutting, and custom fabrication.",
    icon: "⚙"
  }
];

const stats = [
  { number: "19+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Skilled Workers" },
  { number: "100%", label: "Quality Assurance" }
];

function Home() {
  return (
    <div>
    {/* HERO SECTION */}
<section className="hero" style={{ backgroundImage: 'url(/images/Banner/pagehome.png)' }}>
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <h1>Engineering Excellence.</h1>
    <h1>Built to Precision.</h1>

    <p className="hero-sub">
      Delivering Quality Fabrication Solutions.
    </p>
    <p className="hero-sub">
      Your Trusted Partner.
    </p>

    <div className="hero-buttons">
      <Link to="/contact" className="btn btn-primary">
        Request Quote
      </Link>
      <Link to="/services" className="btn btn-light">
        Explore Services
      </Link>
    </div>
  </div>
</section>

{/* SERVICES BAR */}
<section className="services-bar">
  <div className="services-bar-container">
    <div className="service-item">
      <span className="service-icon">✂️</span>
      <span>Laser Cutting</span>
    </div>
    <div className="service-item">
      <span className="service-icon">⚙️</span>
      <span>Machining</span>
    </div>
    <div className="service-item">
      <span className="service-icon">🔩</span>
      <span>Fabrication</span>
    </div>
    <div className="service-item">
      <span className="service-icon">🔥</span>
      <span>Welding</span>
    </div>
    <div className="service-item">
      <span className="service-icon">📐</span>
      <span>Sheet Metal</span>
    </div>
    <div className="service-item">
      <span className="service-icon">🛠️</span>
      <span>Engineering</span>
    </div>
  </div>
</section>

      {/* About Section */}
      <section className="about-section-modern">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Reliable Mechanical Works & Fabrication Solutions</h2>
              <p>
                Sun Emirates Mechanical Works LLC is a trusted name in steel fabrication, 
                delivering precision-engineered solutions for construction, marine, oil & gas, 
                and industrial sectors across the UAE since 2007.
              </p>
              <p>
                Our state-of-the-art facility in Ajman is equipped with advanced machinery 
                and staffed by experienced professionals committed to quality, safety, and 
                timely project delivery.
              </p>
              <Link to="/about" className="btn btn-secondary">
                Learn More About Us
              </Link>
            </div>
            <div className="about-image-wrapper">
              <img src="/images/Common/page.png" alt="Sun Emirates Facility" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Our Core Services</h2>
            <p className="text-light">
              Comprehensive mechanical and fabrication solutions tailored to your requirements.
            </p>
          </div>
          <div className="services-card-grid">
            <div className="service-card-item">
              <div className="service-card-icon"><FaCut /></div>
              <h3>Laser Cutting</h3>
              <p>High-precision cutting solutions</p>
            </div>
            <div className="service-card-item">
              <div className="service-card-icon"><FaCogs /></div>
              <h3>Machining</h3>
              <p>Accurate machinery and fabrication capability</p>
            </div>
            <div className="service-card-item">
              <div className="service-card-icon"><FaIndustry /></div>
              <h3>Fabrication</h3>
              <p>Custom metal fabrication for every need</p>
            </div>
            <div className="service-card-item">
              <div className="service-card-icon"><FaTools /></div>
              <h3>Press Brake Works</h3>
              <p>Precision bending solutions</p>
            </div>
            <div className="service-card-item">
              <div className="service-card-icon"><FaFire /></div>
              <h3>Welding Services</h3>
              <p>Reliable welding applications</p>
            </div>
            <div className="service-card-item">
              <div className="service-card-icon"><FaDraftingCompass /></div>
              <h3>Engineering Solutions</h3>
              <p>Custom project support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Preview */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Our Facilities</h2>
            <p className="text-light">
              State-of-the-art equipment and manufacturing capabilities
            </p>
          </div>
          <div className="equipment-grid">
            <div className="equipment-card">
              <div className="equipment-info">
                <h3>Steel Grating</h3>
                <p>Industrial grating and floor systems</p>
              </div>
            </div>
            <div className="equipment-card">
              <div className="equipment-info">
                <h3>Pipe Fabrication</h3>
                <p>Custom pipe systems and supports</p>
              </div>
            </div>
            <div className="equipment-card">
              <div className="equipment-info">
                <h3>Platform Structures</h3>
                <p>Industrial platforms and walkways</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-40">
            <Link to="/equipments" className="btn btn-outline">
              View All Equipment
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Our Clients</h2>
            <p className="text-light">
              Trusted by leading companies across the UAE
            </p>
          </div>
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="client-logo">
                <img 
                  src={client.src} 
                  alt={client.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-40">
            <Link to="/clients" className="btn btn-outline">
              View All Clients
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-dark">
        <div className="container">
          <div className="text-center">
            <h2>Ready to Start Your Project?</h2>
            <p className="text-light mb-30">
              Contact us today for a free consultation and competitive quote
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      
    </div>
  );
}

export default Home;