import React,{useState,useEffect} from "react";

import {Link} from "react-router-dom"


function Productpage(props)
{
  const[search,setsearch]=useState("")
  
  const[filteredproduct,setfilteredproduct]=useState([])
function handlesearch(e)
{
e.preventDefault();




}

function handlechange(e)
{
    setsearch(e.target.value)  
 
   
}
useEffect(() => {
  const results = props.data.filter(d =>
    d.name.toLowerCase().includes(search)
 
  
)
  setfilteredproduct(results);
},[search]);



 return <div>   <form onSubmit={handlesearch}  style={{textAlign:"center"}}>
 <h1>{search}</h1>
       <input type="search" id="gsearch" name="gsearch" vaue={search} onChange={handlechange} />
 <button type="submit" className="btn btn-primary" onClick={handlesearch}>Search</button>
     </form><div className="products">
 {filteredproduct.map(d=><div className="product">
 <Link to={'/cart/' +d.id}>
      <img src={d.img} width="250px" className="productimg" alt="" />
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
                
                   </div> 
                  
</div>

  )}
 
</div>
</div>



  
}
export default Productpage ;