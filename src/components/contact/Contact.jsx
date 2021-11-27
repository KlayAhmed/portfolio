import React from "react";
import "./contact.scss";
import chat from "../../assets/chat.jpg";
import { useState } from "react";
import dataResume from "../../assets/dataResume.pdf";
import devResume from "../../assets/devResume.pdf";

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
            <img src={chat} alt="error" className="photo" />
          </div>
          <div className="right">
            <h2>Download my resume</h2>
            <form onSubmit={handleSubmit}>
              <button type="submit" href>
                <a
                  download="Klay Ahmed Data Analyst resume.pdf"
                  href={dataResume}
                  title="Klay Ahmed Data Analyst resume"
                >
                  Data Analyst
                </a>
              </button>

              <button type="submit">
                <a
                  download="Klay Ahmed Full-stack Resume.pdf"
                  href={devResume}
                  title="Klay Ahmed Full-stack Developer resume"
                >
                  Full stack Developer
                </a>
              </button>
            </form>
            {message && (
              <span>Thank you, And I look forward to hearing from you!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
