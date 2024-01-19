import React, { useState } from 'react';
import './Loginpage.css'; // Make sure to adjust the path based on your project structure

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChk, setChk] = useState();
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk"  hidden />
      <div className={`signup ${isChecked ? 'slide-up' : ''}`}>
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" name="txt" placeholder="Username" required="" />
          <input type="email" name="email" placeholder="Enter Email Id" required="" />
          <input type="password" name="pswd" placeholder="Password" required="" />
          <input type="password" name="pswd" placeholder="Confirm Password" required="" />
          <button>Sign up for CELCIUS</button>
        </form>
      </div>

      <div className={`login ${isChecked ? 'slide-down' : ''}`}>
        <form>
          <label htmlFor="chk" aria-hidden="true">
            <u onClick={handleCheckboxChange}>Login Here</u>
          </label>
          <input type="email" name="email" placeholder="Email" required="" />
          <input type="password" name="pswd" placeholder="Password" required="" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default App;


// export default loginpage