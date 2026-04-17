import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.webp'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="" />
            </div>
            <p>
              Leading the way in technical education with state-of-the-art facilities 
              and industry-aligned curriculum preparing students for global careers.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/pctegroup/" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
  
              <a href="https://in.linkedin.com/school/pcte-ludhiana/" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/pcteofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/placement">Placement</Link></li>
              <li><Link to="/apply-now">Apply Now</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Engineering Programs</h4>
            <ul>
              <li><a href="#">Computer Science Engineering</a></li>
              <li><a href="#">AI/ML Engineering</a></li>
              <li><a href="#">Mechanical Engineering</a></li>
              <li><a href="#">Civil Engineering</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span> Campus-2,Near Baddowal Cantt, Ferozepur Road, Ludhiana-142021, Punjab, India</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91-161-5037555</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>info@pcte.edu.in</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 PCTE Institute of Engineering and Technology. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;