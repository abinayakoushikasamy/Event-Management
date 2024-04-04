import React, { useEffect } from 'react';
import '../assets/about.css';
const About = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".card-buttons button");
    const sections = document.querySelectorAll(".card-section");
    const card = document.querySelector(".card");

    const handleButtonClick = (e) => {
      const targetSection = e.target.getAttribute("data-section");
      const section = document.querySelector(targetSection);
      targetSection !== "#about"
        ? card.classList.add("is-active")
        : card.classList.remove("is-active");
      card.setAttribute("data-state", targetSection);
      sections.forEach((s) => s.classList.remove("is-active"));
      buttons.forEach((b) => b.classList.remove("is-active"));
      e.target.classList.add("is-active");
      section.classList.add("is-active");
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", handleButtonClick);
    });

    return () => {
      // Cleanup event listeners if necessary
      buttons.forEach((btn) => {
        btn.removeEventListener("click", handleButtonClick);
      });
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className="card" data-state="#about">
      {/* ... (rest of your HTML/JSX code) ... */}
    </div>
  );
};

export default About;
