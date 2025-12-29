import React, { useEffect } from "react";
import "./Style.css";
import about1 from "./assets/about1.webp";
import mission from "./assets/mission.webp";
import vision from "./assets/vision.png";
import t1 from "./assets/t1.jpg";
import t2 from "./assets/t2.jpg";
import t3 from "./assets/t3.jpg";
import t4 from "./assets/t4.jpg";

const About = () => {
   useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  return (
    <>
      <section className="about-hero">
        <div className="overlay">
          <h1>About BHŪMI Farming Testing Laboratory</h1>
          <p>
            Empowering farmers with science-based insights for smarter,
            sustainable agriculture.
          </p>
        </div>
      </section>

      <div className="container my-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="fw-bold" style={{ color: "#2E7D32" }}>
              Who We Are
            </h2>
            <p className="mt-3" style={{fontSize:"17px"}}>
              BHŪMI Farming Testing Laboratory is a cutting-edge agricultural
              testing center dedicated to supporting farmers with accurate,
              science-backed insights. We specialize in testing soil, water,
              seeds, and fertilizers to ensure optimum crop growth and
              sustainable farming practices.
            </p>
            <p style={{fontSize:"17px"}}>
              Our expert team combines technology and agronomic expertise to
              provide actionable recommendations, helping farmers improve yield,
              reduce costs, and maintain healthy soil and crops.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={about1}
              alt="error"
              style={{
                width: "100%",
                borderRadius: "10px",
                height: "350px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div className="row my-5 align-items-center">
          <div className="col-md-6">
            <img
              src={mission}
              alt="Mission"
              style={{
                width: "100%",
                borderRadius: "10px",
                height: "350px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold" style={{ color: "#2E7D32" }}>
              Our Mission
            </h2>
            <p className="mt-3" style={{fontSize:"17px"}}>
              To empower farmers with accurate, science-based insights that help
              maximize crop yield, reduce costs, and ensure sustainable soil and
              water management practices. We aim to bridge the gap between
              modern agricultural science and practical farming techniques.
            </p>
          </div>
        </div>

        {/* OUR VISION */}
        <div className="row my-5 align-items-center flex-row-reverse">
          <div className="col-md-6">
            <img
              src={vision}
              alt="error"
              style={{
                width: "100%",
                borderRadius: "10px",
                height: "350px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold" style={{ color: "#2E7D32" }}>
              Our Vision
            </h2>
            <p className="mt-3" style={{fontSize:"17px"}}>
              To become the most trusted agricultural testing partner for
              farmers nationwide, providing accurate lab testing, expert
              recommendations, and innovative solutions that promote sustainable
              and profitable farming practices.
            </p>
          </div>
        </div>

        {/* OUR TEAM */}
        <div className="my-5">
          <h2 className="fw-bold text-center mb-4" style={{ color: "#2E7D32" }}>
            Meet Our Team
          </h2>
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <img
                src={t1}
                alt="Team Member"
                className="mb-3"
                style={{
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
              <h6 className="fw-bold">Dr. Priya Sharma</h6>
              <p>Chief Agronomist</p>
            </div>
            <div className="col-md-3 mb-4">
              <img
                src={t2}
                alt="Team Member"
                className="mb-3"
                style={{
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
              <h6 className="fw-bold">Mr. Rajesh Kumar</h6>
              <p>Lab Head</p>
            </div>
            <div className="col-md-3 mb-4">
              <img
                src={t3}
                alt="Team Member"
                className="mb-3"
                style={{
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
              <h6 className="fw-bold">Ms. Anjali Verma</h6>
              <p>Soil Scientist</p>
            </div>
            <div className="col-md-3 mb-4">
              <img
                src={t4}
                alt="Team Member"
                className="mb-3"
                style={{
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
              <h6 className="fw-bold">Mr. Vikram Singh</h6>
              <p>Water Testing Specialist</p>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h2 className="fw-bold text-center mb-4" style={{ color: "#2E7D32" }}>
            Why Choose Us
          </h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold"> Accurate Reports</h5>
              <p style={{fontSize:"17px"}}>
                ISO-certified and government-approved scientific testing
                methods.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold"> Affordable & Quick</h5>
              <p style={{fontSize:"17px"}}>
                High-quality testing at farmer-friendly prices, with fast report
                delivery.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold"> Expert Guidance</h5>
              <p style={{fontSize:"17px"}}>
                Crop-wise recommendations and personalised agronomist advice for
                better results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
