import React, { useEffect } from "react";
import {useState} from "react";
import queryString from  "query-string";

function Addtocart(props)
{
  const [price,setprice]=useState(0)
 const [cartitems,setcartitems]=useState([]);
//  const result=(props.addtocart.find(x=>x.id==props.match.params.id))

// const result=(props.addtocart.find(x=>x.id==props.match.params.id))

 
 useEffect(() => {
  // Update the document title using the browser API
  const result=(props.addtocart.find(x=>x.id==props.match.params.id))

cartitems.push({'name':'cartitems.name'})
  setcartitems(result)}
  
  ,[]);

  return <div><div className="cart-container">
  
   
        <div className="section1">
        <h2 className="section-header">Shopping CART</h2>
    <div className="cart-row">
        <span className="cart-item cart-header cart-column">ITEM</span>
        <span className="cart-price cart-header cart-column">PRICE</span>
        <span className="cart-quantity cart-header cart-column">QUANTITY</span>
    </div>
    <div className="cart-items">
        <div className="cart-row">
            <div className="cart-item cart-column">
                <img className="cart-item-image" src={cartitems.img} width="100" height="100" />
                <span className="cart-item-title">{cartitems.name}</span>
            </div>
            <span className="cart-price cart-column">{cartitems.price}</span>
            <div className="cart-quantity cart-column">              
                <select className="cart-quantity-input">
    {[...Array(cartitems.Numberofstock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
    </select>
                <button className="btn btn-danger" type="button">REMOVE</button>
            </div>
        </div>
        
    </div>
        </div>
          <div className="section2">
          <h1>Subtotal:{cartitems.price}</h1>                                   
                <br />
                <button className="btn btn-lg btn-warning" >Proceed to Checkout</button>
            </div>
      </div>
      </div>
}
export default Addtocart;