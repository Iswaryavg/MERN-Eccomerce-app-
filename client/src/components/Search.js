import React from "react";
import {useState} from "react"

function Search(props)
 {  const[search,setsearch]=useState("")
console.log(props.filter)
function handlesearch(e)
{
e.preventDefault();
const result={search}
const output=props.filter.find(x=>x.name="product1")
console.log(output)
}
function handlechange(e)
{
    setsearch(e.target.value)
}
    return <div>
    <form onSubmit={handlesearch}  style={{textAlign:"center"}}>
<h1>{search}</h1>
      <input type="search" id="gsearch" name="gsearch" onChange={handlechange} />
<button type="submit" className="btn btn-primary" onClick={handlesearch} datasearch={search}>Search</button>
    </form>
    </div>
}
export default Search;