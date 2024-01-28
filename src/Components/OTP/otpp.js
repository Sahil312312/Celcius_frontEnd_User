import React, { useState } from "react";
import Img from "../../i/otp.png";
import "./otpp.css";
import { useLocation } from "react-router-dom";
import axios from "axios"

const ServerURL="http://localhost:8000"

const Otpp = () => {
  const location=useLocation()
  console.log(location)

   var token=location.state.data
   const[box1,setBox1]=useState()
   const[box2,setBox2]=useState()
   const[box3,setBox3]=useState()
   const[box4,setBox4]=useState()
   const[box5,setBox5]=useState()
   const postData=async(URL,body)=>{

    try{
      
       var response=await axios.post(`${ServerURL}/${URL}`,body,
     
       {headers:{Authorization:`Bearer ${localStorage.getItem("TOKEN_OTP")}` }}
        )
     var result= await response.data
     
     return result
    }
    catch(e){
       return null
    }
   }
   const handleClick=async()=>{
    var s=box1+box2+box3+box4+box5
    console.log(s)
    var body={
   otp:s
   }
   console.log(localStorage.getItem("TOKEN_OTP"))
    var result= await postData('api/v1/user/checkOtp',body)
    console.log(result)
    // if(result.status==='failed'){
    //   alert(result.message)
    // }
    // else{
    //   alert('enter')
    // }
   
  }
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card text-center">
          <div className="card-header p-5">
          <div ><img src={Img} alt="" /></div>
            <h5 className="mb-2">CELCIUS OTP VERIFICATION</h5>
            <div>
              <small>Code has been sent to you !</small>
            </div>
          </div>
          <div className="input-container d-flex flex-row justify-content-center mt-2">
            <input
              type="text"
              className="m-1 text-center form-control rounded"
              maxlength="1"
              value={box1} onChange={(event)=>setBox1(event.target.value)}
            />
            <input
              type="text"
              className="m-1 text-center form-control rounded"
              maxlength="1"
              value={box2} onChange={(event)=>setBox2(event.target.value)}
            />
            <input
              type="text"
              className="m-1 text-center form-control rounded"
              maxlength="1"
              value={box3} onChange={(event)=>setBox3(event.target.value)}
            />
            <input
              type="text"
              className="m-1 text-center form-control rounded"
              maxlength="1"
              value={box4} onChange={(event)=>setBox4(event.target.value)}
            />
            <input
              type="text"
              className="m-1 text-center form-control rounded"
              maxlength="1"
              value={box5} onChange={(event)=>setBox5(event.target.value)}
              
              
            />
          </div>
          <div>
            <small>
              Didn't get the otp?
              <a href="#" className="text-decoration-none">
                Resend OTP
              </a>
            </small>
          </div>
          <div className="mt-3 mb-5">
            <button className="btn btn-success px-4 verify-btn" onClick={handleClick}>
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otpp;
