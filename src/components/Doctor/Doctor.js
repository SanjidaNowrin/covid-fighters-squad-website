import React from 'react';

const Doctor = (props) => {
    const {name ,specialist,position,degree,age,country,img ,salary}=props.doctor 
    return (
        <div className="col-md-4">
        <div class="card mb-3" style={ {"max-width": "540px"}}>
  
    <div class="row g-0">
      <div>
        <img src={img} class="img-fluid w-75 mx-auto d-block rounded-circle" alt="..."/>
      </div>
      <div className="text-start">
        <div class="card-body">
          <h5 class="card-title">Name:{name}</h5>
          <h5 class="card-title">Specialist:{specialist}</h5>
          <h5 class="card-title">Position:{position}</h5>
          <h5 class="card-title">Degree:{degree}</h5>
          <h5 class="card-title">Age:{age}</h5>
          <h5 class="card-title">Salary:{salary}</h5>
          <h5 class="card-title">Country:{country}</h5>
          
          <button 
          onClick={ ()=> props.handleAddDoctor(props.doctor)}
          className="btn btn-primary"> 
          Add To Cart</button>
            
        </div>
      </div>
    </div>
    </div>
  </div>
);
};

export default Doctor;