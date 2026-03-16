import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8220584194?text=Hello%20Sun%20Emirates%20Team"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img
        src="/images/Common/whatsapp.png"
        alt="WhatsApp Chat"
      />
    </a>
  );
};

export default WhatsAppButton;