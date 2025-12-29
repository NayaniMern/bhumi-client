import React, { useEffect, useState } from 'react'
import "./Style.css"

import axios from 'axios'
import { NavLink } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://bhumi-server.onrender.com/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  });
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  return (
    <>
    
    <section className="service-hero">
        <div className="overlay">
          <h1>Our Farming Testing Services</h1>
          <p>Accurate Soil, Water, Seed & Fertilizer Testing for Healthy Crops</p>
        </div>
      </section>
      <div className="row container-fluid p-5  ">
  {services.map((service, index) => {
    return (
      <div key={index} className="col-md-4 mb-3">
        <div
          className="card h-100"
          style={{ border: "1px solid #3B0008" }}
        >
          <img src={service.image} className="w-100 h-75" alt="service" />

          <div className="card-body">
            <h5
              className="card-title w-100 mb-3 p-2 fs-6 text-uppercase fw-bold"
              style={{
                background: "brown",
                textAlign: "center",
                color: "snow",
              }}
            >
              {service.name}
            </h5>

            <p className="card-text">
              <span className="fw-bold">Category : </span> {service.category}
            </p>

            <p className="card-text">
              <span className="fw-bold">Price Estimate : </span> ₹
              {service.price}
            </p>

            <p className="card-text">
              <span className="fw-bold">Sample Required : </span>
              {service.sampleReq}
            </p>

            <p className="card-text">
              <span className="fw-bold">Turnaround Days : </span>
              {service.days}
            </p>

           <NavLink to = {`/ServiceDetails/${service._id}`}>
              <button
                style={{
                  color: "antiquewhite",
                  background: "#4CAF50",
                  padding: "10px 20px",
                  border: "1px solid transparent",
                  borderRadius: "20px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
               
                View Details <i className="bi bi-file-earmark-text-fill"></i>
              </button>
               </NavLink>
           
          </div>
        </div>
      </div>
    );
  })}
</div>

      </>
  )
}

export default Services