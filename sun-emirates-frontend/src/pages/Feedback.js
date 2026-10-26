import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SpecialistAreas from '../components/SpecialistAreas';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailId: '',
    comments: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 255;

  useEffect(() => {
    setCharCount(formData.comments.length);
  }, [formData.comments]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Enforce max length for comments
    if (name === 'comments' && value.length > maxChars) {
      return;
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: 'Error32', message: 'Please Enter Your Name' });
      return false;
    }
    
    // Name validation - only letters and spaces
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.name)) {
      setStatus({ type: 'Error32', message: 'Please enter a valid name (letters and spaces only)' });
      return false;
    }
    
    if (!formData.emailId.trim()) {
      setStatus({ type: 'Error32', message: 'Please Enter Your EmailId' });
      return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailId)) {
      setStatus({ type: 'Error32', message: 'Please Enter Valid EmailId' });
      return false;
    }
    
    if (!formData.comments.trim()) {
      setStatus({ type: 'Error32', message: 'Please Enter Suggestion' });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/feedback', formData);
      if (response.data.success) {
        setStatus({ type: 'Success32', message: 'Thanks for your valuable feedback !!!' });
        setFormData({
          name: '',
          emailId: '',
          comments: ''
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'Error32', 
        message: error.response?.data?.message || 'Error submitting feedback' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      emailId: '',
      comments: ''
    });
    setStatus({ type: '', message: '' });
  };

  return (
    <div className="FeedbackFormdiv">
      <form onSubmit={handleSubmit}>
        <table cellpadding="0" border="0" cellspacing="0" width="100%">
          <tbody>
            <tr>
              <td width="70%">
                <table cellpadding="3" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td colSpan={2}>
                        <span className="PageHeader">Feedback Form</span>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" colSpan={2}>
                        <img 
                          src="/images/Common/Feedbk.png" 
                          alt="Feedback" 
                          title="Feedback"
                          align="absMiddle"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <div className="errorContainer">
                          {status.message && (
                            <div className={status.type}>
                              {status.message}
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="frmLabel" width="20%">
                        Your Name<span className="mandatory spearator">*</span> :
                      </td>
                      <td align="left">
                        <input 
                          type="text" 
                          name="name" 
                          className="txtSLMedium" 
                          maxLength="50"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="frmLabel">
                        Email Id<span className="mandatory spearator">*</span> :
                      </td>
                      <td align="left">
                        <input 
                          type="email" 
                          name="emailId" 
                          className="txtSLMedium" 
                          maxLength="50"
                          value={formData.emailId}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="frmLabel">
                        Comments<span className="mandatory spearator">*</span> :
                      </td>
                      <td align="left">
                        <textarea 
                          name="comments" 
                          className="txtMLMedium"
                          rows="4"
                          value={formData.comments}
                          onChange={handleChange}
                        />
                        <br />
                        <span className="lblExample">
                          Characters entered <b>{charCount}</b> out of {maxChars}.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      </td>
                      <td align="left">
                        <button 
                          type="submit" 
                          className="btnSubmit"
                          disabled={loading}
                        >
                          {loading ? 'Submitting...' : 'Submit'}
                        </button>
                        <button 
                          type="button" 
                          className="btnReset"
                          onClick={handleReset}
                        >
                          Reset
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td width="30%" valign="top" className="osa">
                <SpecialistAreas />
              </td>
            </tr>
            <tr>
              <td style={{ height: '25px' }} colSpan={2}>
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Feedback;
