import React, { useState, useEffect } from 'react';
import '../css/login.css';
import { useNavigate } from "react-router-dom";
import { Input, Button, Form, Message } from '@arco-design/web-react';
const FormItem = Form.Item;
/**
 * 登录页面
 * @returns 
 */
function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // 判断是否已经登录，如果已经登录，跳转到主页,自动登录
    if (localStorage.getItem("rememberMe") === "true" && localStorage.getItem("isLogin") === "true") {
      navigate("/home", { state: { value: 111 } });
      setTimeout(() => {
        Message.success('登录成功！');
      }, 500);
    }
  }, []);

  const handleLogin = () => {
    //将用户名和密码存储到本地存储中
    localStorage.setItem("username", username);


    // 如果用户选择了remember me，存储状态到本地存储中
    if (rememberMe) {
      localStorage.setItem("rememberMe", true);
    } else {
      localStorage.removeItem("rememberMe");
    }
    //判断是否为admin
    if (username == "admin" && password == "123456" && verificationCode == "3n3d") {
      localStorage.setItem("isLogin", true);
      //TODO:跳转到主页
      navigate("/home", { state: { value: 111 } });
      setTimeout(() => {
        Message.success('登录成功！');
      }, 500);

    } else {
      //判断是否为空，并自动检测是否为admin
      if (username == "") {
        setTimeout(() => {
          Message.error('账号不能为空！');
          localStorage.setItem("isLogin", false);
        }, 500);
        return;
      }
      if (password == "") {
        setTimeout(() => {
          Message.error('密码不能为空！');
          localStorage.setItem("isLogin", false);
        }, 500);

        return;
      }
      if (verificationCode == "") {
        setTimeout(() => {
          Message.error('验证码不能为空！');
          localStorage.setItem("isLogin", false);
        }, 500);
        return;
      }
      if (username != "admin") {
        Message.error('账号不存在');
        return;

      }
      if (password != "123456") {
        Message.error('密码错误');
        return;
      }
      if (verificationCode != "3n3d") {
        Message.error('验证码错误');
        return;
      }
    }

  };

  const handleUsernameChange = (event) => {
    console.log(event);
    if (event === "") {
      setRememberMe(false);
    }
    setUsername(event);
  };

  const handlePasswordChange = (event) => {
    setPassword(event);

  };
  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event);
  };

  const handleRememberMeChange = (event) => {
    console.log(event.target.checked);
    setRememberMe(event.target.checked);
  };


  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };
  return (
    <div className="loginContainer">
      <div className="loginCanvas">
        <div className="userTitle">用户登录</div>
        <Form
          {...formItemLayout}
          form={form}
          labelCol={{
            style: { flexBasis: 90 },
          }}
          wrapperCol={{
            style: { flexBasis: 'calc(100% - 0px)' },
          }}
        >
          <div className="inputContainer">
            <FormItem label='' field='username'
              rules={[
                {
                  required: true,
                  type: 'string',
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <Input type="text" onChange={handleUsernameChange} id="inputField" placeholder="请输入账号" value={username} />
            </FormItem>
          </div>

          <div className="inputContainer">
            <FormItem label='' field='password'
              rules={[
                {
                  required: true,
                  type: 'string',
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <Input
                type="password"
                onChange={handlePasswordChange}
                id="inputField"
                placeholder="请输入密码"
                value={password}
              />
            </FormItem>
          </div>

          <div className="inputContainer">
            <div className="inputFieldInvidate">
              <FormItem label='' field='name'
                rules={[{
                  required: true,
                }
                ]}
              >
                <Input type="text" id='inputInvidate' onChange={handleVerificationCodeChange} placeholder="图形验证码" value={verificationCode} />
                <span className="invidatePic"><img src="./assets/invidate.jpg" alt="imgName" className='' /></span>
              </FormItem>
            </div>
          </div>

          <div className="inputContainer">
            <label>
              <span className='remember_me'><input type="checkbox" className="checkboxLable" onChange={handleRememberMeChange} value={rememberMe} /></span>
              <span className='rememberText'>记住密码</span>
            </label>
          </div>

          <div className="inputContainer">
            <Button type="submit" onClick={handleLogin} id="loginButton">
              登录
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;

