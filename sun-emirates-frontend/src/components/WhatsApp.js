import React from "react";

const WhatsApp = () => {
  // WhatsApp phone number (without + symbol for the API URL)
  const phoneNumber = "971507743556";
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
        src="/images/Common/whatsapp.png"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsApp;
