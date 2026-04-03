import React, { useState, useEffect, useRef } from "react";

const Chatbot = () => {

const [isOpen, setIsOpen] = useState(false);
const [isMinimized, setIsMinimized] = useState(false);
const [isMobile, setIsMobile] = useState(false);
const [messages, setMessages] = useState([
  { id: 1, text: "Hello 👋 Welcome to Sun Emirates. How can I help you?", sender: "bot" }
]);
const [input, setInput] = useState("");
const chatBodyRef = useRef(null);

// Mobile detection
useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  
  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);

// Auto-reset minimize state on mobile
useEffect(() => {
  if (isMobile && isOpen) {
    setIsMinimized(false);
  }
}, [isMobile, isOpen]);

// Handle toggle with mobile support
  const toggleChat = () => {
    if (isMinimized) {
      // When minimized, close the chat completely
      setIsMinimized(false);
      setIsOpen(false);
    } else if (isOpen) {
      // When open, close it
      setIsOpen(false);
    } else {
      // Open the chat
      if (isMobile) {
        setIsMinimized(false);
      }
      setIsOpen(true);
    }
  };

const sendMessage = () => {
  if (!input.trim()) return;

  const userMsg = { id: Date.now(), text: input, sender: "user" };

  let reply = { 
    id: Date.now() + 1, 
    text: "Please contact our team at sales@sunemirates.com", 
    sender: "bot" 
  };

  const text = input.toLowerCase();

  if (text.includes("services")) {
    reply.text = "We provide stainless steel works, mild steel fabrication, machine shop and finishing services.";
  }

  if (text.includes("contact")) {
    reply.text = "Phone: +971-6-7481646 | Email: sales@sunemirates.com";
  }

  if (text.includes("location")) {
    reply.text = "We are located in Ajman Industrial Area, UAE.";
  }

  setMessages([...messages, userMsg, reply]);
  setInput("");
};

// Auto-scroll
useEffect(() => {
  if (chatBodyRef.current) {
    chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  }
}, [messages]);

// ESC key
useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && isOpen) setIsOpen(false);
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [isOpen]);

return (
  <>
    {isOpen && <div className="chat-overlay" style={{ display: 'block' }} onClick={() => setIsOpen(false)}></div>}

    <div className={`chat-panel ${isOpen ? "chat-panel-open" : ""} ${isMinimized ? "chat-panel-minimized" : ""}`}>

      {/* HEADER */}
      <div className="chat-panel-header">
        
        <div className="chat-header-info" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div className="chat-avatar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div>
            <h3 style={{ margin: 0, color: 'white', fontSize: '16px', fontWeight: 600 }}>Sun Emirates</h3>
            <span className="chat-status">Online</span>
          </div>
        </div>

        {/* CLOSE BUTTON - Always visible */}
        <div className="chat-header-buttons" style={{ display: "flex", gap: "6px" }}>
          <button className="chat-header-btn chat-close-btn" onClick={toggleChat}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      {/* BODY */}
      <div className="chat-panel-body" ref={chatBodyRef}>
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-message ${msg.sender}`}>
            <div className="message-bubble">{msg.text}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="chat-panel-footer">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="chat-input"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="chat-send-btn" onClick={sendMessage}>
            ➤
          </button>
        </div>

    </div>

    {/* TOGGLE */}
    <button className="chat-toggle-btn" onClick={toggleChat}>
      {isOpen ? "✕" : (
        <img src="/images/chatbot/chatbot.png" alt="chat" style={{ width: 32 }} />
      )}
    </button>
  </>
);
};

export default Chatbot;