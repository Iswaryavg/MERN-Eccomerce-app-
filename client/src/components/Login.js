import React from "react";
function Login()
{
    return  <form>

<div className="container">
<h1>Login </h1>
    <input type="text" placeholder="Enter your Email" name="email" required />


    <input type="password" placeholder="Enter Password" name="pwd" required />

        
    <button type="submit">Login</button>
  
  </div>

  <div className="container">
    Don't have an account <button type="button" class="cancelbtn">Signup</button>

  </div>
    </form>
}
export default Login