import React, { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'workshop', label: 'Workshop' },
    { id: 'fabrication', label: 'Fabrication' },
    { id: 'projects', label: 'Projects' }
  ];

  const galleryItems = [
    { id: 1, category: 'workshop', image: '/images/Common/workplace.png', title: 'Main Workshop' },
    
    { id: 55, category: 'workshop', image: '/images/Clients/IMG_0392.jpg', title: 'Workshop Image' },
    { id: 56, category: 'workshop', image: '/images/Clients/IMG_0394.jpg', title: 'Workshop Image' },
    { id: 57, category: 'workshop', image: '/images/Clients/IMG_0396.jpg', title: 'Workshop Image' },
    { id: 58, category: 'workshop', image: '/images/Clients/IMG_0397.jpg', title: 'Workshop Image' },
    { id: 59, category: 'workshop', image: '/images/Clients/IMG_0398.jpg', title: 'Workshop Image' },
    { id: 62, category: 'workshop', image: '/images/Clients/IMG_0401.jpg', title: 'Workshop Image' },
    { id: 63, category: 'workshop', image: '/images/Clients/IMG_0403.jpg', title: 'Workshop Image' },
    { id: 64, category: 'workshop', image: '/images/Clients/IMG_0404.jpg', title: 'Workshop Image' },
    { id: 65, category: 'workshop', image: '/images/Clients/IMG_0405.jpg', title: 'Workshop Image' },
    { id: 66, category: 'workshop', image: '/images/Clients/IMG_0407.jpg', title: 'Workshop Image' },
    { id: 67, category: 'workshop', image: '/images/Clients/IMG_0408.jpg', title: 'Workshop Image' },
    { id: 69, category: 'workshop', image: '/images/Clients/IMG_0410.jpg', title: 'Workshop Image' },
    
    { id: 5, category: 'fabrication', image: '/images/MS/GratingStructure.jpg', title: 'Grating Structure' },
    
    { id: 7, category: 'fabrication', image: '/images/MS/Ladder.jpg', title: 'Industrial Ladder' },
    { id: 8, category: 'fabrication', image: '/images/MS/StairCase.jpg', title: 'Staircase' },
    { id: 9, category: 'fabrication', image: '/images/MS/PipeSupport.jpg', title: 'Pipe Support' },
    { id: 10, category: 'fabrication', image: '/images/MS/LoadingPlatform.jpg', title: 'Loading Platform' },
    { id: 71, category: 'fabrication', image: '/images/Clients/what1.jpeg', title: 'Fabrication Work' },
    { id: 72, category: 'fabrication', image: '/images/Clients/what2.jpeg', title: 'Fabrication Work' },

    { id: 11, category: 'projects', image: '/images/Clients/project1.jpeg', title: 'Project 1' },
    { id: 12, category: 'projects', image: '/images/Clients/project2.jpeg', title: 'Project 2' },
    { id: 13, category: 'projects', image: '/images/Clients/project3.jpeg', title: 'Project 3' },
    { id: 14, category: 'projects', image: '/images/Clients/project4.jpeg', title: 'Project 4' },
    { id: 15, category: 'projects', image: '/images/Clients/project5.jpeg', title: 'Project 5' },
    { id: 16, category: 'projects', image: '/images/Clients/project6.jpeg', title: 'Project 6' },
    { id: 17, category: 'projects', image: '/images/Clients/project7.jpeg', title: 'Project 7' },
    { id: 18, category: 'projects', image: '/images/Clients/project8.jpeg', title: 'Project 8' },
    { id: 19, category: 'projects', image: '/images/Clients/project9.jpeg', title: 'Project 9' },
    { id: 73, category: 'projects', image: '/images/Clients/what3.jpeg', title: 'Project Image' },
    { id: 74, category: 'projects', image: '/images/Clients/what4.jpeg', title: 'Project Image' },
    { id: 75, category: 'projects', image: '/images/Clients/what5.jpeg', title: 'Project Image' },
    { id: 76, category: 'projects', image: '/images/Clients/what6.jpeg', title: 'Project Image' },
    { id: 20, category: 'projects', image: '/images/Clients/DSC_0012.JPG', title: 'Fabrication Work' },
    { id: 21, category: 'projects', image: '/images/Clients/DSC_0015.JPG', title: 'Fabrication Work' },
    { id: 22, category: 'projects', image: '/images/Clients/DSC_0017.JPG', title: 'Fabrication Work' },
    { id: 23, category: 'projects', image: '/images/Clients/DSC_0034.JPG', title: 'Fabrication Work' },
    { id: 24, category: 'projects', image: '/images/Clients/DSC_0036.JPG', title: 'Fabrication Work' },
    { id: 25, category: 'projects', image: '/images/Clients/DSC_0393.jpg', title: 'Fabrication Work' },
    { id: 26, category: 'projects', image: '/images/Clients/DSC_0407.JPG', title: 'Fabrication Work' },
    { id: 27, category: 'projects', image: '/images/Clients/DSC_0414.JPG', title: 'Fabrication Work' },
    { id: 28, category: 'projects', image: '/images/Clients/DSC_0425.JPG', title: 'Fabrication Work' },
    { id: 29, category: 'projects', image: '/images/Clients/DSC_0438.JPG', title: 'Fabrication Work' },
    { id: 30, category: 'projects', image: '/images/Clients/DSC_0445.JPG', title: 'Fabrication Work' },
    { id: 31, category: 'projects', image: '/images/Clients/DSC_0454.JPG', title: 'Fabrication Work' },
    { id: 32, category: 'projects', image: '/images/Clients/DSC_0460.JPG', title: 'Fabrication Work' },
    { id: 33, category: 'projects', image: '/images/Clients/DSC_0468.JPG', title: 'Fabrication Work' },
    { id: 34, category: 'projects', image: '/images/Clients/DSC_0469.JPG', title: 'Fabrication Work' },
    { id: 35, category: 'projects', image: '/images/Clients/DSC_0471.JPG', title: 'Fabrication Work' },
    { id: 36, category: 'projects', image: '/images/Clients/DSC_0482.JPG', title: 'Fabrication Work' },
    { id: 37, category: 'projects', image: '/images/Clients/DSC_0488.JPG', title: 'Fabrication Work' },
    { id: 38, category: 'projects', image: '/images/Clients/DSC_0576.JPG', title: 'Fabrication Work' },
    { id: 39, category: 'projects', image: '/images/Clients/DSC_0593.JPG', title: 'Fabrication Work' },
    { id: 40, category: 'projects', image: '/images/Clients/DSC_0611.JPG', title: 'Fabrication Work' },
    { id: 41, category: 'projects', image: '/images/Clients/DSC_0663.JPG', title: 'Fabrication Work' },
    { id: 42, category: 'projects', image: '/images/Clients/DSC_2381.JPG', title: 'Fabrication Work' },
    { id: 43, category: 'projects', image: '/images/Clients/DSC_4587.JPG', title: 'Fabrication Work' },
    { id: 44, category: 'projects', image: '/images/Clients/DSC_4606.jpg', title: 'Fabrication Work' },
    { id: 45, category: 'projects', image: '/images/Clients/DSC_4686.JPG', title: 'Fabrication Work' },
    { id: 46, category: 'projects', image: '/images/Clients/DSC_4700.jpg', title: 'Fabrication Work' },
    { id: 47, category: 'projects', image: '/images/Clients/DSC_4736.JPG', title: 'Fabrication Work' },
    { id: 48, category: 'projects', image: '/images/Clients/DSC_5377.jpg', title: 'Fabrication Work' },
    { id: 49, category: 'projects', image: '/images/Clients/DSC_5579.JPG', title: 'Fabrication Work' },
    { id: 50, category: 'projects', image: '/images/Clients/DSC_7379.JPG', title: 'Fabrication Work' },
    { id: 51, category: 'projects', image: '/images/Clients/DSC_7656.jpg', title: 'Fabrication Work' },
    { id: 52, category: 'projects', image: '/images/Clients/DSC_7776.jpg', title: 'Fabrication Work' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Explore our workshop, fabrication processes, and completed projects</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
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
    </div>
  );
};

export default Gallery;