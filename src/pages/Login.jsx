import { Col, Row, Image } from "antd";
import React from "react";
import img1 from "../Assests/image/bgimg.jpg";
import LoginForm from "../Components/Login/LoginForm";
import Loginhead from "../Components/Login/Loginhead";

function Login() {
  return (
    <>
      <div className="Login-wrapper">
        <div className="login-wrapper-box">
          <img
            src={img1}
            style={{ height: "100vh" }}
            preview={false}
            alt=""
            srcset=""
          />

          <div className="login-box">
            <Loginhead />
            {/* login form */}
            <LoginForm />
            {/* login form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
