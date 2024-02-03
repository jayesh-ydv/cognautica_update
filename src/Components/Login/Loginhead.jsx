import { Button, Col, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import logo from "../../Assests/image/logo.png";
import { Link } from "react-router-dom";

function Loginhead() {
  return (
    <>
      <div className="login-head-wrapper">
        <div className="login-wrapper-box">
          <div className="login-wrapper-img">
            <img src={logo} alt="no-img" srcset="" />
          </div>
          <div className="signin-title">
            <h2>Sign in to Cognatica</h2>
          </div>
          <div className="sign-google-btn">
            <Button>
              <Link to="">
                Sign in With Google <PlusOutlined />
              </Link>
            </Button>
            <br />
            <Link>Or Sign in With Email</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginhead;
