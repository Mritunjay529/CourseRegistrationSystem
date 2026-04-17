import React from 'react';
import './Courses.css';
import cse from '../assets/cse.webp';
import aiml from '../assets/aiml.webp';
import mechanical from '../assets/mechanical.webp';
import civil from '../assets/civil.webp';
import pcte from '../assets/pcte.pdf';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Computer Science Engineering",
      duration: "4 Years",
      degree: "B.Tech",
      image: cse,
      description: "Master the fundamentals of programming, algorithms, data structures, and software development. Learn cutting-edge technologies including web development, mobile apps, and cloud computing.",
      subjects: ["Programming Languages", "Data Structures", "Algorithms", "Database Systems", "Software Engineering", "Web Development", "Mobile Development", "Cloud Computing"],
      career: ["Software Developer", "System Analyst", "Web Developer", "Mobile App Developer", "Data Scientist", "Cybersecurity Specialist"]
    },
    {
      id: 2,
      title: "AI/ML Engineering",
      duration: "4 Years",
      degree: "B.Tech",
      image: aiml,
      description: "Dive into the world of Artificial Intelligence and Machine Learning. Learn to build intelligent systems, neural networks, and data-driven solutions for modern challenges.",
      subjects: ["Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision", "Natural Language Processing", "Data Mining", "Robotics", "AI Ethics"],
      career: ["AI Engineer", "Machine Learning Scientist", "Data Scientist", "Research Scientist", "AI Product Manager", "Robotics Engineer"]
    },
    {
      id: 3,
      title: "Mechanical Engineering",
      duration: "4 Years",
      degree: "B.Tech",
      image: mechanical,
      description: "Design, build, and maintain mechanical systems. Learn about thermodynamics, fluid mechanics, manufacturing processes, and advanced engineering materials.",
      subjects: ["Thermodynamics", "Fluid Mechanics", "Manufacturing Processes", "Machine Design", "Heat Transfer", "Materials Science", "Robotics", "Automotive Engineering"],
      career: ["Mechanical Engineer", "Design Engineer", "Manufacturing Engineer", "Automotive Engineer", "Aerospace Engineer", "Project Manager"]
    },
    {
      id: 4,
      title: "Civil Engineering",
      duration: "4 Years",
      degree: "B.Tech",
      image: civil,
      description: "Plan, design, and construct infrastructure projects. Learn about structural engineering, transportation systems, environmental engineering, and sustainable construction.",
      subjects: ["Structural Engineering", "Transportation Engineering", "Environmental Engineering", "Geotechnical Engineering", "Construction Management", "Building Design", "Water Resources", "Sustainable Construction"],
      career: ["Civil Engineer", "Structural Engineer", "Construction Manager", "Project Engineer", "Urban Planner", "Environmental Consultant"]
    }
  ];

  return (
    <div className="courses-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Engineering Courses</h1>
          <p>Choose from our industry-aligned engineering programs</p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-section">
        <div className="container">
          <div className="courses-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card-detailed">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <div className="course-badge">
                    <span>{course.degree}</span>
                  </div>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <div className="course-meta">
                    <span className="duration">
                      <i className="fas fa-clock"></i>
                      {course.duration}
                    </span>
                    <span className="degree">
                      <i className="fas fa-graduation-cap"></i>
                      {course.degree}
                    </span>
                  </div>
                  <p>{course.description}</p>
                  
                  <div className="course-details">
                    <h4>Key Subjects</h4>
                    <div className="subjects-list">
                      {course.subjects.map((subject, index) => (
                        <span key={index} className="subject-tag">{subject}</span>
                      ))}
                    </div>
                    
                    <h4>Career Opportunities</h4>
                    <div className="career-list">
                      {course.career.map((career, index) => (
                        <span key={index} className="career-tag">{career}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="course-actions">
                    <a href="/apply-now" className="btn btn-primary">Apply Now</a>
                    <button className="btn btn-secondary">
                    <a href={pcte} download={pcte}> Download Brouchre</a></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="admission-process">
        <div className="container">
          <h2>Admission Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Application</h4>
              <p>Submit your application form with required documents</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Entrance Exam</h4>
              <p>Appear for JEE Main or PCTE entrance examination</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Counseling</h4>
              <p>Attend counseling session based on merit and preference</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Admission</h4>
              <p>Complete admission formalities and fee payment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;