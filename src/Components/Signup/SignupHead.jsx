import { Button } from "antd";
import React from "react";
import logo from "../../Assests/image/logo.png"
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function SignupHead() {
  return (
    <>
      <div className="signup-head-wrapper">
        <div className="signup-wrapper-box">
          <div className="signup-wrapper-img">
            <img src={logo} alt="no-img" srcset="" />
          </div>
          <div className="signup-title">
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

export default SignupHead;
