
import React, { useEffect } from "react";
import "./Contact.css";
import contact1 from "./assets/contact1.jpg"
import SendEnquiry from "./SendEnquiry";


const Contact = () => {
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  return (
    <div className="contact-page">


      <section className="contact-hero">
        <div className="overlay">
          <h1>Contact BHŪMI Farming Testing Laboratory</h1>
          <p>Reach out to us for Soil, Water, Seed & Fertilizer Testing</p>
        </div>
      </section>

     
      <section className="contact-content container my-5">
        <div className="row">

        
        <div
  className="col-md-6 contact-info mb-4"
  style={{ textAlign: "center", alignContent: "center" }}
>
  <img
    src={contact1}
    alt="error"
    style={{ width: "120px", height: "120px", marginBottom: "20px" }}
  />

  <p><i className="bi bi-geo-alt-fill me-2"></i><strong>Address:</strong> Kakinada, Andhra Pradesh, India</p>
  <p><i className="bi bi-envelope-fill me-2"></i><strong>Email:</strong>  info@bhumilab.com</p>
  <p><i className="bi bi-telephone-fill me-2"></i><strong>Phone:</strong> +91 98765 43210</p>
  <p><i className="bi bi-clock-fill me-2"></i><strong>Working Hours:</strong> Mon - Sat, 9 AM - 6 PM</p>

  {/* Extra Content Below */}
  <p><i className="bi bi-person-lines-fill me-2"></i><strong>Lab Incharge:</strong> Dr. Rakesh Kumar</p>
  <p><i className="bi bi-building-check me-2"></i><strong>ISO Certified:</strong> ISO 9001:2015 Lab</p>
  <p><i className="bi bi-droplet-fill me-2"></i><strong>Specialised In:</strong> Soil, Water & Seed Testing</p>
  <p><i className="bi bi-globe-americas me-2"></i><strong>Website:</strong> www.bhumi-testing.com</p>
</div>

        
          <SendEnquiry/>
       

        </div>
      </section>

      {/* Google Map */}
      <section className="map-section container">
        <iframe
          title="bhumi-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.123456!2d79.000123!3d12.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1234567890abcd%3A0x123456789abcdef!2sFarming%20Lab!5e0!3m2!1sen!2sin!4v1698888888888!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
};

export default Contact;
