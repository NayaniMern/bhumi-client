import axios from "axios";
import React, { useState } from "react";

const SendEnquiry = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const mobileError = document.getElementById("mobileError");
    const messageError = document.getElementById("messageError");

    const alphaExp = /^[a-zA-Z ]+$/;
    const mailExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const numExp = /^[0-9]+$/;

    let isValid = true;

    // Name validation
    if (name === "") {
      nameError.textContent = "*Name is required";
      isValid = false;
    } else {
      if (name.match(alphaExp)) {
        nameError.textContent = "";
      } else {
        nameError.textContent = "*Name must contain only letters";
        isValid = false;
      }
    }

    // Email validation
    if (email === "") {
      emailError.textContent = "*Please Enter Email Address";
      isValid = false;
    } else {
      if (email.match(mailExp)) {
        emailError.textContent = "";
      } else {
        emailError.textContent = "*Please Enter Valid Email ID";
        isValid = false;
      }
    }

    // Mobile number validation
    if (mobile === "") {
      mobileError.textContent = "*Please Enter Mobile Number";
      isValid = false;
    } else {
      if (mobile.match(numExp)) {
        if (mobile.length === 10) {
          mobileError.textContent = "";
        } else {
          mobileError.textContent = "*Mobile Number should be 10 digits";
          isValid = false;
        }
      } else {
        mobileError.textContent = "*Mobile Number should be Only Numbers";
        isValid = false;
      }
    }

    // Message validation
  

        if (message.trim() === "") {
      messageError.textContent = "*Please Enter Message";
      isValid = false;
    } else if (message.trim().length < 3) {
      messageError.textContent = "*Message should be at least 3 characters";
      isValid = false;
    } else {
      messageError.textContent = "";
    }

    if (isValid) {
      axios
        .post("https://bhumi-server.onrender.com/Enquiries", {
          name,
          mobile,
          email,
          message,
        })
        .then((res) => {
          alert("Your Enquiry Sent");
          setName("");
          setMobile("");

          setEmail("");
          setMessage("");
        })
        .catch((err) => {
          console.error(err);
          alert("There was an error sending your enquiry.");
        });
    }
  };
  return (
    <div className="col-md-6">
      <h3
        className="fw-bold"
        style={{ color: "#2E7D32", fontSize: "30px", textAlign: "center" }}
      >
        Send Us a Message
      </h3>
      <form onSubmit={submitHandler}>
        <div className="mb-3 form-floating">
          <input
            type="text"
            value={name}
            className="form-control "
            placeholder="Enter Your Name "
            onChange={(e) => setName(e.target.value)}
          />
          <label>Enter Your Name </label>
          <span id="nameError" style={{ color: "red" }}></span>
        </div>
        <div className="mb-3 form-floating">
         
          <input
            name="text"
            value={mobile}
            className="form-control"
            placeholder="Enter Your Mobile Number"
             onChange={(e) => setMobile(e.target.value)}
          />
           <label>Enter Your Mobile Number</label>
            <span id="mobileError" style={{ color: "red" }}></span>
        </div>
        <div className="mb-3 form-floating">
        
          <input
            name="email"
               value={email}
            className="form-control"
            placeholder="Enter Your Email ID"
             onChange={(e) => setEmail(e.target.value)}
          />
          <label >Enter Your Email ID </label>
          <span id="emailError" style={{ color: "red" }}></span>
        </div>
  <div className="mb-3 form-floating">
          <textarea
            value={message}
            className="form-control"
            style={{ height: "120px" }}
            placeholder="Enter Your Message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <label>Enter Your Message Here .....</label>
          <span id="messageError" style={{ color: "red" }}></span>
        </div>
        <button type="submit" className="btn btn-success">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default SendEnquiry;
