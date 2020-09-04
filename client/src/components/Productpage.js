import React from "react";
import Search from "./Search"
import {Link} from "react-router-dom"


function Productpage(props)
{
 return <div><Search /><div className="products">
 {props.data.map(d=><div className="product">
 <Link to={'/cart/' +d.id}>
      <img src={d.img} width="250px"  alt="" />
      </Link>
     <div className="details">
            <h1>{d.name}</h1>
                   <p>
         Price:{d.price}
         </p>
         <p>
          Rating: {d.Rating}
           </p>
           <p>
             Number of stock:{d.Numberofstock}
             </p>
                  {/* <button type="button" className="btn btn-lg btn-warning">Add to Cart</button>        */}
                   </div> 
                  
</div>

  )}
</div>
</div>



  
}
export default Productpage ;