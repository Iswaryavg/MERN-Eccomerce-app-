import React from 'react';
import Header from "./components/Header"
import Register from "./components/Register"
import Login from "./components/Login"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Productpage from "./components/Productpage"

import {BrowserRouter,Link,Route} from "react-router-dom"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
 <Header />
 <Route exact path="/Register" component={Register} /> 
 <Route exact path="/" component={Login} />
<Route exact path="/products" component={Productpage} /> 
<Route exact path="/cart" component={Cart} /> 
{/* <Route exact path="/products" component={() => <Productpage data={Data.map(createdata)} />} />  */}
 <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
