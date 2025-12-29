import axios from "axios";
import React, { useState } from "react";


const AddReport = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  
  const [sampleNumber, setsampleNumber] = useState("");
 
  const [testType, settestType] = useState("");
  
  const [crop, setCrop] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [farmerID, setFarmerID] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://bhumi-server.onrender.com/Reports`, {name,mobile,date,sampleNumber, testType,crop,location,status,message,farmerID})
      .then((res) => {
        alert("You Have Successfully Posted Report Data");

        setName("");
        setMobile("");
        setDate("");
        setsampleNumber("");
        settestType("");
        setCrop("");
        setLocation("");
       
        
        setStatus("");
        setMessage("");
        setFarmerID("");
        
        
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container  addcertificate">
      <h3>Add Report details</h3>
      <div className="row justify-content-center mt-4 ">
        <div className="col-md-12 col-lg-12 ">
          <form className="container col-9" onSubmit={submitHandler}>
            <div className=" form-floating">
              <input
                type="name"
                value={name}
                className="form-control mb-3"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
              <label>Enter Name </label>
            </div>
            <div className=" form-floating">
              <input
                type="name"
                value={mobile}
                className="form-control mb-3"
                placeholder="Enter Mobile Number"
                onChange={(e) => setMobile(e.target.value)}
              />
              <label>Enter Mobile Number</label>
            </div>
            <div className=" form-floating">
              <input
                type="name"
                value={date}
                className="form-control mb-3"
                placeholder="Enter Date"
                onChange={(e) => setDate(e.target.value)}
              />
              <label>Enter Date</label>
            </div>
            
            <div className=" form-floating">
              <input
                type="name"
                value={sampleNumber}
                className="form-control mb-3"
                placeholder="Enter Sample Number"
                onChange={(e) => setsampleNumber(e.target.value)}
              />
              <label>Enter Sample Number</label>
            </div>
            
            <div className=" form-floating">
              <input
                type="name"
                value={testType}
                className="form-control mb-3 "
                placeholder="Enter Test Type"
                onChange={(e) => settestType(e.target.value)}
              />
              <label>Enter Test Type</label>
            </div>
            <div className=" form-floating">
              <input
                type="name"
                value={crop}
                className="form-control mb-3 "
                placeholder="Enter Crop"
                onChange={(e) => setCrop(e.target.value)}
              />
              <label>Enter Crop</label>
            </div>
            <div className=" form-floating">
              <input
                type="name"
                value={location}
                className="form-control mb-3 "
                placeholder="Enter Location"
                onChange={(e) => setLocation(e.target.value)}
              />
              <label>Enter Location</label>
            </div>
            <div className=" form-floating">
              <input
                type="name"
                value={status}
                className="form-control mb-3 "
                placeholder="Enter Report Status"
                onChange={(e) => setStatus(e.target.value)}
              />
              <label>Enter Report Status</label>
            </div>
            <div className=" form-floating">
              <input
                type="name"
                value={message}
                className="form-control mb-3 "
                placeholder="Enter Message"
                onChange={(e) => setMessage(e.target.value)}
              />
              <label>Enter Message</label>
            </div>
            <div className=" form-floating">
              <input
                type="name"
                value={farmerID}
                className="form-control mb-3 "
                placeholder="Enter FarmerID"
                onChange={(e) => setFarmerID(e.target.value)}
              />
              <label>Enter FarmerID</label>
            </div>
           
            
            <button type="submit" className="form-control btn btn-primary fs-6 fw-bold text-uppercase">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReport;


