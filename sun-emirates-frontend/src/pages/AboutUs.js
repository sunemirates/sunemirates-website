import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Mr.Saminathan Subramani B.E.,",
      position: "Managing Director",
      image: "/images/Common/saminathan-image.jpeg"
    }
  ];

  const capabilities = [
    "Structural Steel Fabrication",
    "Stainless Steel Fabrication",
    "Mild Steel Fabrication",
    "Pipe Fabrication & Piping Systems",
    "Custom Metal Works",
    "Welding (MIG, TIG, ARC, SAW)",
    "Surface Treatment & Coating",
    "Precision Machining",
    "Installation & Erection"
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Professional Steel Fabrication Since 2007</p>
        </div>
      </div>

      {/* Company Profile */}
      <section className="section">
        <div className="container">
          <div className="about-section">
            <div className="about-content">
              <h2>Company Profile</h2>
              <p>
                Sun Emirates Mechanical Works LLC is a leading steel fabrication 
                company established in 2007 in Al Shenaya New Industrial Area, 
                Ajman, United Arab Emirates. With over 19 years of experience, 
                we have built a reputation for delivering high-quality fabrication 
                solutions to clients across various sectors.
              </p>
              <p>
                Our company specializes in stainless steel and mild steel fabrication 
                for Construction, Interior Decoration, Marine, Power, and Oil & Gas 
                sectors. We maintain the highest standards of quality and safety in 
                all our operations.
              </p>
              <p>
                We have a team of experienced engineers, technicians, and skilled 
                workers who are committed to delivering projects on time while 
                maintaining exceptional quality standards.
              </p>
            </div>
            <div>
           <img src="/images/Common/paintbooth.png" alt="Paint Booth" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
              
                
               </div> 
              
            
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Vision & Mission</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-card-icon">👁</div>
              <h3>Our Vision</h3>
              <p>
                To be the preferred steel fabrication partner for EPC consultants 
                and industrial clients in the Gulf region, recognized for technical 
                excellence, quality craftsmanship, and reliable service.
              </p>
            </div>
            <div className="service-card">
              <div className="service-card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To deliver high-quality steel fabrication solutions that meet 
                international standards, while building long-term relationships 
                with our clients through professionalism, integrity, and technical 
                expertise.
              </p>
            </div>
            <div className="service-card">
              <div className="service-card-icon">⚙</div>
              <h3>Our Values</h3>
              <p>
                Quality first, safety always, technical excellence, customer 
                satisfaction, and continuous improvement are the core values 
                that guide our operations and business decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Facility */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Workshop Facility</h2>
            <p className="text-light">
              State-of-the-art manufacturing facility in Ajman, UAE
            </p>
          </div>
          <div className="about-section">
            <div className="about-image">
              <img 
                src="/images/Common/workplace.png" 
                alt="Workshop Facility" 
              />
            </div>
            <div className="about-content">
              <h3>Manufacturing Capabilities</h3>
              <p>
                Our modern workshop facility is equipped with advanced fabrication 
                machinery and equipment to handle projects of various scales and 
                complexities. We maintain a well-organized production floor with 
                proper material handling systems and quality control checkpoints.
              </p>
              <ul className="features-list">
                <li>Work shop - Open Area  :  6000 Sq. feet </li>
                <li>Work shop - Covered Area  :  10000 Sq. feet</li>
                <li>Total Area : 16000 Sq. feet </li>
                <li>Advanced welding equipment</li>
                <li>Surface treatment facilities</li>
                <li>Material storage and handling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Capability */}
      <section className="section bg-dark">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Engineering Capability</h2>
          </div>
          <div className="about-section">
            <div className="about-content">
              <h3>Technical Expertise</h3>
              <p>
                Our engineering team possesses extensive experience in steel 
                fabrication and structural works. We have the capability to 
                interpret complex engineering drawings and convert them into 
                precision fabricated components.
              </p>
              <ul className="features-list">
                {capabilities.map((capability, index) => (
                  <li key={index}>{capability}</li>
                ))}
              </ul>
            </div>
            <div className="about-image"></div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Management Team</h2>
            <p className="text-light">
              Experienced leadership guiding our success
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-member-image">
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    <div className="image-placeholder">
                      <span>Image Coming Soon</span>
                    </div>
                  )}
                </div>
                <h4>{member.name}</h4>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Quality & Standards</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Quality Management System</h3>
              <p>
                Quality Management System certified company ensuring consistent 
                quality in all our fabrication processes and deliverables.
              </p>
            </div>
            <div className="service-card">
              <h3>Safety Standards</h3>
              <p>
                Strict adherence to OSHA and local safety regulations with 
                regular safety audits and training programs for all staff.
              </p>
            </div>
            <div className="service-card">
              <h3>Welding Certifications</h3>
              <p>
                Certified welders following AWS and ASME standards for 
                quality welded joints and structural integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
