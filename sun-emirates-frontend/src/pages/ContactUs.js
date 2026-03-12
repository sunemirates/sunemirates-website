import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Use environment variable or empty string for API URL
  const apiUrl = process.env.REACT_APP_API_URL || '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${apiUrl}/api/contact/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        setError('Failed to submit. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries and quotations</p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-section">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="text-light mb-30">
                We welcome your inquiries. Contact us for quotations, technical 
                discussions, or any other information about our services.
              </p>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>
                    P.O. Box: 14655<br />
                    Al Shenaya New Industrial Area<br />
                    Ajman, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>
                    +971-6-7481646 (Office)<br />
                    +971-6-7481647 (Fax)<br />
                    +971-50-7743556 (Mobile)
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>
                    sales@sunemirates.com<br />
                    saminathan@sunemirates.com<br />
                    sunemw@eim.ae
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div className="contact-details">
                  <h4>Business Hours</h4>
                  <p>
                    Saturday - Thursday: 8:00 AM - 6:00 PM<br />
                    Friday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              
              {submitted && (
                <div style={{ 
                  padding: '15px', 
                  backgroundColor: '#d4edda', 
                  border: '1px solid #c3e6cb',
                  color: '#155724',
                  marginBottom: '20px'
                }}>
                  Thank you for your message! We will get back to you soon.
                </div>
              )}

              {error && (
                <div style={{ 
                  padding: '15px', 
                  backgroundColor: '#f8d7da', 
                  border: '1px solid #f5c6cb',
                  color: '#721c24',
                  marginBottom: '20px'
                }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Our Location</h2>
          </div>
          <div className="map-container">
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
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Our Services</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Steel Fabrication</h3>
              <p>Custom steel fabrication for construction and industrial applications</p>
            </div>
            <div className="service-card">
              <h3>Structural Works</h3>
              <p>Complete structural steel solutions including beams, columns, and platforms</p>
            </div>
            <div className="service-card">
              <h3>Welding Services</h3>
              <p>Certified welding including MIG, TIG, ARC, and submerged arc welding</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
