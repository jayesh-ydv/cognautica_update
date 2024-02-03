import React from "react";
import { Button, Checkbox, Col, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function LoginForm() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
    form.resetFields();
  };
  return (
    <>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="Email"
          type="Email"
          placeholder="Email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
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
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className="form-bottom-links">
        <div className="linkone">
          <p>
            Don't an account ? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
        <div className="linktwo">
          <Link to="">Forget Password</Link>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
