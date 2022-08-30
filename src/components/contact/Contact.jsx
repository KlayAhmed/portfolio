import React from "react";
import "./contact.scss";
import resumeImg from "../../assets/connect.svg";
import { useState } from "react";
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
            <img src={resumeImg} alt="error" className="photo" />
          </div>
          <div className="right">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
              <button type="submit">
                <a
                  download="Klay Ahmed Data Analyst resume.pdf"
                  href="https://www.linkedin.com/in/klayahmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </button>

              <button type="submit">
                <a
                  download="Klay Ahmed Full-stack Resume.pdf"
                  href={devResume}
                  title="Klay Ahmed Full-stack Developer resume"
                >
                  Resume
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
