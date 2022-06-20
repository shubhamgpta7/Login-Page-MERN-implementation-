import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import { useState } from 'react';


function App() {

  const [user, setLoginUser] = useState({});

  return (
    <div className='container'>
      <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>

      {/* <Login/>
      <Register/>
      <Home/> */}
    </div>
  );
}

export default App;
