import React, { useState } from "react";
import "./Home.css";
import { getData,postData } from "../../Components/Services/ServerServices";
import { useNavigate } from 'react-router-dom';
// import Form from "../../Components/SimpleForm"
import Navbar from "../../Components/Header/Navbar";
import Loginpage from "../../Components/Login/Loginpage";

function Home() {
  const [email,setEmail]=useState('')
  const [token,setToken]=useState('')
  const navigate=useNavigate()
  const handleClick=async()=>{
    var result =await postData('api/v1/user/sendOtp',{'email':email})
    alert(result.message)
    if(result.message=='otp send'){
      setToken(result.token)
    
      localStorage.setItem('TOKEN_OTP',result.token)
      console.log(localStorage.getItem("TOKEN_OTP"))
      navigate('/otppage',{state:{data:token}})

    }
    
  }
  return (
    <div>
      <Navbar />

      <div className="block2">
        <div className="rise-line">
          <h1 className="temprature-line">
            Let The Temperature <span>Rise !</span>
          </h1>
        </div>
        <div style={{width:'10%'}}>Email
        <input type="email" name="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email Id" required="" /></div>
        <button onClick={handleClick}>Sign up for CELCIUS</button>
        <div className="Login-Form">
          <Loginpage />
        </div>
      </div>

      <div className="address">
        <h3>
          MITS GWALIOR <span className="date"> ,16-18 FEB 2024</span>
        </h3>
      </div>
    </div>
  );
}

export default Home;
