import React from 'react';
import './Doctor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd} from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Doctor = (props) => {
    const {name ,specialist,position,degree,age,time,img ,fees}=props.doctor;
    const docIcon = <FontAwesomeIcon icon={faUserMd} />

    return (
        <div className="col-md-4">
        <div className="p-3 mb-5 border-0 rounded shadow-lg bg-body card">
  
    <div className="row g-0">
      <div>
        <img src={img} className="mx-auto img-fluid w-75 d-block rounded-circle" alt="..."/>
      </div>
      <div className="border-0">
        <div className="card-body title-color text-start ">
          <h5>Name: {name}</h5>
          <h5>Specialist: {specialist}</h5>
          <h5>Position: {position}</h5>
          <h5>Degree: {degree}</h5>
          <h5>Age: {age}</h5>
          <h5>Fees: ${fees}</h5>
          <h5>Time: {time}</h5>
          <br />
          <button 
          onClick={ ()=> props.handleAddDoctor(props.doctor)}
          className="container purchase-btn"> 
          <span style={{ margin: "4px"}}>{docIcon}</span> Add Doctor
          </button>
          <div className="container text-center mt-2">
          <FontAwesomeIcon icon={faYoutube} size="2x" className="social-icon"/>
          <FontAwesomeIcon icon={faFacebook} size="2x" className="social-icon" />
          <FontAwesomeIcon icon={faTwitter} size="2x" className="social-icon"/>
          <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
);
};

export default Doctor;