import React from 'react';

const Services = () => {
  const services = [
    'Sheet/ Plate Shearing and Bending',
    'Cutting of Plates',
    'Rolling of Cones',
    'Shuttering & Manholes',
    'Bending of Pipes',
    'Blasting and Painting',
    'Onshore and offshore services',

    // ✅ Added services
    'Laser Cutting',
    'Machining',
    'Fabrication',
    'Press Brake',
    'Welding',
    'Custom Engineering'
  ];

  return (
    <div>
      {/* Page Header - Grey Bar */}
      <div className="page-header">
        <div className="container">
          <h1>Services</h1>
          <p>Professional Steel Fabrication Services</p>
        </div>
      </div>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="servicetd">
            <div className="titldv">
              We are specialized in the following services:
            </div>

            {/* ✅ Same bullet style as About.js */}
            <div className="desdv">
              <ul className="features-list">
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;