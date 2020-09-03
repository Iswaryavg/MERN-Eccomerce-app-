import React from "react";
import {useState} from "react";
import queryString from  "query-string";

function Cart(props)
{
  const [price,setprice]=useState(0)

const result=(props.cartdata.find(x=>x.id==props.match.params.id))

  return <div className="cart-container">
  
      <div className="section1">
        <div className="cart-details">
        <div className="cart-img">
          <img src={result.img} width="150px" alt="stroller" />
          </div>
          <div className="cart-qty">
    <h1>{result.name}</h1>
    <label for="cars">QTY</label>
    <select id="numbers">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button className="btn btn-danger">Remove</button>
            </div>
    
            <div className="cartitem-price">
            <h1>Price {result.price}</h1>
    
              </div>
    </div>
        </div>
    
          <div className="section2">
                <h1>Subtotal</h1>
                <button className="btn btn-lg btn-warning">Proceed to Checkout</button>
            </div>
      </div>
}
export default Cart;