import React from "react";
import {useState} from "react"
import Data from "./Data"
function Search(props)
 {  const[search,setsearch]=useState("")

function handlesearch(e)
{
e.preventDefault();

// const output=props.filter.find(x=>x.name=="puree")
// console.log(output)

}
function handlechange(e)
{
    setsearch(e.target.value)
    // const filteredproduct = Data.filter( product =>{
    //     return product.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
    //     console.log(filteredproduct.length)
    // })
}


    return <div>
    <form onSubmit={handlesearch}  style={{textAlign:"center"}}>
<h1>{search}</h1>
      <input type="search" id="gsearch" name="gsearch" onChange={handlechange} />
<button type="submit" className="btn btn-primary" onClick={handlesearch}>Search</button>
    </form>
    </div>
}
