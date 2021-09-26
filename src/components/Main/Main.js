import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';

const Main = () => {
    //for showing doctors cart
    const [doctors, setdoctors] = useState([]);
       // cart  e doctor rakhar jnne state
    const [ cart , setCart ] = useState([]);
const handleAddDoctor=(doctor)=>{
    const newCart=[ ...cart  , doctor ]
    setCart(newCart)
}

  useEffect(() => {
    fetch("/doctorsData.json")
      .then((res) => res.json())
      .then((data) => setdoctors(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            {
                doctors.map(doctor=>  
            <Doctor
                doctor={doctor}
                handleAddDoctor={handleAddDoctor}
                key={doctor.fees}
                >
            </Doctor>)
            }    
          
          </div>
        </div>
        <div className="col-md-3">
             <Cart
                cart={cart}
             >
             </Cart>
        </div>
      </div>
    </div>
  );
};


export default Main;