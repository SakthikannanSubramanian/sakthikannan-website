import React from "react";

const aboutData = {
  description: [
    "Current Lead Automation Quality Engineer for a major retail client undergoing digital transformation and e-commerce replatforming, also acting as Test Lead from Cognizant to support client delivery onshore and offshore. With over 15 years of Software Quality Assurance experience, I specialize in Manual, Automation, Agile, Web, and Mobile applications across Insurance and Retail domains. I have 7+ years of onshore client experience in the UK.",
    "Proficient in advanced agile methodologies including shift-left implementation, pair programming, and risk-based testing. Experienced as a Test Coach, introducing concepts like three amigos and contract testing. Skilled in REST API automation and web development using JavaScript, React, and Redux. I hold certifications in ISTQB/ISEB, Scrum Master, and INS21. Expert in test management, continuous integration, and automation framework development. I excel in communication, team collaboration, and delivering high-quality results under tight deadlines."
  ]
};

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      {aboutData.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  );
};

export default About;
