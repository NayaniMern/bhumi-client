import React, { useEffect, useContext, useState } from "react";
import Welcome from "./Welcome";


import AddServices from "../AddServices";
import ViewServices from "./ViewServices";
import ViewEnquiries from "./ViewEnquiries";
import AddReport from "../AddReport";
import ViewReport from "./ViewReport";

import { loginStatus } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";







const Dashboard = () => {
  const [view, setView] = useState("");
  const[token,setToken] = useContext(loginStatus)
  const [user, setUser] = useState({});
  const navigate= useNavigate();

   useEffect(() => {
  if(token === ""){
    navigate("/admin")
  }
  else{
  }
    axios.get("https://bhumi-server.onrender.com/dashboard",{
      headers : {
        "x-token" : token
      }
    })
    .then((res) => {
      setUser(res.data)
    })
    .catch((err) => {
console.log(err);
    })
  },[token,navigate])




  const dashboardView =  ()=>{
   
      if (view === "") {
        return <Welcome />;
      } else if (view === "addReport") {
        return <AddReport />;
      } else if (view === "viewReport") {
        return <ViewReport />;
      } else if (view === "addService") {
        return <AddServices />;
      } else if (view === "viewService") {
        return <ViewServices />;
      } else if (view === "viewEnquiries") {
        return <ViewEnquiries />;
      } else {
        return <h1>Invalid View</h1>;
      }
   
  }
  
      if(token === ""){
        navigate("/admin");
       } else{
           return (
      <div className="container-fluid">
        <div className="row dashboard ">
          <aside className="col-lg-3 main ">

            <h1 className="fs-3" style={{color:"black"}}>Welcome {user.name}</h1>
            
            <h3 className="mb-4 " style={{color:"darkgreen", cursor:"pointer",textTransform:"uppercase", fontSize:"30px", fontWeight:"800"}} onClick={() => setView("")}>Admin Dashboard</h3>
            <button onClick={() => setView("addReport")}>Add Report</button>
            <button onClick={() => setView("viewReport")}>View Report</button>
            <button onClick={() => setView("addService")}>Add Service</button>
            <button onClick={() => setView("viewService")}>View Service</button>
            <button onClick={() => setView("viewEnquiries")}>
              View Enquiries
            </button>
              <button onClick={() => setToken("")}>Logout</button>
            
          </aside>
          <div className="col-lg-9  overflow-x-auto">{dashboardView()}</div>
        </div>
      </div>
    );
        }

      }
 
   
   
  
 

export default Dashboard;
