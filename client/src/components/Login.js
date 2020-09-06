import React from "react";
import {Link} from "react-router-dom"
function Login()
{
    return  <form  className="container" style={{textAlign:"center"}}>

<div>
<h1 style={{textAlign:"center"}}>Login </h1>
    <input type="text" placeholder="Enter your Email" name="email" required />


    <input type="password" placeholder="Enter Password" name="pwd" required />

        
    <button type="submit" className="btnaccount">Login</button>
  
  </div>
<Link to="/register">
  <div className="container">
    Don't have an account <button type="button" class="cancelbtn">Signup</button>

  </div>
  </Link>
    </form>
}
export default Login