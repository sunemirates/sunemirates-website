import React, { useState } from 'react';

const Clients = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const clientList = [
    { name: "KHANSAHEB CIVIL ENGG. L.L.C", category: "Construction",  },
    { name: "Blueprint Emirates Interiors L.L.C", category: "Interior", year: "2022" },
    { name: "HTS Interior Design L.L.C", category: "Interior", year: "2023" },
    { name: "Unger Steel Fabrication FZE", category: "Engineering", year: "2021" },
    { name: "Arab Gulf Equipment CO. L.L.C", category: "Industrial", year: "2022" },
    { name: "Engineering office", category: "Engineering", year: "2020" },
    { name: "Human Space Office Furnishing L.L.C.", category: "Interior", year: "2023" },
    { name: "Golden Arch Décor L.L.C", category: "Interior", year: "2021" },
    { name: "EMIRATES SUN CONTRACTING CO. LLC", category: "Construction", year: "2022" },
    { name: "PREZON GLASS METAL FIXING LLC", category: "Construction", year: "2023" },
    { name: "AL QASR AL AMIR TECH. CONT. LLC", category: "Construction", year: "2021" },
    { name: "AL FUTTAIM ENGINEERING & TECHNOLOGIES", category: "Engineering", year: "2022" },
    { name: "AQUINOR TECHNICAL SERVICES LLC", category: "Services", year: "2023" },
    { name: "ARABIAN COMPANY L.L.C", category: "Trading", year: "2020" },
    { name: "Modena Industries LLC", category: "Industrial", year: "2021" },
    { name: "BIOLINX LAB SYSTEMS LLC", category: "Healthcare", year: "2022" },
    { name: "SECURE SHOPFRONT & PARTITIONS LLC", category: "Interior", year: "2023" },
    { name: "VINAYAK INTERIORS LLC", category: "Interior", year: "2022" },
    { name: "OFFICE POWER SOLUTIONS L.L.C", category: "Technology", year: "2021" },
    { name: "BLUEGATE ELECTROMECHANICAL WORKS LLC", category: "Engineering", year: "2023" },
    { name: "SSK BUILDING CONTRACTING LLC", category: "Construction", year: "2022" },
    { name: "ENOVA", category: "Energy", year: "2021" },
    { name: "AURA JOINERY OFFICE FURNITURE MANUFACTURING LLC", category: "Interior", year: "2023" },
    { name: "BRIGHTWAY TECHNICAL SERVICES", category: "Services", year: "2022" },
    { name: "MFIT INTERIOR DECORATION LLC", category: "Interior", year: "2021" },
    { name: "MOSTONE TECH. SERVICES LLC", category: "Services", year: "2023" },
    { name: "DUTCO INTERIORS", category: "Interior", year: "2022" },
    { name: "LANDMARK GROUP", category: "Retail", year: "2021" },
    { name: "SHAPOORJI PALLONJI", category: "Construction", year: "2020" },
    { name: "ENGCORE TECHNICAL SERVICES LLC", category: "Services", year: "2023" },
    { name: "CITY GATE REAL ESTATE", category: "Real Estate", year: "2022" },
    { name: "INC GROUP", category: "Industrial", year: "2021" },
    { name: "PACIO FZC", category: "Trading", year: "2023" }
  ];

  const clientCategories = [
    { name: "Construction", count: 5 },
    { name: "Engineering", count: 1 },
    { name: "Marine", count: 1 },
    { name: "Industrial", count: 1 },
    { name: "Trading", count: 1 },
    { name: "Technology", count: 1 },
    { name: "Railway", count: 1 },
    { name: "Interior", count: 1 },
    { name: "Electronics", count: 1 }
  ];

  // Get unique categories from clientList
  const categories = [...new Set(clientList.map(client => client.category))];

  // Filter clients based on selected category
  const filteredClients = selectedCategory === 'All' 
    ? clientList 
    : clientList.filter(client => client.category === selectedCategory);

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      'Construction': '#ff7a00',
      'Engineering': '#2b2b2b',
      'Interior': '#4a90d9',
      'Industrial': '#27ae60',
      'Trading': '#9b59b6',
      'Technology': '#e74c3c',
      'Services': '#1abc9c',
      'Healthcare': '#e91e63',
      'Retail': '#f39c12',
      'Real Estate': '#34495e',
      'Energy': '#00bcd4',
      'Marine': '#006064',
      'Electronics': '#673ab7'
    };
    return colors[category] || '#ff7a00';
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Our Clients</h1>
          <p>Trusted by leading companies across the UAE</p>
        </div>
      </div>

     
      {/* Client List - Unique Card Design */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Our Client List</h2>
            <p className="text-light">
              Complete list of companies we have worked with
            </p>
          </div>

          {/* Category Filter */}
          <div className="client-category-filter">
            <button 
              className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Client Cards Grid */}
          <div className="client-cards-grid">
            {filteredClients.map((client, index) => (
              <div key={index} className="client-card">
                <div className="client-card-header">
                  <span className="client-number">{String(filteredClients.indexOf(client) + 1).padStart(2, '0')}</span>
                  <span 
                    className="client-category-badge"
                    style={{ backgroundColor: getCategoryColor(client.category) }}
                  >
                    {client.category}
                  </span>
                </div>
                <div className="client-card-body">
                  <h3 className="client-name">{client.name}</h3>
                </div>
                <div className="client-card-footer">
                  <span className="client-status">
                    <span className="status-dot"></span>
                    Active Partner
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Industries We Serve</h2>
          </div>
          <div className="services-grid">
            {clientCategories.map((category, index) => (
              <div key={index} className="service-card">
                <div className="service-card-icon">🏢</div>
                <h3>{category.name}</h3>
                <p>{category.count} Client{category.count > 1 ? 's' : ''}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Why Clients Choose Us</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Quality Assurance</h3>
              <p>
                Quality mangement system certified company with rigorous quality control 
                processes ensuring consistent excellence in every project.
              </p>
            </div>
            <div className="service-card">
              <h3>Technical Expertise</h3>
              <p>
                Over 19 years of combined experience in steel fabrication with 
                skilled engineers and certified welders.
              </p>
            </div>
            <div className="service-card">
              <h3>On-Time Delivery</h3>
              <p>
                Commitment to project timelines with efficient production 
                planning and execution capabilities.
              </p>
            </div>
            <div className="service-card">
              <h3>Competitive Pricing</h3>
              <p>
                Cost-effective solutions without compromising on quality, 
                providing excellent value for investment.
              </p>
            </div>
            <div className="service-card">
              <h3>Safety Standards</h3>
              <p>
                Strict adherence to safety regulations with regular training 
                and compliance audits.
              </p>
            </div>
            <div className="service-card">
              <h3>Customer Support</h3>
              <p>
                Dedicated project management and communication for seamless 
                coordination throughout the project lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
