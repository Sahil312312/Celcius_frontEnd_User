import React from "react";
import "./Home.css";
// import Form from "../../Components/SimpleForm"
import Navbar from "../../Components/Header/Navbar";
import Loginpage from "../../Components/Login/Loginpage";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="block2">
        <div className="rise-line">
          <h1 className="temprature-line">
            Let The Temperature <span>Rise !</span>
          </h1>
        </div>

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
