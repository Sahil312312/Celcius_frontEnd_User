import "./App.css";
import Home from "./Pages/Home/Home";
import Faq from "./Pages/FAQ/Faq";
import Partners from "./Pages/Partners/partners";
import About from "./Pages/AboutUs/About";
import Schedule from "./Pages/Schedule/Schedule";
import Humans from "./Pages/Humans/Humans";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Loginpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/humans" element={<Humans />} />
      </Routes>
    </>
  );
}

export default App;
//sas
