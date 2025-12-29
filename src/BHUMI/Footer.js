import React from 'react'
import "./Style.css"
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row">

    
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="footer-logo">BHŪMI Farming Testing Lab</h4>
            <p>
              Accurate soil, water, seed, and fertilizer testing to help farmers 
              grow smarter, healthier, and more profitable crops.
            </p>
          </div>

         
          <div className="col-lg-2 col-md-6 mb-4" style={{ textAlign: "center" }}>
            <h5 className="footer-title">Quick Links</h5>
           <ul className="footer-links">
  <li>
    <i className="bi bi-house-door me-2"></i>
    <NavLink to="/home" style={{ textDecoration: "none", color: "inherit" }}>
      Home
    </NavLink>
  </li>

  <li>
    <i className="bi bi-info-circle me-2"></i>
    <NavLink to="/about" style={{ textDecoration: "none", color: "inherit" }}>
      About
    </NavLink>
  </li>

  <li>
    <i className="bi bi-grid me-2"></i>
    <NavLink to="/services" style={{ textDecoration: "none", color: "inherit" }}>
      Services
    </NavLink>
  </li>

  <li>
    <i className="bi bi-telephone me-2"></i>
    <NavLink to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
      Contact
    </NavLink>
  </li>
</ul>

          </div>
       
          <div className="col-lg-3 col-md-6 mb-4" style={{ textAlign: "center" }}>
            <h5 className="footer-title">Our Tests</h5>
            <ul className="footer-links">
              <li><i className="bi bi-flower3 me-2"></i> Soil Testing</li>
              <li><i className="bi bi-droplet-half me-2"></i> Water Testing</li>
              <li><i className="bi bi-beaker me-2"></i> Fertilizer Testing</li>
              <li><i className="bi bi-emoji-sunglasses me-2"></i> Seed Quality Testing</li>
            </ul>
          </div>

         
          <div className="col-lg-3 col-md-6 mb-4" style={{ textAlign: "center" }}>
            <h5 className="footer-title">Contact Us</h5>
            <p><i className="bi bi-geo-alt me-2"></i> Location: Kakinada</p>
            <p><i className="bi bi-telephone-outbound me-2"></i> +91 98765 43210</p>
            <p><i className="bi bi-envelope me-2"></i> info@bhumilab.com</p>
          </div>

        </div>

        <hr />

        <div className="text-center py-2">
          <p className="m-0">&copy;2025 BHŪMI Farming Testing Lab — All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
