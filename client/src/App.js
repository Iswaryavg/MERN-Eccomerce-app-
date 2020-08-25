import React from 'react';
import Header from "./components/Header"
import Register from "./components/Register"
import Login from "./components/Login"
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
 <Header />
 <Register />
 <Login />
 <Footer />
    </div>
  );
}

export default App;
