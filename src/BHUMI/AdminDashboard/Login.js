import React, { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { loginStatus } from "../../App";
import "./Admin.css"
import axios from "axios";



const Login = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const [token,setToken] = useContext(loginStatus)
 

  const changeData = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
     axios
      .post(`https://bhumi-server.onrender.com/login`, details)

      .then((res) => {
        alert("Login Successfull")
        console.log(res.data);
        setToken(res.data.token);
      })
      .catch((err) => { 
         alert("Login Failed, Please Check Your Credentials");
        console.log(err)})
  }
  if (token) {
    navigate("/dashboard")
  }



  return (
    <div className="container ">
      <div
        className="col-lg-6 mt-5 mb-5  p-5 mx-auto admin"
        style={{ boxShadow: " 1px 2px 20px  #3B0008" }}
      >
        <h3
          className="text-center fs-3 text-uppercase fw-bold mb-3"
          style={{ color: "darKgreen" }}
        >
          Admin Login
        </h3>
        <form onSubmit={submitHandler} >
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="form-control mb-3"
            onChange={changeData}
            
          />
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            className="form-control mb-3"
            onChange={changeData}
           
          />
          <input
            type="Submit"
            className="form-control mb-3"
            style={{
              color: "antiquewhite",
              background: "#8B4513 ",
              padding: "10px 20px",
              border: "1px solid transparent",
              borderRadius: "20px",
              fontSize: "18px",
              fontWeight: "600",
              textTransform:"capitalize"
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
