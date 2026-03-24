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
    },
    {
      category: "Cutting Equipment",
      items: [
        { name: "Disc Cutting Machines", model: "16 in", capacity: "3 Nos", description: "Disc cutting for metal fabrication" },
        { name: "Power Hack saw", model: "12 in", capacity: "1 No", description: "Power hacksaw for cutting" },
        { name: "Hammer Drilling Machine", model: "Hilti", capacity: "3 Nos", description: "Hammer drilling equipment" },
        { name: "Acetylene Gas cutting Sets", model: "Standard", capacity: "7 Nos", description: "Oxy-acetylene gas cutting" },
        { name: "Parallel pug cutting machine", model: "Standard", capacity: "2 Nos", description: "Parallel cutting machine" }
      ]
    },
    {
      category: "Compressors & Surface Treatment",
      items: [
        { name: "Air Compressors", model: "150 Litre", capacity: "2 Nos", description: "150 Litre capacity compressor" },
        { name: "Air Compressors", model: "200 Litre", capacity: "1 No", description: "200 Litre capacity compressor" },
        { name: "Spray paint system", model: "Standard", capacity: "2 Nos", description: "Industrial spray painting" },
        { name: "Bench Grinder", model: "Standard", capacity: "1 No", description: "Stationary grinding machine" },
        { name: "Buffing Machine", model: "12 in", capacity: "2 Nos", description: "Buffing and polishing" },
        { name: "Sanding Machines", model: "Standard", capacity: "8 Nos", description: "Sanding and finishing" },
        { name: "Hand Grinding Machines", model: "Standard", capacity: "25 Nos", description: "Portable angle grinders" }
      ]
    },
    {
      category: "Material Handling",
      items: [
        { name: "Mobile A Frame", model: "2 Ton capacity", capacity: "1 No", description: "Mobile lifting frame" },
        { name: "Pick Up", model: "1.5 Ton - 2 Nos", capacity: "2 Nos", description: "1.5 Ton pick up vehicles" },
        { name: "Pick Up", model: "3 Ton - 1 No", capacity: "1 No", description: "3 Ton pick up vehicle" }
      ]
    },
    {
      category: "Shearing, Bending & Pressing",
      items: [
        { name: "Shearing Machine", model: "8mm capacity - 3 Mtr Long", capacity: "1 No", description: "Sheet metal shearing" },
        { name: "Bending Machine", model: "8mm capacity - 3 Mtr Long", capacity: "1 No", description: "Sheet metal bending" },
        { name: "Hydraulic Pressing Machine", model: "200 Ton", capacity: "2 Nos", description: "Hydraulic pressing operations" },
        { name: "Rolling Machine", model: "3 mm thk x 3 Mtr Long", capacity: "1 No", description: "Plate rolling machine" },
        { name: "Power Pressing Machine", model: "60 Ton - 1 / 120 Ton - 1", capacity: "2 Nos", description: "Power pressing operations" }
      ]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Our Equipment</h1>
          <p>State-of-the-art fabrication machinery and facilities</p>
        </div>
      </div>

      {/* Equipment Section */}
      <section className="section">
        <div className="container">
          {/* View Toggle */}
          <div className="text-center mb-40">
            <div style={{ display: 'inline-flex', gap: '10px' }}>
              <button 
                className={`btn ${viewMode === 'table' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setViewMode('table')}
              >
                Table View
              </button>
              <button 
                className={`btn ${viewMode === 'card' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setViewMode('card')}
              >
                Card View
              </button>
            </div>
          </div>

          {/* Table View */}
          {viewMode === 'table' && (
            <div>
              {equipmentData.map((category, catIndex) => (
                <div key={catIndex} style={{ marginBottom: '40px' }}>
                  <h3 style={{ 
                    backgroundColor: '#2b2b2b', 
                    color: '#fff', 
                    padding: '15px 20px',
                    margin: '0 0 20px 0'
                  }}>
                    {category.category}
                  </h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Equipment Name</th>
                        <th>Model</th>
                        <th>Capacity</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item, itemIndex) => (
                        <tr key={itemIndex}>
                          <td><strong>{item.name}</strong></td>
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

          {/* Card View */}
          {viewMode === 'card' && (
            <div className="equipment-grid">
              {equipmentData.map((category, catIndex) => (
                category.items.map((item, itemIndex) => (
                  <div key={`${catIndex}-${itemIndex}`} className="equipment-card">
                    <div className="equipment-image">
                      <div className="image-placeholder">
                        <span>Image Coming Soon</span>
                      </div>
                    </div>
                    <div className="equipment-info">
                      <h3>{item.name}</h3>
                      <p><strong>Model:</strong> {item.model}</p>
                      <p><strong>Capacity:</strong> {item.capacity}</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Summary Stats */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Equipment Summary</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Number of Units</th>
                <th>Key Equipment</th>
              </tr>
            </thead>
            <tbody>
              {equipmentData.map((category, index) => (
                <tr key={index}>
                  <td><strong>{category.category}</strong></td>
                  <td>{category.items.length} Units</td>
                  <td>{category.items.slice(0, 2).map(i => i.name).join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Equipments;
