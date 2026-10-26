import React from 'react';

const LocationMap = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Location Map</h1>
          <p>Find us at Al Shenaya New Industrial Area, Ajman, UAE</p>
        </div>
      </div>

      {/* Map Section */}
      <section className="section">
        <div className="container">
          <div className="map-container" style={{ height: '500px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2886398264646!2d55.4780996!3d25.385901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f587aabcb92a9%3A0x7dfb5419cbbecdd!2sSun%20Emirates%20Mechanical%20Works%20LLC!5e0!3m2!1sen!2sae!4v1640000000000!5m2!1sen!2sae" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Sun Emirates Location"
            ></iframe>
          </div>
          
          {/* Address Details */}
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <h3>Sun Emirates Mechanical Works LLC</h3>
            <p>
              P.O. Box: 14655<br />
              Al Shenaya New Industrial Area<br />
              Ajman, United Arab Emirates
            </p>
            <p>
              <strong>Phone:</strong> +971-6-7481646<br />
              <strong>Email:</strong> sales@sunemirates.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationMap;
