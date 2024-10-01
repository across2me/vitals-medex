// eslint-disable-next-line no-unused-vars
import React from "react";
import "./FooterBottom.css";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

function FooterBottom() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="footer__bottom">
      <div className="copy-right">
        <p>
          Copyright 2018 - {currentYear} |{" "}
          <a href="#">Vitals Medical Exercise</a> | All Rights Reserved |
        </p>
      </div>
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
  );
}

export default FooterBottom;
