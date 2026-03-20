import React, { useState } from "react";

const Chatbot = () => {

const [open, setOpen] = useState(false);

const [messages, setMessages] = useState([
{ text: "Hello 👋 Welcome to Sun Emirates. How can I help you?", bot: true }
]);

const [input, setInput] = useState("");

const sendMessage = () => {

if (!input.trim()) return;

const userMsg = { text: input, bot: false };

let reply = "Please contact our team at sales@sunemirates.com";

const text = input.toLowerCase();

if (text.includes("services")) {
reply = "We provide stainless steel works, mild steel fabrication, machine shop and finishing services.";
}

if (text.includes("contact")) {
reply = "Phone: +971-6-7481646 | Email: sales@sunemirates.com";
}

if (text.includes("location")) {
reply = "We are located in Ajman Industrial Area, UAE.";
}

setMessages([...messages, userMsg, { text: reply, bot: true }]);

setInput("");

};

return (
<div>

{/* Chat Window */}

{open && (

<div className="chatContainer">

<div className="chatHeader">
Sun Emirates Chat
</div>

<div className="chatBody">

{messages.map((msg, i) => (

<div
key={i}
className={msg.bot ? "botMessage" : "userMessage"}
>

{msg.text}

</div>

))}

</div>

<div className="inputArea">

<input
type="text"
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Type message..."
className="chatInput"
onKeyDown={(e) => {
if (e.key === "Enter") sendMessage();
}}
/>

<button onClick={sendMessage} className="chatButton">
Send
</button>

</div>

</div>

)}

{/* Chat Icon */}

<div className="chatIcon" onClick={() => setOpen(!open)}>

<img
src="/images/chatbot/chatbot.png"
alt="chatbot"
/>

</div>

</div>
);
};

export default Chatbot;
