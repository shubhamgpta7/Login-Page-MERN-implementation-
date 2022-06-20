import React, {useState} from 'react'
import './login.css';

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
   
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email : "",
    password : "",
  })

  

  const handleChange = (element) => {
    const { name, value } = element.target;
    setUser({
      ...user,
      [name]:value
    })
  }

  const handleLogin = () =>{
    axios.post("http://localhost:9002/login",user)
    .then(res => {
      if(res.data.message === "Login Sucessfull"){
        navigate("/home")
      }else{
        alert(res.data.message);
        navigate("/");
      }
      
    })
    ;
  }






  return (
    <div className='login'>
      {console.log(user)}
        <h1 >Login</h1>
        <input type="text" name='email' value={user.email} onChange={handleChange} placeholder='Enter your email-id'/>
        <input type="password" name='password' value={user.password} onChange={handleChange} placeholder='Enter your password'/>
        <div className="button" onClick={handleLogin}>Login</div>
        <div>or</div>
        <div className="button" onClick={()=>{navigate("/register")}}>Register</div>
    </div>
  )
}

export default Login