import React from 'react';
import './Placement.css';
import microsoft from '../assets/ms-logo.png';
import amazon from '../assets/amazon.png';
import accenture from '../assets/accenture.png';
import google from '../assets/google.png';
import infosys from '../assets/infosys.png';
import ibm from '../assets/IBM.png';
import tcs from '../assets/tcs.png';
import wipro from '../assets/wipro.jpg';

const Placement = () => {
  const recruiters = [
    { name: "Microsoft", logo: microsoft },
    { name: "Google", logo: google},
    { name: "Amazon", logo: amazon },
    { name: "IBM", logo: ibm },
    { name: "TCS", logo: tcs },
    { name: "Infosys", logo: infosys },
    { name: "Wipro", logo: wipro },
    { name: "Accenture", logo: accenture }
  ];

  return (
    <div className="placement-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Placement & Career Services</h1>
          <p>Your Gateway to Successful Careers</p>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="placement-stats">
        <div className="container">
          <h2>Placement Statistics 2024</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>98.5%</h3>
              <p>Placement Rate</p>
            </div>
            <div className="stat-card">
              <h3>₹45 LPA</h3>
              <p>Highest Package</p>
            </div>
            <div className="stat-card">
              <h3>₹8.5 LPA</h3>
              <p>Average Package</p>
            </div>
            <div className="stat-card">
              <h3>500+</h3>
              <p>Companies Visited</p>
            </div>
            <div className="stat-card">
              <h3>2000+</h3>
              <p>Students Placed</p>
            </div>
            <div className="stat-card">
              <h3>150+</h3>
              <p>Dream Offers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Recruiters */}
      <section className="recruiters">
        <div className="container">
          <h2>Our Esteemed Recruiters</h2>
          <div className="recruiters-grid">
            {recruiters.map((recruiter, index) => (
              <div key={index} className="recruiter-card">
                <img src={recruiter.logo} alt={recruiter.name} />
                <h4>{recruiter.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="placement-process">
        <div className="container">
          <h2>Placement Process</h2>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h4>Pre-Placement Training</h4>
                <p>Comprehensive training in soft skills, technical skills, and interview preparation</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h4>Resume Building</h4>
                <p>Professional guidance in creating impressive resumes and portfolios</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h4>Company Visits</h4>
                <p>Regular campus visits by top companies for recruitment drives</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h4>Interview Process</h4>
                <p>Multiple rounds including technical, HR, and group discussions</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">5</div>
              <div className="timeline-content">
                <h4>Job Offer</h4>
                <p>Final selection and job offer with competitive packages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="training-programs">
        <div className="container">
          <h2>Training Programs</h2>
          <div className="training-grid">
            <div className="training-card">
              <i className="fas fa-comments"></i>
              <h4>Soft Skills Training</h4>
              <p>Communication, leadership, teamwork, and personality development</p>
            </div>
            <div className="training-card">
              <i className="fas fa-code"></i>
              <h4>Technical Training</h4>
              <p>Latest technologies, programming languages, and industry tools</p>
            </div>
            <div className="training-card">
              <i className="fas fa-user-tie"></i>
              <h4>Interview Preparation</h4>
              <p>Mock interviews, group discussions, and presentation skills</p>
            </div>
            <div className="training-card">
              <i className="fas fa-briefcase"></i>
              <h4>Industry Exposure</h4>
              <p>Industrial visits, internships, and guest lectures by industry experts</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="placement-cta">
        <div className="container">
          <h2>Ready to Start Your Career Journey?</h2>
          <p>Join PCTE and get placed in top companies with attractive packages</p>
          <a href="/apply-now" className="btn btn-primary">Apply Now</a>
        </div>
      </section>
    </div>
  );
};

export default Placement;