import React from "react";
import Button from "react-bootstrap/Button";

import "./contact.style.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="text-center font-details-b">CONTACT ME</h1>
      <hr/>
      <div className="contact">
        <div className="contact-container">
          <div className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:naman.ar90@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="naman.ar90@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/naman-arora-462465139/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Connect with me on LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/naman3112" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" className="border" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
           
           
            <div className="m-2">
              <a href="https://leetcode.com/namanarora311/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info">
                  <i className="fas fa-lightbulb"></i> LeetCode
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;