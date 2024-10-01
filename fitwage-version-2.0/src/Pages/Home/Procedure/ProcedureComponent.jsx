// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Procedure/ProcedureComponent.css";
import { description, offerContent, title } from "./ProcedureComponentContents";

const ProcedureComponent = () => {
  return (
    <div className="procedure-container">
      <div className="procedure-title">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="card-container">
        {offerContent.map((item, index) => (
          <div key={index} className="card">
            {/* <img src={item.image} alt="" /> */}
            <h3 className="card-number">{item.id}</h3>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {/* <a href="#">Learn more</a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcedureComponent;
