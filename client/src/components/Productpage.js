import React from "react";
import Data from "./Data"

function Productpage()
{


return<div className="products">
 {Data.map(d=><div className="product">
      <img src={d.img} width="450px" alt="" />
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
                    <button type="button" className="btn btn-lg btn-warning">Add to Cart</button>        </div>

</div>

  )}
</div>


  
}
export default Productpage ;