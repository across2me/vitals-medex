// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(1)}>
            <h3>1. What is medical exercise?</h3>
            <span>{activeIndex === 1 ? "-" : "+"}</span>
          </div>
          {activeIndex === 1 && (
            <div className="accordion-content">
              <p>
                Medical exercise refers to customized exercise programs designed
                specifically for individuals recovering from injury, chronic
                diseases, or conditions such as stroke. It focuses on improving
                mobility, strength, and overall physical function in a medically
                supervised setting.
              </p>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(2)}>
            <h3>2. What are the benefits of medical exercise?</h3>
            <span>{activeIndex === 2 ? "-" : "+"}</span>
          </div>
          {activeIndex === 2 && (
            <div className="accordion-content">
              <p>
                Medical exercise helps improve physical function, reduces pain,
                enhances mobility, and promotes overall health. It can
                accelerate recovery from injury, manage chronic conditions, and
                improve the quality of life for those with physical limitations
                or disabilities.
              </p>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(3)}>
            <h3>3. Who can benefit from medical exercise?</h3>
            <span>{activeIndex === 3 ? "-" : "+"}</span>
          </div>
          {activeIndex === 3 && (
            <div className="accordion-content">
              <p>
                Medical exercise is beneficial for people with chronic
                conditions such as diabetes, arthritis, heart disease, and
                stroke survivors. It is also helpful for individuals recovering
                from surgery, injury, or those looking to improve their physical
                health with professional guidance.
              </p>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(4)}>
            <h3>4. How is medical exercise different from regular exercise?</h3>
            <span>{activeIndex === 4 ? "-" : "+"}</span>
          </div>
          {activeIndex === 4 && (
            <div className="accordion-content">
              <p>
                Unlike regular exercise, medical exercise is designed and
                supervised by professionals with a focus on treating specific
                medical conditions or injuries. It is tailored to the
                individual&#39;s health status and physical limitations,
                ensuring safe and effective outcomes.
              </p>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(5)}>
            <h3>5. Do I need a doctor’s approval for medical exercise?</h3>
            <span>{activeIndex === 5 ? "-" : "+"}</span>
          </div>
          {activeIndex === 5 && (
            <div className="accordion-content">
              <p>
                In many cases, especially for individuals with chronic
                conditions or recovering from surgery, a doctor&#39;s approval
                is recommended to ensure the exercise program aligns with
                medical treatment. However, a medical exercise specialist can
                work with or without a prescription depending on the
                client&#39;s needs.
              </p>
            </div>
          )}
        </div>

        {/* <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(6)}>
            <h3>
              6. How long does it take to see results from medical exercise?
            </h3>
            <span>{activeIndex === 6 ? "-" : "+"}</span>
          </div>
          {activeIndex === 6 && (
            <div className="accordion-content">
              <p>
                The time it takes to see results varies depending on the
                individual’s condition, the severity of the injury or illness,
                and the consistency of the exercise program. However, most
                clients begin to notice improvements in mobility and function
                within 4-6 weeks of consistent participation.
              </p>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Faq;
