import React, { useState } from 'react';
import './Projects.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const projectsData = [
  {
    company: 'Waitrose & Partners - Retail',
    dates: 'Jan 2017 - PRESENT',
    title: 'Software Development Engineer in Test',
    responsibilities: [
      'Automating Web and API application functional tests, integration Tests, End 2 End Tests',
      'Implementing Accessibility testing using AXE, LightHouse',
      'Automated Browser Compatibility using BrowserStack',
      'Creating Grafana dashboards for FE Performance and Accessibility using SiteSpeed.io',
      'Rest API Performance testing using JMeter and Gatling',
      'Frontend Web application development using Node.js, React.js and Redux.js',
      'Backend Web services development using Java and SpringBoot',
      'Performing code reviews on Git lab Merge Requests',
      'Taking care of Production deployments by Creating change requests for production deployment and deploying the code to Production',
      'Production log monitoring using Kibana, Grafana and Sentry',
      'Conducting daily Stand ups, Sprint Review and Sprint Retrospectives.',
      'Attending Scrum of Scrums and highlighting Risks foreseen and dependency on different sprints',
    ],
  },
  {
    company: 'Walgreens Boots Alliance (Boots UK) - Retail',
    dates: 'Mar 2015 - Jan 2017',
    title: 'Automation testing team lead',
    responsibilities: [
      'Involved in Design, Execution, and debugging as a part of Automation testing.',
      'Preparing POC (Proof of Concept) for new projects.',
      'Leading an automation team of 8 members.',
      'Part of the Transformation team, enabling the automation team and project to increase automation coverage and improve innovation.',
      'Attending Sprint detailed planning, Planning poker, and Retrospective meetings.',
      'Handling agile scrum calls, Scrum of scrums, and Planning look-ahead meetings.',
      'Estimating new projects and analyzing effort for enhancements of existing functionality.',
      'POC for WSR, Dashboard, and PMR metrics.',
      'Quality Auditing, reviewing test scripts, and frameworks of different teams.',
    ],
  },
  {
    company: 'CSAA – PAS – Exigen Policy Administration System - Insurance',
    dates: 'Jan 2010 - Mar 2015',
    title: 'Automation Test Engineer',
    responsibilities: [
      'Creating Automation frameworks using UFT and providing solutions.',
      'Creating Test Scenarios, Test cases, and Test data preparation.',
      'Developing on-demand tools and macros.',
      'Implementing Time Point testing for Billing and Renewals, Interface testing, and Web service testing.',
      'Conducting Insurance Premium RATE testing.',
      'Managing Metrics (WSR, Dashboard, and PMR) and QC management.',
    ],
  },
];

const Projects = () => {
    const [expandedProjects, setExpandedProjects] = useState({});
  
    const toggleProject = (index) => {
      setExpandedProjects((prevProjects) => ({
        ...prevProjects,
        [index]: !prevProjects[index]
      }));
    };
  
    return (
      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul>
          {projectsData.map((project, index) => (
            <li key={index} className="project-item">
              <div className="project-header" onClick={() => toggleProject(index)}>
                <strong>{project.company} — {project.dates}:</strong>
                <FontAwesomeIcon
                    icon={expandedProjects[index] ? faChevronDown : faChevronRight}
                    className="chevron"
                />
              </div>
              {expandedProjects[index] && (
                <div className="project-details">
                  <br/>  
                  <label>{project.title}</label>
                  <br/>
                  <br/>
                  <b>Roles & Responsibilities:</b>
                  <br/>
                  <ul>
                    {project.responsibilities.map((responsibility, i) => (
                      <li key={i}> • {responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Projects;
