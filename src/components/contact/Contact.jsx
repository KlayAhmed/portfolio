import React from "react";
import "./contact.scss";
import chat from "../../assets/chat.jpg"
import { useState} from "react"

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };


  return (
    <div className="contact" id="contact">
      <div className="glass">
        <div className="container">
          <div className="left">
            <img src={chat}  height={250} width={400} alt="error" />
          </div>
          <div className="right">
            <h2>Contact.</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Email"/>
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send.</button>
              {message && <span>Thanks, I will get back to you ASAP</span>}
          </form>

          </div>
        </div>
      </div>
    </div>
  );
}
