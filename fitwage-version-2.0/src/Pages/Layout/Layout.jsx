// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from "../../Components/Header/NavBar";
import Footer from "../../Components/Footer/Footer";

function Layout() {
  return (
    <>
      <Nav />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
