import React from 'react';
import './About.css';
import about from '../assets/about-img.webp';
import sk from '../assets/sk.webp';
import pk from '../assets/pk.webp';
import kp from '../assets/kp.webp';
import lab from '../assets/lab.webp';
import sports from'../assets/sports.png'
import hostel from '../assets/guest-house.webp'


const About = () => {
  return (
    <div className="about-page">
      {/* About1 Section */}
      <section className="page-hero">
        <div className="container">
          <h1>About PCTE Group of Institutes</h1>
          <p>Excellence in Technical Education Since 1999</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                PCTE Group of Institutes was established in 1999 with a vision to provide 
                world-class technical education in Punjab. Over the years, we have grown 
                to become one of the leading engineering institutions in North India.
              </p>
              <p>
                Our commitment to excellence in education, research, and innovation has 
                helped us build a strong reputation in the academic community. We focus 
                on developing skilled professionals who can meet the challenges of the 
                modern industry.
              </p>
            </div>
            <div className="about-image">
              <img src={about} alt="Campus building" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>
                To provide quality technical education that prepares students for 
                successful careers in engineering and technology, fostering innovation 
                and entrepreneurship.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                To be a globally recognized institution of higher learning that 
                contributes to the advancement of science, technology, and society 
                through excellence in education and research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="highlights">
        <div className="container">
          <h2>Key Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <i className="fas fa-award"></i>
              <h4>AICTE Approved</h4>
              <p>All programs are approved by AICTE and affiliated with Punjab Technical University.</p>
            </div>
            <div className="highlight-item">
              <i className="fas fa-microscope"></i>
              <h4>Research Excellence</h4>
              <p>Active research programs with publications in international journals.</p>
            </div>
            <div className="highlight-item">
              <i className="fas fa-industry"></i>
              <h4>Industry Partnerships</h4>
              <p>Strong ties with leading companies for internships and placements.</p>
            </div>
            <div className="highlight-item">
              <i className="fas fa-globe"></i>
              <h4>Global Exposure</h4>
              <p>International collaborations and student exchange programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="leadership">
        <div className="container">
          <h2>Our Leadership</h2>
          <div className="leadership-grid">
            <div className="leader-card">
              <img src={sk} alt="Director" />
              <h4>Dr Surjit Kumar Gandhi</h4>
              <h5>Director cum Principal</h5>
              <p>Ph.D. (Industrial & Production Engineering) – Dr. B. R. Amdedkar National Institute of Technology, Jalandhar in year (2018).</p>
              <p>M.Tech. (Industrial Engineering) – GNDEC Ludhiana affiliated to IKG PTU Jalandhar in year (2004).</p>
              <p>B.Tech. (Mechanical Machine Design & Automation Engineering) – REC (now NIT) Jalandhar in year (1997).</p>
            </div>
            <div className="leader-card">
              <img src={pk}alt="Principal" />
              <h4>Ms Prabhjot Kaur</h4>
              <h5>Dean Academics</h5>
              <p>B.Sc( Non-Medical) – Punjab University </p>
             
              <p>B.Ed – Punjab University  </p>
              <p>PGDCA  – Kurkshetra University  </p>
              <p>M.Sc (Maths) – G.N.D.U  </p>
              <p>M.Phil (Maths) – Algappa  University </p>
            </div>
            <div className="leader-card">
              <img src={kp} alt="HOD" />
              <h4>Dr Kapil Prashar</h4>
              <h5>Dean</h5>
              <p>P.hD (Image Processing) from I.K Gujral Punjab Technical University, Jalandhar.</p>
              <p>M.Tech (CSE) from Lovely Professional University secured First Division (9.2 CGPA) in June 2010.</p>
              <p>Master of Business Administration (Marketing) from IGNOU, secured First Division in May 2003.</p>
              <p>B.E. (Electronics) from Nagpur University secured First Division (68.64%) in June 2001.</p>
              <p>Diploma in Computer Programming and Applications from TULEC (Tata Unisys Ltd. Edu. Centre), secured Grade – Merit [80 – 71%] in June 1997.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="facilities">
        <div className="container">
          <h2>World-Class Facilities</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <img src="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Library" />
              <h4>Digital Library</h4>
              <p>Extensive collection of books, journals.</p>
            </div>
            <div className="facility-card">
              <img src={lab} alt="Labs" />
              <h4>Modern Labs</h4>
              <p>State-of-the-art laboratories with latest equipment and software.</p>
            </div>
            <div className="facility-card">
              <img src={hostel}alt="Hostels" />
              <h4>Hostels</h4>
              <p>Comfortable accommodation with all modern amenities.</p>
            </div>
            <div className="facility-card">
              <img src={sports} alt="Sports" />
              <h4>Sports Complex</h4>
              <p>Complete sports facilities for physical fitness and recreation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;