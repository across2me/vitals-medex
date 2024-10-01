// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/IMG/Vitals Logo1112.jpg";
import "./NavBar.css";
import { Link } from "react-router-dom";
import OpenMenu from "../../assets/SVG/open_menu.svg";
import CloseMenu from "../../assets/SVG/close_menu.svg";

function NavBar() {
  const [Toggler, setToggler] = useState(false);
  const menuRef = useRef(null);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggler(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav>
      <div className="nav__brand">
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="nav__right">
        <div className="nav__links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="nav__menu" ref={menuRef}>
          {Toggler ? (
            <img
              src={CloseMenu}
              alt="Close menu"
              onClick={() => setToggler(false)}
            />
          ) : (
            <img
              src={OpenMenu}
              alt="Open menu"
              onClick={() => setToggler(true)}
            />
          )}
          {Toggler && (
            <ul className="menu__list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
