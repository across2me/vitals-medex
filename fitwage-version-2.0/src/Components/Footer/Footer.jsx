// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/IMG/Vitals.jpg";
import Home from "../../assets/SVG/home.svg";
import Location from "../../assets/SVG/location.svg";
import Phone from "../../assets/SVG/phone.svg";
import Email from "../../assets/SVG/mail.svg";

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer>
      <div className="footer__main">
        <div className="left-col">
          <img src={Logo} alt="" />
          <p>
            We&#39;re your partners in achieving optimal health through
            exercise. Our team of certified medical exercise specialists is
            dedicated to improving lives through personalized, science-based
            exercise programs.
          </p>
        </div>
        <div className="middle-col">
          <h2>Quick Links</h2>
          <div className="service-link">
            <a href="">Post- stroke Rehabilitation</a>
            <a href="">Diabetes Control</a>
            <a href="">Hypertension Management</a>
            <a href="">Post-surgery Rehabilitation</a>
            <a href="">Weight management</a>
          </div>
        </div>
        <div className="right-col">
          <h2>Get In Touch</h2>
          <div className="contact">
            <img src={Home} alt="" />
            <p>Vitals Medical Exercise Consulting</p>
          </div>
          <div className="contact">
            <img src={Location} alt="" />
            <p>
              Road 7, Block 13 <br />
              Federal Housing Estate,
              <br />
              (Inside Hotels & Suites)
              <br />
              Calabar, Nigeria
            </p>
          </div>
          <div className="contact">
            <img src={Email} alt="" />
            <p>info@vitalsmedicalexercise.com</p>
          </div>
          <div className="contact">
            <img src={Phone} alt="" />
            <p>
              <p>
                +234 803-674-8481 <br />
                +234 703-902-3615
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>
          Copyright 2018 - {currentYear} |{" "}
          <a href="#">Vitals Medical Exercise</a> | All Rights Reserved |
        </p>
        <div className="social__media">
          <a href="#" className="social__media-link facebook">
            <BiLogoFacebook />
          </a>
          <a href="#" className="social__media-link twitter">
            <FaXTwitter />
          </a>
          <a href="#" className="social__media-link instagram">
            <BiLogoInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
