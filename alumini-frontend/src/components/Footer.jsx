import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo-dark.webp"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

  <div className="footer-container">

    <div className="footer-left">
      {/* <img src={logo} alt="logo" height="50px"/> */}
      <p>
      Established in 2010, kathir Institutions has been a beacon of excellence in higher education.
      </p>
    </div>

    <div className="footer-links">

      <div>
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/institutions">Our Institutions</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div>
        <h3>Institution</h3>
        <a href="#">Engineering & Technology</a>
        <a href="#">Pharmacy</a>
        <a href="#">Nursing</a>
        <a href="#">Allied Health Sciences</a>
      </div>

    </div>

  </div>

  <div className="footer-bottom">

    <p>© 2026 Kathir Educational Institutions</p>

    <div className="social-icons">
      <i className="fab fa-facebook"><FaFacebookF/></i>
      <i className="fab fa-instagram"><FaInstagram/></i>
      <i className="fab fa-linkedin"><FaLinkedinIn/></i>
      <i className="fab fa-youtube"><FaYoutube/></i>
    </div>

  </div>

</footer>
  );
}

export default Footer;