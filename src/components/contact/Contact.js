import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const contactData = {
  "email": "sakthikannan.subramanian@gmail.com",
  "linkedin": "https://www.linkedin.com/in/sakthikannan-subramanian-b5a023aa/",
  "twitter": "https://twitter.com/uk_sakthi",
  "instagram": "https://www.instagram.com/uk_sakthii/",
  "github": "https://github.com/SakthikannanSubramanian"
};

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>
        <a href={`mailto:${contactData.email}`}>
          <FontAwesomeIcon icon={faEnvelope} /> {contactData.email}
        </a>
      </p>
      <p>
        <a href={contactData.linkedin}>
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </p>
      <p>
        <a href={contactData.twitter}>
          <FontAwesomeIcon icon={faTwitter} /> Twitter
        </a>
      </p>
      <p>
        <a href={contactData.instagram}>
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
      </p>
      <p>
        <a href={contactData.github}>
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </p>
    </section>
  );
};

export default Contact;
