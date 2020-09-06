import React from "react";
import {useState} from "react";
import queryString from  "query-string";

function Addtocart(props)
{
  const [price,setprice]=useState(0)

 const result=(props.addtocart.find(x=>x.id==props.match.params.id))
console.log(result)
  return <div><h1>Shopping Cart</h1><div className="cart-container">
  
      <div className="section1">
        <div className="cart-details">
        <div className="cart-img">             

          <img src={result.img} width="150px" alt="stroller" />   
         
          </div>
          <div className="cart-qty">
          <p>Awesome product</p>
          <select>
    {[...Array(result.Numberofstock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
    </select>
          <button>Delete</button>
            </div>
    
            <div className="cartitem-price">  
    {result.price}
              </div>
    </div>
        </div>
          <div className="section2">
          <p>Subtotal:{result.price}</p>                  
                 
                <br />
                <button className="btn btn-lg btn-warning" >Proceed to Checkout</button>
            </div>
      </div>
      </div>
}
export default Addtocart;