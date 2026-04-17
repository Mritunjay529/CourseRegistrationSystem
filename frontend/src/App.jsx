import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Placement from './pages/Placement';
import ApplyNow from './pages/ApplyNow';
import './App.css';
import Cse from './pages/Cse';
import Aiml from './pages/Aiml';
import Mechanical from './pages/Mechanical';
import Civil from './pages/Civil';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/apply-now" element={<ApplyNow />} />
            <Route path="/cse" element={<Cse />} />
            <Route path="/aiml" element={<Aiml />} />
            <Route path="/mechanical" element={<Mechanical />} />
            <Route path="/civil" element={<Civil />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;