import React, { useState, useEffect, useRef } from "react";

const Chatbot = () => {

const [isOpen, setIsOpen] = useState(false);
const [messages, setMessages] = useState([
  { id: 1, text: "Hello 👋 Welcome to Sun Emirates. How can I help you?", sender: "bot" }
]);
const [input, setInput] = useState("");
const chatBodyRef = useRef(null);

const toggleChat = () => {
  setIsOpen(!isOpen);
};

const sendMessage = () => {
  if (!input.trim()) return;

  const userMsg = { 
    id: Date.now(), 
    text: input, 
    sender: "user" 
  };

  let reply = { 
    id: Date.now() + 1, 
    text: "Please contact our team at sales@sunemirates.com", 
    sender: "bot" 
  };

  const text = input.toLowerCase();

  if (text.includes("services")) {
    reply = { 
      id: Date.now() + 1, 
      text: "We provide stainless steel works, mild steel fabrication, machine shop and finishing services.", 
      sender: "bot" 
    };
  }

  if (text.includes("contact")) {
    reply = { 
      id: Date.now() + 1, 
      text: "Phone: +971-6-7481646 | Email: sales@sunemirates.com", 
      sender: "bot" 
    };
  }

  if (text.includes("location")) {
    reply = { 
      id: Date.now() + 1, 
      text: "We are located in Ajman Industrial Area, UAE.", 
      sender: "bot" 
    };
  }

  setMessages([...messages, userMsg, reply]);
  setInput("");
};

// Auto-scroll to bottom when messages change
useEffect(() => {
  if (chatBodyRef.current) {
    chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  }
}, [messages]);

// Handle keyboard accessibility
useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [isOpen]);

return (
  <>
    {/* Chat Overlay for mobile */}
    {isOpen && <div className="chat-overlay" onClick={() => setIsOpen(false)}></div>}

    {/* Chat Panel */}
    <div 
      className={`chat-panel ${isOpen ? "chat-panel-open" : ""}`}
      role="dialog"
      aria-label="Chat dialog"
      aria-modal="true"
    >
      {/* Chat Header */}
      <div className="chat-panel-header">
        <div className="chat-header-info">
          <div className="chat-avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <div>
            <h3>Sun Emirates</h3>
            <span className="chat-status">Online</span>
          </div>
        </div>
        <button 
          className="chat-close-btn" 
          onClick={toggleChat}
          aria-label="Close chat"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Chat Body */}
      <div className="chat-panel-body" ref={chatBodyRef}>
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`chat-message ${msg.sender === "bot" ? "bot" : "user"}`}
          >
            <div className="message-bubble">
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="chat-panel-footer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="chat-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          aria-label="Type your message"
        />
        <button 
          className="chat-send-btn" 
          onClick={sendMessage}
          aria-label="Send message"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>

    {/* Chat Toggle Button */}
    <button 
      className="chat-toggle-btn" 
      onClick={toggleChat}
      aria-label={isOpen ? "Close chat" : "Open chat"}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      ) : (
        <img 
          src="/images/chatbot/chatbot.png" 
          alt="Chat with us" 
          style={{ width: '32px', height: '32px', objectFit: 'contain' }}
        />
      )}
    </button>
  </>
);
};

export default Chatbot;
