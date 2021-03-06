import React from 'react';
import Header from "./components/Header"
import Register from "./components/Register"
import Login from "./components/Login"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Productpage from "./components/Productpage"
import Data from "../src/components/Data"
import {BrowserRouter,Link,Route} from "react-router-dom"
import "./App.css"
import Addtocart1 from "./components/Addtocart1"
import Payment from "./components/Payment"

// function search(props)
// {
//   const search={Search};
//   console.log(props)
// }
function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
 <Header />

 <Route exact path="/Register" component={Register} /> 
 <Route exact path="/" component={Login} />
 {/* <Route exact path="/products" component={Productpage } />  */}
<Route exact path="/cart/:id" component={(props)=><Cart {...props} cartdata={Data} />} /> 

<Route exact path="/products" component={(props) => <Productpage {...props} data={Data}  />} /> 

<Route exact path="/Addtocart1/:id" component={(props)=><Addtocart1 {...props} addtocart={Data} /> }/>
{/* <Route exact path="/Payment" component={(props)=><Payment {...props} placeorder={Data} /> }/> */}
<Route exact path="/Payment" component={Payment   }/>

 <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;