import axios from "axios";
import React, { useState } from "react";

const AddServices = () => {
  const [name, setName] = useState("");
  const [shortDes, setShortDes] = useState("");
  const [longDes, setLongDes] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [sampleReq, setSampleReq] = useState("");
  const [days, setDays] = useState("");
  const [report, setReport] = useState("");
  const [features, setFeatures] = useState("");
  const [sampleIn, setSampleIn] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://bhumi-server.onrender.com/services", {
        name,
        shortDes,
        longDes,
        category,
        price,
        sampleReq,
        days,
        report,
        features,
        sampleIn,
        image,
      })
      .then((res) => {
        alert("You Have Posted Service Data");
        setName("");
        setShortDes("");
        setLongDes("");
        setCategory("");
        setPrice("");
        setSampleIn("");
        setSampleReq("");
        setDays("");
        setReport("");
        setFeatures("");
        setImage("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container addservice p-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h3
           
          >
            AddService
          </h3>
          <form
            onSubmit={submitHandler}
            style={{ boxShadow: " 1px 2px 20px  #2b0208ff", padding: "30px" }}
          >
            <input
              type="name"
              className="form-control mb-3"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Short Description"
              value={shortDes}
              onChange={(e) => setShortDes(e.target.value)}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Long Description"
              value={longDes}
              onChange={(e) => setLongDes(e.target.value)}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <input
              type="number"
              className="form-control mb-3"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Sample Required"
              value={sampleReq}
              onChange={(e) => setSampleReq(e.target.value)}
            />

            <input
              type="number"
              className="form-control mb-3"
              placeholder="Enter Turnaround Days"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Report Format"
              value={report}
              onChange={(e) => setReport(e.target.value)}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Features"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Sample Instructions"
              value={sampleIn}
              onChange={(e) => setSampleIn(e.target.value)}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <button
              type="submit"
              className=" form-control mb-3  "
             
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
