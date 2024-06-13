import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import SkillSet from './components/skill-set/Skill-set';
import Projects from './components/projects/Projects';
import Blog from './components/blogs/Blogs';
import Contact from './components/contact/Contact';
import GoToTop from './components/go-to-top/Go-to-top';

import './App.css';

const App = () => {
  return (
    <div className="app-container"> 
      <Header />
      <About />
      <SkillSet />
      <Projects />
      <Blog />
      <Contact />
      <GoToTop />
    </div>
  );
};

export default App;
