import React from "react";
import Img from "../../i/otp.png";
import "../Login/otpp.css";

const otpp = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card text-center">
          <div className="card-header p-5">
            <Img />
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
            />
            <input
              type="text"
              className="m-1 text-center form-control rounded"
              maxlength="1"
            />
            <input
              type="text"
              className="m-1 text-center form-control rounded"
              maxlength="1"
            />
            <input
              type="text"
              className="m-1 text-center form-control rounded"
              maxlength="1"
            />
            <input
              type="text"
              className="m-1 text-center form-control rounded"
              maxlength="1"
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
            <button className="btn btn-success px-4 verify-btn">
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default otpp;
