import React, { useState,useContext,useEffect } from "react";
import "./urls.css";
import logo from "./preview.webp";
import "./Main.css";
import { SearchContext } from "./SearchContext";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const {search,setSearch} = useContext(SearchContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setSearch((prevSearch)=>[input, ...prevSearch].slice(0,3));
    setInput("");
    setLoading(true);
    
    try {
      const response = await fetch("http://localhost:5000/api/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input }),
      });

      if (!response.ok) {
        console.log("Error: Network response was not ok.");
        return;
      }

      const data = await response.json();
      console.log("Received response:", data);  
      const botMessage = { sender: 'bot', text: data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (err) {
      console.error("Fetch error:", err);
    }
    setLoading(false);
  };

  return (
    <div className="main">
     
      <div className="mainbar">
        <div className="mainbar-header">
          
          {messages.map((message, index) => (
            <div key={index} className={`${message.sender} box`}>
              {message.text}
            </div>
          ))}
          {
            loading && 
            <div className="bot box text-light">
              <span className="material-symbols-outlined send">hourglass_empty</span>
              <span className="loading">Loading...</span>
            </div>
          }
        </div>
        <div className="mainbar-tail">
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Send a message"
              className="sendbox"
            />
            <button type="submit" className="sent" disabled={loading}>
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
