import React, { useEffect } from "react";
import "./Home.css";
import Home1 from "./assets/home1.webp";
import Home2 from "./assets/home2.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <section className="main-background">
        <div className="main-content">
          <h1>Accurate Soil Testing for Better Crop Yields</h1>
          <p>
            Get scientific soil analysis, crop recommendations, and nutrient
            guidance to improve productivity and reduce farming costs.
          </p>
          <div className="butt">
            <NavLink to={"/reportcheck"}>
            
              <button className="me-2 one">Check Report</button>
            </NavLink>

            <NavLink to={"/about"}>
              <button className="two">Learn More</button>
            </NavLink>
          </div>
        </div>
      </section>
      <section className="Home-about container">
        <div className="row mt-4">
          <div className="col-lg-6 soil-section">
            <h2 className="mt-5">Know Your Soil. Grow Smarter.</h2>

            <p >
              At <strong>BHUMI</strong>, we help farmers understand their soil
              better through advanced testing and scientific analysis. Our
              laboratory uses modern technology to evaluate soil nutrient
              levels, pH balance, organic matter percentage, moisture content,
              and possible contamination.
            </p>

            <p>
              Based on the test results, we provide personalised recommendations
              for fertilisers, crop rotation, soil improvement techniques, and
              efficient water management.
            </p>

            <p>
              Our mission is simple
              <strong>
                empowering farmers with accurate scientific data to grow
                healthier crops, reduce farming costs, and increase overall
                profits.
              </strong>
            </p>

            <ul>
              <li>Government-approved testing methods</li>
              <li>Quick and easy sample collection</li>
              <li>Transparent and highly accurate reports</li>
              <li>Expert agronomist recommendations</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img
              src={Home1}
              alt="error"
              style={{
                width: "100%",
                height: "420px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        </div>
      </section>
      <section className="services-section mt-3 container">
  <h2>Our Testing Services</h2>
  <p className="services-subtitle">
    Scientific testing solutions to improve soil health, water purity, and crop quality.
  </p>
<div className="container">
 <div className="row g-4">
    <div className="col-lg-3 col-md-6">
      <div className="service-card">
        <div className="service-icon"><i className="bi bi-flower1"></i></div>
        <h3>Soil Testing</h3>
        <p>We analyze pH, EC, organic carbon, NPK levels, and micronutrients for healthier crops.</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6">
      <div className="service-card">
        <div className="service-icon">   <i className="bi bi-droplet-fill"></i></div>
        <h3>Water Testing</h3>
        <p>Check water salinity, hardness, pH levels, and bacterial contamination for safe irrigation.</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6">
      <div className="service-card">
        <div className="service-icon"><i className="bi bi-egg-fill"></i></div>
        <h3>Seed Testing</h3>
        <p>We test seed purity, germination rate, and moisture levels for better crop yield.</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6">
      <div className="service-card">
        <div className="service-icon"> <i className="bi bi-beaker"></i></div>
        <h3>Fertilizer Testing</h3>
        <p>Ensures nutrient composition and quality accuracy for effective crop nutrition.</p>
      </div>
    </div>
  </div>
</div>
 
</section>

      <section className="How-it-works container mt-5">
        <h2 className="section-title">
          Simple, Fast, and Farmer-Friendly Process
        </h2>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-6 col-lg-4">
              <h4>Step 1: Register / Book a Test</h4>
              <p>Choose your test package and enter your land details.</p>
            </div>

            <div className="col-md-6 col-lg-4">
              <h4>Step 2: Collect Soil Sample</h4>
              <p>Get our easy sample collection guide or request a pickup.</p>
            </div>

            <div className="col-md-6 col-lg-4">
              <h4>Step 3: Laboratory Testing</h4>
              <p>
                Your sample is analysed using advanced scientific equipment.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 ">
              <h4>Step 4: Receive Reports</h4>
              <p>
                Get a detailed, easy-to-understand soil health report on
                WhatsApp / email.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 ">
              <h4>Step 5: Expert Guidance</h4>
              <p>
                Our agronomists explain the results and provide personalised
                advice.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 ">
              <img
                src={Home2}
                style={{ width: "100%", height: "120px" }}
                alt="error"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="benefits-section py-5">
  <div className="container">
    <h2 className="text-center ">Why Choose BHŪMI Testing Laboratory?</h2>

    <div className="row g-4">

      <div className="col-lg-3 col-md-6">
        <div className="benefit-card text-center p-4">
          <i className="bi bi-graph-up-arrow benefit-icon"></i>
          <h4 color="#873618">Accurate Results</h4>
           <p className="fs-6 fw-medium" style={{color:"black"}}>We use advanced equipment to ensure precise and reliable test reports every time.</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="benefit-card text-center p-4">
          <i className="bi bi-clock-history benefit-icon"></i>
          <h4>Quick Processing</h4>
           <p className="fs-6 fw-medium" style={{color:"black"}}>Get your soil, water, seed, and fertilizer test results in a short turnaround time.</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="benefit-card text-center p-4">
          <i className="bi bi-people-fill benefit-icon"></i>
          <h4>Expert Guidance</h4>
           <p className="fs-6 fw-medium" style={{color:"black"}}>Our agricultural experts help you understand reports and improve crop productivity.</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="benefit-card text-center p-4">
          <i className="bi bi-shield-check benefit-icon"></i>
          <h4>Trusted by Farmers</h4>
           <p className="fs-6 fw-medium" style={{color:"black"}}>We are chosen by thousands of farmers for reliable agricultural testing services.</p>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="testimonials-section py-5">
  <div className="container">
    <h2 className="text-center  ">What Farmers Say</h2>

    <div className="row g-4">

      <div className="col-lg-4 col-md-6 ">
        <div className="testimonial-card h-100 p-4">
          <i className="bi bi-chat-quote-fill testimonial-icon"></i>
           <p className="fs-6 fw-medium" style={{color:"black"}}>
            "The soil test helped me understand what nutrients my land was missing. My crop yield improved greatly!"
          </p>
          <h5 style={{color:"black"}}>— Ramesh, Farmer</h5>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="testimonial-card h-100 p-4">
          <i className="bi bi-chat-quote-fill testimonial-icon"></i>
          <p className="fs-6 fw-medium" style={{color:"black"}}>
            "Water testing results were quick and accurate. Now I use only safe water for my crops."
          </p>
          <h5 style={{color:"black"}}>— Lakshmi, Agriculture Worker</h5>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="testimonial-card p-4 h-100">
          <i className="bi bi-chat-quote-fill testimonial-icon"></i>
          <p className="fs-6 fw-medium" style={{color:"black"}}>
            "Very helpful team! They explained the fertilizer report clearly and guided me on usage."
          </p>
          <h5 style={{color:"black"}}>— Suresh, Organic Farmer</h5>
        </div>
      </div>

    </div>
  </div>
</section>


    </>
  );
};

export default Home;
