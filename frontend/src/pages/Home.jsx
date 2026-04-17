import React from 'react';
import './Home.css';
import home from '../assets/home1.webp';
import cseImage from '../assets/cse.webp';
import aimlImage from '../assets/aiml.webp';
import mechanicalImage from '../assets/mechanical.webp';
import civilImage from '../assets/civil.webp';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Home1 Section */}
      <section className="home">
        <div className="home-content">
          <div className="home-text">
            <h1>Welcome to PCTE Institute of Engineering and Technology </h1>
            <p>
              Empowering minds, shaping futures. Join India's premier technical education
              institution with world-class facilities and industry-aligned curriculum.
            </p>
            <div className="home-buttons">
              <a href="/apply-now" className="btn btn-primary">Apply Now</a>
              <a href="/courses" className="btn btn-secondary">Explore Courses</a>
            </div>
          </div>
          <div className="home-image">
            <img src={home} alt="Students studying" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose PCTE?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Quality Education</h3>
              <p>Industry-aligned curriculum with hands-on learning experiences.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Expert Faculty</h3>
              <p>Learn from experienced professors and industry professionals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Modern Infrastructure</h3>
              <p>State-of-the-art labs, libraries, and learning facilities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>100% Placement</h3>
              <p>Strong industry connections ensuring excellent placement opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>25+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-item">
              <h3>15000+</h3>
              <p>Alumni Network</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Industry Partners</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Placement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="courses-preview">
        <div className="container">
          <h2>Our Engineering Programs</h2>
          <div className="courses-grid">
            <div className="course-card">

              <Link to="/cse" className="course-card">
                <img src={cseImage} alt="Computer Science Deparment" />
              </Link>
              <h3>Computer Science Engineering</h3>
              <p>Master programming, algorithms, and software development.</p>


            </div>
            <div className="course-card">

              <Link to="/aiml" className="course-card">
                <img src={aimlImage} alt="AI-ML Deparment" />
              </Link>
              <h3>AI/ML Engineering</h3>
              <p>Explore artificial intelligence and machine learning technologies.</p>

            </div>
            <div className="course-card">
              <Link to="/mechanical" className="course-card">
                <img src={mechanicalImage} alt="Mechanical Department" />
              </Link>
              <h3>Mechanical Engineering</h3>
              <p>Design, build, and maintain mechanical systems.</p>


            </div>
            <div className="course-card">
              <Link to="/civil" className="course-card">
                <img src={civilImage} alt="Civil Department" />
              </Link>
              <h3>Civil Engineering</h3>
              <p>Plan, design, and construct infrastructure projects.</p>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Engineering Journey?</h2>
          <p>Join thousands of successful engineers who started their careers at PCTE.</p>
          <a href="/apply-now" className="btn btn-primary">Apply Now</a>
        </div>
      </section>
    </div>
  );
};

export default Home;