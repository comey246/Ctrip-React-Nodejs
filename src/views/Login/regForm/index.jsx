import React, {Fragment, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import md5 from 'js-md5'
import { setToken } from '@/redux/global/action.js';
import {loginPost, regPost} from "@/api/login.js";
import {encodePassword} from "@/utils/util.js";
import './index.css'
import { Button, Checkbox, Form, Input,message } from 'antd';
const regForm = (props) => {
  const navigate = useNavigate();
    const { setToken} = props;
  const [loading, setLoading] = useState(false);

  useEffect(()=>{

  })

  const onFinish = async (regForm) => {
    try {
        console.log('Success:', regForm);
        const {username, password} = regForm
        setLoading(true);
        const md5Password = md5(password);
        const data = await regPost({username,password:md5Password});
        message.success("注册成功！");
		} finally {
			setLoading(false);
		}
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Fragment>
        <div className="loginForm">
        <h2>注册页面</h2>
        <Form
    name="reg"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
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
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
        </div>
    </Fragment>
 )
}

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(regForm);