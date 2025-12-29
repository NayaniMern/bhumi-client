import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewServices = () => {
  const [services, setServices] = useState([]);

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

  const [_id, setId] = useState("");

  // GET ALL SERVICES
  useEffect(() => {
    axios
      .get(`https://bhumi-server.onrender.com/services`)
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  });

  // DELETE SERVICE
  const deleteService = (serviceId) => {
    axios
      .delete(`https://bhumi-server.onrender.com/services/${serviceId}`)
      .then(() => alert("Selected Service Deleted"))
      .catch((err) => console.log(err));
  };

  // GET ONE SERVICE
  const getOneRecord = (serviceId) => {
    axios
      .get(`https://bhumi-server.onrender.com/services/${serviceId}`)
      .then((res) => {
        setName(res.data.name);
        setShortDes(res.data.shortDes);
        setLongDes(res.data.longDes);
        setCategory(res.data.category);
        setPrice(res.data.price);
        setSampleReq(res.data.sampleReq);
        setDays(res.data.days);
        setReport(res.data.report);
        setFeatures(res.data.features);
        setSampleIn(res.data.sampleIn);
        setImage(res.data.image);
        setId(res.data._id);
      })
      .catch((err) => console.log(err));
  };

  // UPDATE SERVICE
  const updateService = (e) => {
    e.preventDefault();
    axios
      .put(`https://bhumi-server.onrender.com/services/${_id}`, {
        _id,
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
      .then(() => alert("Service Updated Successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container p-1 viewservice">
      <h3
        
      >
        View Services
      </h3>

      {/* TABLE */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Short Description</th>
            <th>Long Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Sample Required</th>
            <th>Days</th>
            <th>Report Format</th>
            <th>Features</th>
            <th>Sample Instructions</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {services.map((svc, index) => (
            <tr key={index}>
              <td>{svc.name}</td>
              <td>{svc.shortDes}</td>
              <td>{svc.longDes}</td>
              <td>{svc.category}</td>
              <td>{svc.price}</td>
              <td>{svc.sampleReq}</td>
              <td>{svc.days}</td>
              <td>{svc.report}</td>
              <td>{svc.features}</td>
              <td>{svc.sampleIn}</td>
              <td>
                <img src={svc.image} alt="service" width="100" height="60" />
              </td>

              <td>
                <tr>
                  <button
                    onClick={() => getOneRecord(svc._id)}
                    data-bs-target="#update"
                    data-bs-toggle="modal"
                    className="btn btn-primary me-3 mb-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteService(svc._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </tr>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      <div className="modal fade" id="update" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 style={{ 
          color: "#2E4600", 
          fontSize: "30px", 
          fontWeight: "700" 
        }}>Update Service</h5>
              <button data-bs-dismiss="modal" className="btn-close"></button>
            </div>

            <div className="modal-body">
              <form onSubmit={updateService}>
                <input
                  type="text"
                  className="form-control mb-3"
                  value={name}
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  value={shortDes}
                  placeholder="Enter Short Description"
                  onChange={(e) => setShortDes(e.target.value)}
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  value={longDes}
                  placeholder="Enter Long Description"
                  onChange={(e) => setLongDes(e.target.value)}
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  value={category}
                  placeholder="Enter Category"
                  onChange={(e) => setCategory(e.target.value)}
                />

                <input
                  type="number"
                  className="form-control mb-3"
                  value={price}
                  placeholder="Enter Price"
                  onChange={(e) => setPrice(e.target.value)}
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  value={sampleReq}
                  placeholder="Enter Sample Required"
                  onChange={(e) => setSampleReq(e.target.value)}
                />

                <input
                  type="number"
                  className="form-control mb-3"
                  value={days}
                  placeholder="Enter Turnaround Days"
                  onChange={(e) => setDays(e.target.value)}
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  value={report}
                  placeholder="Enter Report Format"
                  onChange={(e) => setReport(e.target.value)}
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  value={features}
                  placeholder="Enter Features (comma separated)"
                  onChange={(e) => setFeatures(e.target.value)}
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  value={sampleIn}
                  placeholder="Enter Sample Instructions"
                  onChange={(e) => setSampleIn(e.target.value)}
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  value={image}
                  placeholder="Enter Image URL"
                  onChange={(e) => setImage(e.target.value)}
                />

                <button type="submit"className="btn btn-secondary form-control">
                  Update Service
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewServices;
