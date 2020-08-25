import React from 'react';
import Header from "./components/Header"
import Register from "./components/Register"
import Login from "./components/Login"
import Footer from "./components/Footer"
import {BrowserRouter,Link,Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
 <Header />

 <Route exact path="/Register" component={Register} /> 
 <Route exact path="/" component={Login} />


 <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
