import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
    
        <div className="footer-title">
          <h2>Connect with Me</h2>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/sekhashik09"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sekh-ashik-billa-989193258/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ashiksekh8967@gmail.com"
            className="footer-link"
          >
            Email
          </a>
        </div>

        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} DevUne<span className='a'>X</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
