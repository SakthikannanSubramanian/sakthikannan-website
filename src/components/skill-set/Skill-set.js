import React, { useState } from 'react';
import './Skill-set.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const skillSetData = {
  "External Certifications": [
    "ISTQB ISEB",
    "CSM Certified Scrum Master",
    "INS21 Certified"
  ],
  "Domains Industry": [
    "Retail (RCG)",
    "Insurance",
    "Information Media & Entertainment"
  ],
  "Areas Of Expertise": [
    "Functional Testing",
    "Integration Testing",
    "Non-Functional Testing",
    "Data Migration Testing",
    "Contract Testing",
    "Defect Fixes & Enhancements"
  ],
  "Automation Tools Technologies": [
    "Automate Applications: WebUI, API, Database, Mobile, POS",
    "Automate Stack: Unit, Jest, Mocha/Chai",
    "Functional/Integration/E2E: Selenium WD, WDIO, Codecept, Cypress, Playwright, BDD Cucumber, REST Assured, JUST Api, Puppeteer, UFT",
    "Performance Testing: Jmeter, Gatling, Sitespeed.io/Lighthouse",
    "Accessibility Testing: AXE, Lighthouse",
    "Browser Compatibility Testing: BrowserStack",
    "Mobile Automation Testing: Appium",
    "Contract Testing: Pact",
    "Visual Regression Testing: Percy, Resemble.js, Applitools",
    "Web Service Development: Springboot",
    "Web Front End Development: React, React Native, Redux.js, GraphQL"
  ],
  "Programming Languages": [
    "Javascript",
    "Java",
    "VisualBasic",
    "Python - Intermediate",
    "Kotlin - Intermediate"
  ],
  "Test Management": [
    "JIRA",
    "Test Rail",
    "Version One",
    "HPALM"
  ],
  "Log Visualization": [
    "Kibana",
    "Grafana",
    "Splunk"
  ],
  "Build Automation CICD": [
    "Maven",
    "Gradle",
    "Jenkins (Pipeline)",
    "Docker (Containerization)"
  ],
  "Code Quality": [
    "SonarQube",
    "Sentry"
  ],
  "Version Control": [
    "GIT LAB",
    "Bitbucket",
    "SVN"
  ],
  "Mocking": [
    "Wiremock",
    "SuperAgent"
  ]
};

const SkillSet = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category]
    }));
  };

  return (
    <div id="skillset" className='section'>
        <h2>Skill Set</h2>
        <div className='inner-section'>

      {Object.entries(skillSetData).map(([category, skills]) => (
        <div key={category}>
          <h4 onClick={() => toggleCategory(category)} className="category-header">
            {category}
            <FontAwesomeIcon
              icon={expandedCategories[category] ? faChevronDown : faChevronRight}
              className="chevron"
            />
          </h4>
          <div className={`skills-list ${expandedCategories[category] ? 'open' : 'closed'}`}>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SkillSet;
