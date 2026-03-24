import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Chatbot from "../components/Chatbot";

const banners = [
  {
    src: "/images/Banner/1.jpg",
    title: "Steel Fabrication Experts",
    subtitle: "Quality Structural Works for Industrial Projects"
  },
  {
    src: "/images/Banner/2.jpg",
    title: "Professional Engineering",
    subtitle: "Precision Manufacturing & Fabrication"
  },
  {
    src: "/images/Banner/3.jpg",
    title: "Trusted EPC Partner",
    subtitle: "Serving Leading Companies Across UAE"
  }
];

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-slider">
          {banners.map((banner, index) => (
            <div 
              key={index} 
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img 
                src={banner.src} 
                alt={banner.title}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="hero-content">
                <h1>{banner.title}</h1>
                <p>{banner.subtitle}</p>
                <Link to="/contact" className="btn btn-primary">
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section">
        <div className="container">
          <div className="about-section">
            <div className="about-content">
              <h2>Sun Emirates Mechanical Works LLC</h2>
              <p>
                We are a leading steel fabrication company located in Al Shenaya 
                New Industrial Area, Ajman, U.A.E., established in 2007. With over 
                19 years of experience, we specialize in stainless steel and mild 
                steel fabrication for construction, interior decoration, marine, 
                power, and oil & gas sectors.
              </p>
              <p>
                Our experienced technical team is committed to delivering products 
                on time with the highest quality standards, meeting client 
                specifications and requirements.
              </p>
              <Link to="/about" className="btn btn-secondary">
                Learn More About Us
              </Link>
            </div>
            <div className="about-image">
              <img src="/images/Common/paintbooth.png" alt="Paint Booth" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
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

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Our Services</h2>
            <p className="text-light">
              Comprehensive fabrication solutions for industrial and commercial projects
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-40">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
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
