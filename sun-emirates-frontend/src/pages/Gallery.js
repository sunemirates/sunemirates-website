import React, { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'workshop', label: 'Workshop' },
    { id: 'fabrication', label: 'Fabrication' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'projects', label: 'Projects' }
  ];

  const galleryItems = [
    // Workshop
    { id: 1, category: 'workshop', image: '/images/MS/IndustrialSheds.jpg', title: 'Main Workshop' },
    { id: 2, category: 'workshop', image: '/images/MS/PlatformStructure.jpg', title: 'Production Floor' },
    { id: 55, category: 'workshop', image: '/images/Clients/IMG_0392.jpg', title: 'Workshop Image' },
    { id: 56, category: 'workshop', image: '/images/Clients/IMG_0394.jpg', title: 'Workshop Image' },
    { id: 57, category: 'workshop', image: '/images/Clients/IMG_0396.jpg', title: 'Workshop Image' },
    { id: 58, category: 'workshop', image: '/images/Clients/IMG_0397.jpg', title: 'Workshop Image' },
    { id: 59, category: 'workshop', image: '/images/Clients/IMG_0398.jpg', title: 'Workshop Image' },
    { id: 60, category: 'workshop', image: '/images/Clients/IMG_0399.jpg', title: 'Workshop Image' },
    { id: 61, category: 'workshop', image: '/images/Clients/IMG_0400.jpg', title: 'Workshop Image' },
    { id: 62, category: 'workshop', image: '/images/Clients/IMG_0401.jpg', title: 'Workshop Image' },
    { id: 63, category: 'workshop', image: '/images/Clients/IMG_0403.jpg', title: 'Workshop Image' },
    { id: 64, category: 'workshop', image: '/images/Clients/IMG_0404.jpg', title: 'Workshop Image' },
    { id: 65, category: 'workshop', image: '/images/Clients/IMG_0405.jpg', title: 'Workshop Image' },
    { id: 66, category: 'workshop', image: '/images/Clients/IMG_0407.jpg', title: 'Workshop Image' },
    { id: 67, category: 'workshop', image: '/images/Clients/IMG_0408.jpg', title: 'Workshop Image' },
    { id: 68, category: 'workshop', image: '/images/Clients/IMG_0409.jpg', title: 'Workshop Image' },
    { id: 69, category: 'workshop', image: '/images/Clients/IMG_0410.jpg', title: 'Workshop Image' },
    { id: 70, category: 'workshop', image: '/images/Clients/IMG_0411.jpg', title: 'Workshop Image' },
    
    // Fabrication
    { id: 3, category: 'fabrication', image: '/images/MS/Grating.jpg', title: 'Steel Grating' },
    { id: 4, category: 'fabrication', image: '/images/MS/Piping.jpg', title: 'Pipe Fabrication' },
    { id: 5, category: 'fabrication', image: '/images/MS/GratingStructure.jpg', title: 'Grating Structure' },
    { id: 6, category: 'fabrication', image: '/images/MS/MezzanineSteelFloor.jpg', title: 'Mezzanine Floor' },
    { id: 20, category: 'fabrication', image: '/images/Clients/DSC_0012.JPG', title: 'Fabrication Work' },
    { id: 21, category: 'fabrication', image: '/images/Clients/DSC_0015.JPG', title: 'Fabrication Work' },
    { id: 22, category: 'fabrication', image: '/images/Clients/DSC_0017.JPG', title: 'Fabrication Work' },
    { id: 23, category: 'fabrication', image: '/images/Clients/DSC_0034.JPG', title: 'Fabrication Work' },
    { id: 24, category: 'fabrication', image: '/images/Clients/DSC_0036.JPG', title: 'Fabrication Work' },
    { id: 25, category: 'fabrication', image: '/images/Clients/DSC_0393.jpg', title: 'Fabrication Work' },
    { id: 26, category: 'fabrication', image: '/images/Clients/DSC_0407.JPG', title: 'Fabrication Work' },
    { id: 27, category: 'fabrication', image: '/images/Clients/DSC_0414.JPG', title: 'Fabrication Work' },
    { id: 28, category: 'fabrication', image: '/images/Clients/DSC_0425.JPG', title: 'Fabrication Work' },
    { id: 29, category: 'fabrication', image: '/images/Clients/DSC_0438.JPG', title: 'Fabrication Work' },
    { id: 30, category: 'fabrication', image: '/images/Clients/DSC_0445.JPG', title: 'Fabrication Work' },
    { id: 31, category: 'fabrication', image: '/images/Clients/DSC_0454.JPG', title: 'Fabrication Work' },
    { id: 32, category: 'fabrication', image: '/images/Clients/DSC_0460.JPG', title: 'Fabrication Work' },
    { id: 33, category: 'fabrication', image: '/images/Clients/DSC_0468.JPG', title: 'Fabrication Work' },
    { id: 34, category: 'fabrication', image: '/images/Clients/DSC_0469.JPG', title: 'Fabrication Work' },
    { id: 35, category: 'fabrication', image: '/images/Clients/DSC_0471.JPG', title: 'Fabrication Work' },
    { id: 36, category: 'fabrication', image: '/images/Clients/DSC_0482.JPG', title: 'Fabrication Work' },
    { id: 37, category: 'fabrication', image: '/images/Clients/DSC_0488.JPG', title: 'Fabrication Work' },
    { id: 38, category: 'fabrication', image: '/images/Clients/DSC_0576.JPG', title: 'Fabrication Work' },
    { id: 39, category: 'fabrication', image: '/images/Clients/DSC_0593.JPG', title: 'Fabrication Work' },
    { id: 40, category: 'fabrication', image: '/images/Clients/DSC_0611.JPG', title: 'Fabrication Work' },
    { id: 41, category: 'fabrication', image: '/images/Clients/DSC_0663.JPG', title: 'Fabrication Work' },
    { id: 42, category: 'fabrication', image: '/images/Clients/DSC_2381.JPG', title: 'Fabrication Work' },
    { id: 43, category: 'fabrication', image: '/images/Clients/DSC_4587.JPG', title: 'Fabrication Work' },
    { id: 44, category: 'fabrication', image: '/images/Clients/DSC_4606.jpg', title: 'Fabrication Work' },
    { id: 45, category: 'fabrication', image: '/images/Clients/DSC_4686.JPG', title: 'Fabrication Work' },
    { id: 46, category: 'fabrication', image: '/images/Clients/DSC_4700.jpg', title: 'Fabrication Work' },
    { id: 47, category: 'fabrication', image: '/images/Clients/DSC_4736.JPG', title: 'Fabrication Work' },
    { id: 48, category: 'fabrication', image: '/images/Clients/DSC_5377.jpg', title: 'Fabrication Work' },
    { id: 49, category: 'fabrication', image: '/images/Clients/DSC_5579.JPG', title: 'Fabrication Work' },
    { id: 50, category: 'fabrication', image: '/images/Clients/DSC_7379.JPG', title: 'Fabrication Work' },
    { id: 51, category: 'fabrication', image: '/images/Clients/DSC_7656.jpg', title: 'Fabrication Work' },
    { id: 52, category: 'fabrication', image: '/images/Clients/DSC_7776.jpg', title: 'Fabrication Work' },
    
    // Equipment
    { id: 7, category: 'equipment', image: '/images/MS/Ladder.jpg', title: 'Industrial Ladder' },
    { id: 8, category: 'equipment', image: '/images/MS/StairCase.jpg', title: 'Staircase' },
    { id: 9, category: 'equipment', image: '/images/MS/PipeSupport.jpg', title: 'Pipe Support' },
    { id: 10, category: 'equipment', image: '/images/MS/LoadingPlatform.jpg', title: 'Loading Platform' },
    
    // Projects
    { id: 11, category: 'projects', image: '/images/Clients/project1.jpeg', title: 'Project 1' },
    { id: 12, category: 'projects', image: '/images/Clients/project2.jpeg', title: 'Project 2' },
    { id: 13, category: 'projects', image: '/images/Clients/project3.jpeg', title: 'Project 3' },
    { id: 14, category: 'projects', image: '/images/Clients/project4.jpeg', title: 'Project 4' },
    { id: 15, category: 'projects', image: '/images/Clients/project5.jpeg', title: 'Project 5' },
    { id: 16, category: 'projects', image: '/images/Clients/project6.jpeg', title: 'Project 6' },
    { id: 17, category: 'projects', image: '/images/Clients/project7.jpeg', title: 'Project 7' },
    { id: 18, category: 'projects', image: '/images/Clients/project8.jpeg', title: 'Project 8' },
    { id: 19, category: 'projects', image: '/images/Clients/project9.jpeg', title: 'Project 9' },
    { id: 71, category: 'projects', image: '/images/Clients/what1.jpeg', title: 'Project Image' },
    { id: 72, category: 'projects', image: '/images/Clients/what2.jpeg', title: 'Project Image' },
    { id: 73, category: 'projects', image: '/images/Clients/what3.jpeg', title: 'Project Image' },
    { id: 74, category: 'projects', image: '/images/Clients/what4.jpeg', title: 'Project Image' },
    { id: 75, category: 'projects', image: '/images/Clients/what5.jpeg', title: 'Project Image' },
    { id: 76, category: 'projects', image: '/images/Clients/what6.jpeg', title: 'Project Image' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Explore our workshop, fabrication processes, and completed projects</p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          {/* Category Filters */}
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`gallery-filter ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder" style={{ display: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                  <span>Image Coming Soon</span>
                </div>
                <div className="gallery-overlay">
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center" style={{ padding: '60px 0' }}>
              <p className="text-light">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Category Description */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Our Work Categories</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-card-icon">🏭</div>
              <h3>Workshop</h3>
              <p>
                Our state-of-the-art facility in Ajman with advanced equipment 
                and organized production areas for efficient fabrication.
              </p>
            </div>
            <div className="service-card">
              <div className="service-card-icon">⚙</div>
              <h3>Fabrication</h3>
              <p>
                Steel fabrication processes including cutting, bending, welding, 
                and assembly of various structural components.
              </p>
            </div>
            <div className="service-card">
              <div className="service-card-icon">🔧</div>
              <h3>Equipment</h3>
              <p>
                Our range of machinery and equipment used for precision 
                manufacturing and quality fabrication.
              </p>
            </div>
            <div className="service-card">
              <div className="service-card-icon">🏗</div>
              <h3>Projects</h3>
              <p>
                Completed projects showcasing our expertise in structural 
                steel works for various industrial applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
