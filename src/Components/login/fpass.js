// import React from 'react'
// import "../login/fpass.css"
// const fpass = () => {
//   return (
//     <div>  <div className="row">
//     <h1>Forgot Password</h1>
//     <h6 className="information-text">Enter your registered email to reset your password.</h6>
//     <div className="form-group">
//       <input type="email" name="user_email" id="user_email"/>
//       <p><label for="username">Email</label></p>
//       <button onclick="showSpinner()">Reset Password</button>
//     </div>
//     <div className="footer">
//       <h5>New here? <a href="#"><u>Sign Up.</u></a></h5>
//       <h5>Already have an account? <a href="#"><u>Log In</u></a></h5>
//     </div>
//   </div></div>
//   )
// }

// export default fpass

// ForgotPasswordPage.js
import React from 'react';
import './forgotpass.css'; // Adjust the path based on your project structure

const ForgotPasswordPage = () => {
  const showSpinner = () => {
    // Add your logic for showing the spinner here
  };

  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="forgotpass.css" />
        <title>Forgot Password Page</title>
      </head>

      <body>
        <div className="row">
          <h1>Forgot Password</h1>
          <h6 className="information-text">Enter your registered email to reset your password.</h6>
          <div className="form-group">
            <input type="email" name="user_email" id="user_email" />
            <p>
              <label htmlFor="username">Email</label>
            </p>
            <button onClick={showSpinner}>Reset Password</button>
          </div>
          <div className="footer">
            <h5>
              New here? <a href="#"><u>Sign Up.</u></a>
            </h5>
            <h5>
              Already have an account? <a href="#"><u>Log In</u></a>
            </h5>
          </div>
        </div>
      </body>
    </>
  );
};

export default ForgotPasswordPage;
