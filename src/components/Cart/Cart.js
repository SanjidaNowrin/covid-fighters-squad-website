import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCheck,faUserMd,faCreditCard} from '@fortawesome/free-solid-svg-icons';
const personIcon = <FontAwesomeIcon icon={faUserCheck} />
const Cart = (props) => {
    const {cart}= props;
    const docIcon = <FontAwesomeIcon icon={faUserMd} />
    const creditCard = <FontAwesomeIcon icon={faCreditCard} />

    const totalReducer=(prevValue,currentValue)=>prevValue+currentValue.fees
    const total=cart.reduce(  totalReducer, 0);
    
    return (     
        <div className="p-4 rounded shadow-lg card bg-body" >
        <div className="card-body" style={ {color: "#04406e"}}>
            <h5 className="color-change">{docIcon} Doctors Added: {cart.length}
            </h5>
            <h5 className="color-change">{creditCard} Total Fees: ${total}</h5>
            <br /> 
            {
               cart.map( doctor=>(<h5 key={doctor.fees} className="name-border text-center"> 
               <img src={doctor.img} className="mx-auto w-50 d-block rounded-circle" alt="..."/>
               <div className="mt-3">
               <span className="color-change ms-2">{personIcon}</span>
               {doctor.name}
               </div>
               </h5>)) 
            }
        </div>
      </div>
    );
};

export default Cart;