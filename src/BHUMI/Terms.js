import React, { useEffect } from "react";
import "./Style.css";

const Terms = () => {
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  return (
    <section
      style={{
        background: "#F4F7ED",
        padding: "50px 20px"
      }}
    >
      <div
        style={{
          background: "#fff",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 35px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          lineHeight: "1.7",
          color: "#333"
        }}
      >

        <h1
          style={{
            color: "#2E4600",
            fontWeight: "700",
            marginBottom: "25px",
            textAlign: "center"
          }}
        >
          <i className="bi bi-file-text me-2"></i>
          Terms & Conditions
        </h1>

        <p style={{ fontSize: "17px" }}>
          Welcome to <strong>BHŪMI Farming Testing Laboratory</strong>. By
          accessing our website or submitting samples, you agree to the Terms &
          Conditions stated below.
        </p>

        {/* Introduction */}
        <h3 style={{ color: "#6B4226", marginTop: "25px" }}>
          <i className="bi bi-bookmark-check me-2"></i>1. Introduction
        </h3>
        <p style = {{color:"black"}}>
          These Terms govern the use of our website and testing services. If you
          do not agree, please discontinue using our services.
        </p>

        {/* Services */}
        <h3 style={{ color: "#6B4226", marginTop: "25px" }}>
          <i className="bi bi-gear me-2"></i>2. Services Provided
        </h3>
        <p style = {{color:"black"}}>
          We provide Soil, Water, Fertilizer, Seed, and Crop Diagnostic Testing.
          Our reports are based on the quality of the submitted sample.
        </p>

        {/* Sample Submission */}
        <h3 style={{ color: "#6B4226", marginTop: "25px" }}>
          <i className="bi bi-droplet me-2"></i>3. Sample Submission
        </h3>
        <ul>
          <li>
            <i className="bi bi-check-circle-fill me-2 text-success"></i>
            Submit samples strictly as per our guidelines.
          </li>
          <li>
            <i className="bi bi-x-circle-fill me-2 text-danger"></i>
            Incorrect collection may result in inaccurate test results.
          </li>
          <li>
            <i className="bi bi-exclamation-triangle-fill me-2 text-warning"></i>
            Contaminated samples are not the responsibility of the laboratory.
          </li>
        </ul>

        {/* TAT */}
        <h3 style={{ color: "#6B4226", marginTop: "25px" }}>
          <i className="bi bi-stopwatch me-2"></i>4. Turnaround Time
        </h3>
        <p style = {{color:"black"}}>
          Standard report delivery is 2–7 working days. Technical issues or
          workload may cause delays.
        </p>

        {/* Payments */}
        <h3 style={{ color: "#6B4226", marginTop: "25px" }}>
          <i className="bi bi-cash-coin me-2"></i>5. Payments & Refunds
        </h3>
        <ul>
          <li>
            <i className="bi bi-credit-card me-2 text-primary"></i>
            Payments are non-refundable after sample processing begins.
          </li>
          <li>
            <i className="bi bi-arrow-counterclockwise me-2 text-info"></i>
            Refunds apply only for unprocessed samples.
          </li>
          <li>
            <i className="bi bi-shield-check me-2 text-success"></i>
            Management makes final decisions on refunds.
          </li>
        </ul>

        {/* Reports */}
        <h3 style={{ color: "#6B4226", marginTop: "25px" }}>
          <i className="bi bi-journal-text me-2"></i>6. Test Reports
        </h3>
        <p style = {{color:"black"}}>
          Results apply only to the submitted sample and cannot represent an
          entire field or region.
        </p>

        {/* Use of Reports */}
        <h3 style={{ color: "#6B4226", marginTop: "25px" }}>
          <i className="bi bi-exclamation-octagon me-2"></i>7. Use of Reports
        </h3>
        <p style = {{color:"black"}}>
          We are not liable for crop loss, misuse of recommendations, or actions
          taken without expert guidance.
        </p>

        {/* User Responsibility */}
        <h3 style={{ color: "#6B4226", marginTop: "25px" }}>
          <i className="bi bi-people me-2"></i>8. User Responsibilities
        </h3>
        <ul>
          <li>Provide accurate personal and farm details.</li>
          <li>Follow sample collection guidelines.</li>
          <li>Consult experts before major farming decisions.</li>
        </ul>

        {/* Data Privacy */}
        <h3 style={{ color: "#6B4226", marginTop: "25px" }}>
          <i className="bi bi-shield-lock me-2"></i>9. Data Privacy
        </h3>
        <p style = {{color:"black"}}>
          Your information is kept confidential and used only for testing
          purposes.
        </p>

        {/* Website usage */}
        <h3 style={{ color: "#6B4226", marginTop: "25px" }}>
          <i className="bi bi-globe me-2"></i>10. Website Usage
        </h3>
        <p style = {{color:"black"}}>Hacking, abusing, or misusing the website is strictly prohibited.</p>

        {/* Term Changes */}
        <h3 style={{ color: "#6B4226", marginTop: "25px" }}>
          <i className="bi bi-info-circle me-2"></i>11. Updates to Terms
        </h3>
        <p style = {{color:"black"}}>We may update Terms anytime without prior notice.</p>

        {/* Contact */}
        <h3 style={{ color: "#6B4226", marginTop: "25px" }}>
          <i className="bi bi-person-lines-fill me-2"></i>12. Contact Information
        </h3>
        <p style = {{color:"black"}}>
          <div>
<i className="bi bi-telephone-fill me-2"></i>
          <strong>Phone:</strong> +91 98765 43210
          </div>
          <div>
<i className="bi bi-envelope-fill me-2"></i>
          <strong>Email:</strong>  info@bhumilab.com
          </div>
          
          <i className="bi bi-geo-alt-fill me-2"></i>
          <strong>Location:</strong> Kakinada, Andhra Pradesh
        </p>

        {/* Extra - Why Choose Us */}
        <h3 style={{ color: "#2E4600", marginTop: "35px" }}>
          <i className="bi bi-stars me-2"></i>Why Choose BHŪMI Lab?
        </h3>
        <ul>
          <li>
            <i className="bi bi-check2-circle me-2 text-success"></i>
            NABL-style testing methods
          </li>
          <li>
            <i className="bi bi-check2-circle me-2 text-success"></i>
            Fast & accurate scientific reports
          </li>
          <li>
            <i className="bi bi-check2-circle me-2 text-success"></i>
            Expert agricultural suggestions
          </li>
          <li>
            <i className="bi bi-check2-circle me-2 text-success"></i>
            100% secure data handling
          </li>
        </ul>

      </div>
    </section>
  );
};

export default Terms;
