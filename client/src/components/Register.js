import React from "react";
function Register()
{
    return   <form  className="container" style={{textAlign:"center"}}>

<div className="container">
<h1>Register </h1>
    <input type="text" placeholder="Enter your Email" name="email" required />


    <input type="password" placeholder="Enter Password" name="pwd" required />
    <input type="password" placeholder="Confirm Password" name="pwd" required />
    <button type="submit" className="btnaccount">Login</button>
  
  </div>

  <div className="container">
    Don't have an account <button type="button" class="cancelbtn">Signup</button>

  </div>
    </form>
}
export default Register