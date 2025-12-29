import React from 'react'
import useCallApi from './CallApi'

const Welcome = () => {
  const reports = useCallApi(`https://bhumi-server.onrender.com/Reports`)
  const services = useCallApi(`https://bhumi-server.onrender.com/services`)
  const enquiries = useCallApi(`https://bhumi-server.onrender.com/Enquiries`)

  return (
    <div className='container p-5'>
      <h1 className="text-center fs-2 fw-bold mb-4" style={{ color: "maroon" }}>
        Welcome to BHŪMI Farming Testing Admin Dashboard
      </h1>

      <p className="text-center mb-5" style={{ fontSize: "17px", color: "#4a4a4a" }}>
        Monitor all your farming laboratory activities in one place — Services, Reports, 
        Enquiries, and Test Requests. Stay updated with daily lab performance.
      </p>

      <div className='row'>

       
        <div className='col-lg-4 col-md-6 mb-3'>
          <div className='card' style={{ boxShadow: "1px 2px 20px #3B0008" }}>
            <div className='card-body text-center fw-bold'>
              <h5 className='card-title fw-bold'>
                {services.length}+ <i className="bi bi-flower3"></i>
              </h5>
              <h5 className='card-title'>Services</h5>
              <p className="text-muted" style={{ fontSize: "14px" }}>
                Soil, Water, Seed & Fertilizer testing services offered by the lab.
              </p>
            </div>
          </div>
        </div>


        <div className='col-lg-4 col-md-6 mb-3'>
          <div className='card' style={{ boxShadow: "1px 2px 20px #3B0008" }}>
            <div className='card-body text-center fw-bold'>
              <h5 className='card-title fw-bold'>
                {reports.length}+ <i className="bi bi-file-earmark-check"></i>
              </h5>
              <h5 className='card-title'>Reports</h5>
              <p className="text-muted" style={{ fontSize: "14px" }}>
                Completed scientific test reports for farmers and researchers.
              </p>
            </div>
          </div>
        </div>

  
        <div className='col-lg-4 col-md-6 mb-3'>
          <div className='card' style={{ boxShadow: "1px 2px 20px #3B0008" }}>
            <div className='card-body text-center fw-bold'>
              <h5 className='card-title fw-bold'>
                {enquiries.length}+ <i className="bi bi-chat-dots-fill"></i>
              </h5>
              <h5 className='card-title'>Enquiries</h5>
              <p className="text-muted" style={{ fontSize: "14px" }}>
                Farmer enquiries and test requests received through the website.
              </p>
            </div>
          </div>
        </div>

      </div>

     
      <div className="mt-5 p-4 border rounded" style={{ background: "#fff8f8" }}>
        <h5 className="fw-bold mb-3"><i className="bi bi-info-circle-fill"></i> Dashboard Summary</h5>
        <ul style={{ lineHeight: "30px" }}>
          <li><i className="bi bi-check-circle-fill text-success"></i> Keep track of incoming samples and report generation.</li>
          <li><i className="bi bi-check-circle-fill text-success"></i> Monitor daily lab activity for quick decision-making.</li>
          <li><i className="bi bi-check-circle-fill text-success"></i> Easy navigation to manage Services, Reports, and Enquiries.</li>
        </ul>
      </div>

    </div>
  )
}

export default Welcome;
