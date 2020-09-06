import React from "react";
import {useState} from "react";
import queryString from  "query-string";
import {Link} from "react-router-dom"
function handlecartitems()
{
  alert("clicked")
}
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
   
            </div>
    
            <div className="cartitem-price">  
    <p>   
{result.name} </p>
<p>{result.price}</p>
<p>Description:Product is awesome,</p>
   
              </div>
    </div>
        </div>
          <div className="section2">
               <p>Price: {result.price}</p>
               <p>Status:{result.Numberofstock>0?"Instock":"Outofstock"}</p>                          
               QTY: 
     
    {/* <select id="numbers">
{foreach(var i in result.Numberofstock)}
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select> */}
    <select>
    {[...Array(result.Numberofstock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
    </select>

                <br />
                <Link to= {'/Addtocart/' +result.id}>               
                <button className="btn btn-lg btn-warning" disabled={result.Numberofstock == 0} onClick={handlecartitems}>Add to Cart</button>
                </Link>
            </div>
      </div>
}
export default Cart;