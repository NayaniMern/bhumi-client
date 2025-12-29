import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewReport = () => {
  const [report, setReport] = useState([]);
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
  const [_id, setId] = useState("");
  useEffect(() => {
    axios
      .get(`https://bhumi-server.onrender.com/Reports`)

      .then((res) => setReport(res.data))
      .catch((err) => console.log(err));
  });
  const deleteReport = (reportsId) => {
    axios
      .delete(`https://bhumi-server.onrender.com/Reports/${reportsId}`)
      .then(() => alert("Your Selected Certificate was Deleted"))
      .catch((err) => console.log(err));
  };
  const getOneRecord = (reportsId) => {
    axios
      .get(`https://bhumi-server.onrender.com/Reports/${reportsId}`)
      .then((res) => {
        setName(res.data.name);
        
        setMobile(res.data.mobile);
        setDate(res.data.date);
     
        setsampleNumber(res.data.sampleNumber);

     
        settestType(res.data.testType);
        setCrop(res.data.crop);
        setLocation(res.data.location);
        setStatus(res.data.status);
        setMessage(res.data.message);
        setFarmerID(res.data.farmerID);

        setId(res.data._id);
      })
      .catch((err) => console.log(err));
  };
  const updateEnq = (e) => {
    e.preventDefault();
    axios
      .put(`https://bhumi-server.onrender.com/Reports/${_id}`, {
        _id,
        name,mobile,date,sampleNumber, testType,crop,location,status,message,farmerID,
      })
      .then((res) => alert("Report Updated"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container   viewcertificate">
      <h3 className="text-center  container ">
        View Report Details
      </h3>
      <table className=" table table-bordered ">
        <thead>
          <tr className="text-center">
          
            <th>Name</th>
            <th>Mobile</th>
           
            <th>Date</th>
          
            <th>SampleNumber</th>
            <th>TestType</th>
            <th>Crop</th>
            <th>Location</th>
            <th>Status</th>
            <th>Message</th>
            <th>FarmerID</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {report.map((report, index) => {
            return (
              <tr key={index}>
                <td>{report.name}</td>
                <td>{report.mobile} </td>
                <td>{report.date} </td>
             
                <td>{report.sampleNumber}</td>
        
                <td>{report.testType}</td>
                <td>{report.crop}</td>
                <td>{report.location}</td>
                <td>{report.status}</td>
                  <td>{report.message}</td>
                    <td>{report.farmerID}</td>

                <td>
                  <button
                    onClick={() => getOneRecord(report._id)}
                    data-bs-target="#update"
                    data-bs-toggle="modal"
                    className="btn btn-primary mb-1"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    onClick={() => deleteReport(report._id)}
                    className="btn btn-danger"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="modal fade " id="update" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 style={{ 
          color: "#2E4600", 
          fontSize: "30px", 
          fontWeight: "700" 
        }}>Update Report</h5>
              <button data-bs-dismiss="modal" className="btn-close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateEnq}>
                 <input
                type="name"
                value={name}
                className="form-control mb-3"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
                
               <input
                type="name"
                value={mobile}
                className="form-control mb-3"
                placeholder="Enter Mobile Number"
                onChange={(e) => setMobile(e.target.value)}
              />
              <input
                type="name"
                value={date}
                className="form-control mb-3"
                placeholder="Enter Date"
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="name"
                value={sampleNumber}
                className="form-control mb-3"
                placeholder="Enter Sample Number"
                onChange={(e) => setsampleNumber(e.target.value)}
              />
               <input
                type="name"
                value={testType}
                className="form-control mb-3 "
                placeholder="Enter Test Type"
                onChange={(e) => settestType(e.target.value)}
              />
              <input
                type="name"
                value={crop}
                className="form-control mb-3 "
                placeholder="Enter Crop"
                onChange={(e) => setCrop(e.target.value)}
              />
              <input
                type="name"
                value={location}
                className="form-control mb-3 "
                placeholder="Enter Location"
                onChange={(e) => setLocation(e.target.value)}
              />
              <input
                type="name"
                value={status}
                className="form-control mb-3 "
                placeholder="Enter Report Status"
                onChange={(e) => setStatus(e.target.value)}
              />
               <input
                type="name"
                value={message}
                className="form-control mb-3 "
                placeholder="Enter Message"
                onChange={(e) => setMessage(e.target.value)}
              />
              <input
                type="name"
                value={farmerID}
                className="form-control mb-3 "
                placeholder="Enter FarmerID"
                onChange={(e) => setFarmerID(e.target.value)}
              />
                
                <button type="submit" className="form-control btn btn-secondary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewReport;
