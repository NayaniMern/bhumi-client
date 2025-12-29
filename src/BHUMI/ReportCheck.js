import axios from "axios";
import React, {useEffect, useState } from "react";

import"./Style.css"
import report2 from "./assets/report2.png"

const ReportCheck = () => {
  const [reportID, setReportID] = useState("");
  const [report, setReport] = useState([]);
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (reportID === "") {
      setError("Please enter a valid Report number");
      return;
    }

    setReport([]);
    setError("");

    axios
      .get(`https://bhumi-server.onrender.com/Reports/${reportID}`)
      .then((res) => {
        setReport([res.data]);
      })
      .catch((err) => {
        console.log(err);
        setError("Report not found");
      });
  };
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <>
       <div className="report-hero">
        <div className="overlay">
          <h1>Test Report Status</h1>
          <p>Know whether your lab test is completed, pending, or under analysis.</p>
        </div>
      </div>
      <div className="report-main container  ">
        <div className="row">
   <div className="content col-lg-8">
          <h1>Online Report Check Verification</h1>
          <form onSubmit={submitHandler} className=" container ">
            <div className="form-floating">
              <input
                type="text"
                value={reportID}
                className="form-control fs-5 fw-bold"
                onChange={(e) => setReportID(e.target.value)}
                placeholder="Enter Report ID"
              />
              <label>Enter Report ID</label>
            </div>

            <button
              type="submit"
              className="mt-3 btn btn-success form-control fs-6 fw-bold text-uppercase"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-lg-4 text-center align-content-center">
          <img src={report2} alt="error" className="w-75 h-75"/>
        </div>

        </div>
     
        <p style={{ color: "red" }} className="text-center mt-3">
          {error}
        </p>

        <div className=" certificate  ">
          {report.map((report, index) => {
            return (
              <div key={index}>
                <div className="report">
                  <h2>report Details</h2>
                  <div className="mt-5">
                    <p>
                      Report ID :
                      <span> {report._id}</span>
                    </p>
                    <p>
                      Name :
                      <span> {report.name}</span>
                    </p>
                    <p>
                      Mobile :
                      <span> {report.mobile}</span>
                    </p>

                    <p>
                      Date :
                      <span> {report.date}</span>
                    </p>

                    <p>
                      Sample Number :
                      <span> {report.sampleNumber}</span>
                    </p>
                    <p>
                      Test Type :<span>{report.testType}</span>
                    </p>
                    <p>
                      Crop : <span>{report.crop}</span>
                    </p>
                    <p>
                      Location : <span>{report.location}</span>
                    </p>
                    <p>
                      Status :<span> {report.status}</span>
                    </p>
                    <p>
                      Message :<span>{report.message}</span>
                    </p>

                    <p>
                      Farmer ID :
                      <span>{report.farmerID}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </>
  );
};

export default ReportCheck;
