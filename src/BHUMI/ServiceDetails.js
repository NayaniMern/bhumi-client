import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const ServiceDetails = () => {
  const { id } = useParams();
  const [services, setServices] = useState("");



  useEffect(() => {
    axios
      .get(`https://bhumi-server.onrender.com/services/${id}`)
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  });
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <>
   
     <div className="container mt-4  ">
  <p style={{ fontSize: "18px", fontWeight: "600" }}>
    <span>
      <NavLink 
        to="/services" 
        style={{ textDecoration: "none", color: "#2E4600" }}
      >
        Services
      </NavLink>
    </span>
    <span style={{ color: "#6B4226", fontWeight: "800", margin: "0 8px" }}>
      →
    </span>
    <span style={{ color: "#556B2F" }}>
      Service Details
    </span>
  </p>
</div>


     <div className="container p-5">
  <div className="row align-items-start">

   
    <div className="col-lg-6">
      <img 
        src={services.image} 
        alt="service" 
        className="w-100"
        style={{ borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
      />
    </div>

    <div className="col-lg-6 mt-4 mt-lg-0">
      
      <h2 
        style={{ 
          color: "#2E4600", 
          fontSize: "30px", 
          fontWeight: "700" 
        }}>
        {services.name}
      </h2>

      <p style={{ textAlign: "justify", color: "black" }}>
        {services.shortDes}
      </p>

      <p style={{ textAlign: "justify", color: "black" }}>
        {services.longDes}
      </p>

      <p 
        className="btn me-2" 
        style={{ background: "#8FBC8F", color: "white", fontWeight: "600" }}>
        Category: {services.category}
      </p>

      <p 
        className="btn me-2" 
        style={{ background: "#556B2F", color: "white", fontWeight: "600" }}>
        ₹ {services.price}
      </p>

      <p 
        className="btn me-2" 
        style={{ background: "#6B4226", color: "white", fontWeight: "600" }}>
        Report: {services.report}
      </p>

      <p 
        className="btn" 
        style={{ background: "#2F4F2F", color: "white", fontWeight: "600" }}>
        Processing Days: {services.days}
      </p>

      <h3 className="fw-bold mt-4" style={{ color: "#2E4600" }}>
        Features Included :
      </h3>
      <p>{services.features}</p>

      <h4 className="fw-bold mt-4" style={{ color: "#3B5323" }}>
        Sample Requirement:
      </h4>
      <p>{services.sampleReq}</p>

      <h4 className="fw-bold mt-4" style={{ color: "#3B5323" }}>
        How to Submit Sample:
      </h4>
      <p>{services.sampleIn}</p>
    </div>

  </div>
</div>

    </>
  );
};

export default ServiceDetails;
