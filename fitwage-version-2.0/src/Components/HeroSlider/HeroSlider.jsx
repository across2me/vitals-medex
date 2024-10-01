// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

const HeroSlider = () => {
  const contents = [
    {
      title: "Empowering Your Recovery Journey",
      subtitle:
        "Personalized exercise plans for stroke recovery, chronic disease management, and obesity.",
      buttonLabel: "Book Appointment",
    },
    {
      title: "Certified Medical Exercise Specialist",
      subtitle:
        "Over 10 years of experience in helping clients achieve long-term",
      buttonLabel: "View Success Stories",
    },
    {
      title: "Transform Your Health with Tailored Exercise programs",
      subtitle:
        "Focusing on functional training that meets your unique health needs.",
      buttonLabel: "Learn More",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 7000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [contents.length]);

  const handleButtonClick = () => {
    alert(`Button clicked: ${contents[currentIndex].buttonLabel}`);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1 className="display-title">{contents[currentIndex].title}</h1>
      <p>{contents[currentIndex].subtitle}</p>
      <button onClick={handleButtonClick}>
        {contents[currentIndex].buttonLabel}
      </button>
    </div>
  );
};

export default HeroSlider;
