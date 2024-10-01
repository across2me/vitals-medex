// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link, Outlet } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import BenefitContainer from "./Benefits/BenefitContainer.jsx";
import ProcedureComponent from "./Procedure/ProcedureComponent.jsx";
import Faq from "./Faq/Faq.jsx";
import Testimonials from "./Testimonials/Testimonials.jsx";

function Home() {
  return (
    <div>
      <div className="hero">
        <HeroSlider />
      </div>
      <div className="benefits">
        <BenefitContainer />
      </div>
      <div className="procedures">
        <ProcedureComponent />
      </div>
      <div className="testimonials">
        <Testimonials />
      </div>
      <div>
        <Faq />
      </div>
    </div>
  );
}

export default Home;
