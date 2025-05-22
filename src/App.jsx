import React from 'react';
import './App.css';
import Hero from './components/home_page/Hero';
import Header from './components/home_page/Header';
import Footer from './components/home_page/Footer';
import Features from './components/home_page/Features';
import Divider from './components/home_page/Divider';
import AboutMe from './components/home_page/Aboutme';
import Projects from './components/projects_page/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated imports for React Router v6

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

const HomePage = () => (
  <>
    <Hero />
    <Divider />
    <Features />
    <Divider />
    <AboutMe />
  </>
);

const ProjectsPage = () => (
  <div>
    <Projects />
  </div>
);

const ContactPage = () => (
  <div>
    <Contact />
  </div>
);

export default App;