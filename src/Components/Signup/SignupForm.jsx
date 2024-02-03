import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function SignupForm() {
  const [form] = Form.useForm();
  const handleSubmit = (value) => {
    console.log(value);
    form.resetFields();
  };
  return (
    <>
      <div className="signupform_box">
        <Form layout="vertical" onFinish={handleSubmit}>
          <Row gutter={6}>
            <Col lg={12}>
              <Form.Item label="First Name">
                <Input placeholder="first name" />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item label="Last Name">
                <Input placeholder="last Name" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Email">
            <Input type="Email" placeholder="Enter Username or Email" />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item label="Confirm Password">
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              style={{ width: "100%", background: "#2cb2f0", color: "white" }}
              type="primary"
              htmlType="submit"
            >
              {" "}
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="form-bottom-links">
          <div className="linkone">
            <p>
              Don't an account ? <Link to="">Sign Up</Link>
            </p>
          </div>
          <div className="linktwo">
            <Link to="">Forget Password</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
