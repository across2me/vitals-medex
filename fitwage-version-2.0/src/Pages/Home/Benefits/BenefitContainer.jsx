// eslint-disable-next-line no-unused-vars
import React from "react";
import "./BenefitContainer.css";
import { benefits, description, title } from "./BenefitContent";
import { motion } from "framer-motion";

const BenefitContainer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="benefit-container"
    >
      <div className="benefit-title">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="benefit-content">
        <div className="benefit-icon">
          <div className="photo-1"></div>
          <div className="photo-2"></div>
          <div className="photo-3"></div>
        </div>
        <div className="benefit-txt">
          <ul>
            {benefits.map((item, index) => (
              <div key={index}>
                <h3>{item.title}</h3>
                <li>{item.description}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitContainer;
