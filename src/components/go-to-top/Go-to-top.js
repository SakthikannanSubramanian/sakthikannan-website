import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './Go-to-top.css'; // Import CSS file for styling

const GoToTop = () => {
  const [showToTopButton, setShowToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTopButton(window.scrollY > 300); // Show button when scrolled past 300px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  };

  return (
    showToTopButton && (
      <button className="to-top-button" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    )
  );
};

export default GoToTop;
