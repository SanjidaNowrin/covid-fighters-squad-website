import React from 'react';

const Cart = (props) => {
    const {cart}= props;
    const totalReducer=(prevValue,currentValue)=>prevValue+currentValue.salary

   const total=cart.reduce(  totalReducer, 0).toFixed(2)
    
    return (
        <div>           
            <h3>Doctors Added:
                 {cart.length}
            </h3>
            <h2>{total}</h2>
               <ul>
                   {
                       cart.map( doctor=> <li>{doctor.name}</li>)
                   }
               </ul>
        </div>
    );
};

export default Cart;