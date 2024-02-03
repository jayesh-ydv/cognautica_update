import React from "react";
import img1 from "../Assests/image/bgimg.jpg";
import SignupHead from "../Components/Signup/SignupHead";
import SignupForm from "../Components/Signup/SignupForm";

function Signup() {
  return (
    <>
      <div className="signup-wrapper">
        <div className="signup-wrapper-box">
          <img src={img1} style={{ height: "100vh" }} alt="" srcset="" />

          <div className="signup-box">
            <SignupHead />
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
