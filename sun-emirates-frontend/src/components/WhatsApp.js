import React from "react";

const WhatsApp = () => {
  // WhatsApp phone number (without + symbol for the API URL)
  const phoneNumber = "97167481646";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsappIcon"
      title="Chat on WhatsApp"
    >
      <img
        src="/images/common/whatsapp.png"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsApp;
