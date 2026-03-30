import React, { useState } from 'react';

const Equipments = () => {
  const [viewMode, setViewMode] = useState('table');

  const equipmentData = [
    {
      category: "Welding Equipment",
      items: [
        { name: "Welding Machines - SMAW Rectifier", model: "400 Amps", capacity: "8 Nos", description: "Shielded Metal Arc Welding Rectifier" },
        { name: "Welding Machines - TIG", model: "400 Amps", capacity: "4 Nos", description: "Tungsten Inert Gas Welding Machine" }
      ]
    },
    {
      category: "Machining Equipment",
      items: [
        { name: "Iron Worker", model: "60 Ton", capacity: "1 No", description: "Hydraulic iron worker machine" },
        { name: "Center Lathe", model: "Standard", capacity: "1 No", description: "Precision turning operations" },
        { name: "Pipe Bending Machine", model: "1/2 in - 2 in", capacity: "1 No", description: "Pipe bending for various sizes" },
        { name: "Radial Drilling Machine", model: "upto 50mm dia", capacity: "1 No", description: "Heavy duty drilling operations" },
        { name: "Pillar Type Drilling Machine", model: "upto 32mm Dia", capacity: "2 Nos", description: "Precision drilling operations" },
        { name: "Magnetic Drilling Machines", model: "Standard", capacity: "2 Nos", description: "Magnetic base drilling equipment" }
      ]
    }
  ];

  // Image paths from public/images/cardview folder with titles
  const cardViewItems = [
    { image: "/images/cardview/welding machine.jpeg", title: "Welding Machine - SMAW Rectifier" },
    { image: "/images/cardview/lathe machine.jpeg", title: "Center Lathe Machine" },
    { image: "/images/cardview/bending machine.jpg", title: "Pipe Bending Machine" },
    { image: "/images/cardview/drilling machine.jpeg", title: "Radial Drilling Machine" },
    { image: "/images/cardview/laser cutting machine.jpg", title: "Laser Cutting Machine" },
    { image: "/images/Common/paintbooth.png", title: "Paint Booth" }
  ];

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <h1>Our Equipment</h1>
          <p>State-of-the-art fabrication machinery and facilities</p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* Toggle */}
          <div className="text-center mb-40">
            <div style={{ display: 'inline-flex', gap: '10px' }}>
              <button
                className={`btn ${viewMode === 'table' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setViewMode('table')}
              >
                TABLE VIEW
              </button>

              <button
                className={`btn ${viewMode === 'card' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setViewMode('card')}
              >
                CARD VIEW
              </button>
            </div>
          </div>

          {/* TABLE VIEW */}
          {viewMode === 'table' && (
            <div>
              {equipmentData.map((category, i) => (
                <div key={i} style={{ marginBottom: "40px" }}>
                  <h3 style={{
                    background: "#222",
                    color: "#fff",
                    padding: "15px"
                  }}>
                    {category.category}
                  </h3>

                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Capacity</th>
                        <th>Description</th>
                      </tr>
                    </thead>

                    <tbody>
                      {category.items.map((item, j) => (
                        <tr key={j}>
                          <td><b>{item.name}</b></td>
                          <td>{item.model}</td>
                          <td>{item.capacity}</td>
                          <td>{item.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}

          {/* CARD VIEW */}
          {viewMode === 'card' && (
            <div className="equipment-grid">
              {cardViewItems.map((item, index) => (
                <div key={index} className="equipment-card">

                  <div className="equipment-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        e.target.src = "/images/Common/no-image.png"; // fallback
                      }}
                    />
                  </div>

                  <div className="equipment-title">
                    {item.title}
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Equipments;
