import React,{useState,useRef} from 'react';
// import ReactDOM from 'react-dom/client';
import '../css/login.css';
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Button, Message,Input } from '@arco-design/web-react';
import { IconHome, IconCalendar, IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import "@arco-design/web-react/dist/css/arco.css";
// import reportWebVitals from './reportWebVitals';

function Login() {
  const myRef  = useRef(null);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
  
    const handleLogin = () => {
      // 在这里处理登录逻辑，这里简单地将用户名和密码存储到本地存储中
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
  
      // 如果用户选择了remember me，存储状态到本地存储中
      if (rememberMe) {
        localStorage.setItem("rememberMe", true);
      } else {
        localStorage.removeItem("rememberMe");
      }
  
      // 跳转到主页
      navigate("/home",{state:{value:111}});
    };
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleRememberMeChange = (event) => {
      setRememberMe(event.target.checked);
    };

  return (
    <div className="loginContainer" ref={myRef}>
      <div className="loginCanvas">
        <div className="userTitle">用户登录</div>

        <div className="inputContainer">
          <div className="inputLabel">账号</div>
          <input type="text" onChange={handleUsernameChange} className="inputField" placeholder="请输入账号" />
        </div>

        <div className="inputContainer">
          <div className="inputLabel">密码</div>
          <input
            type="password"
            onChange={handlePasswordChange}
            className="inputField"
            placeholder="请输入密码"
          />
        </div>

        <div className="inputContainer">
          <div className="inputLabel">图形验证</div>
          <div className="inputField">
            <input type="text"  placeholder="请输入验证码" />
            {/*省略图形验证码的实现*/}
          </div>
        </div>

        <div className="rember">
          <label>
            <input type="checkbox" onChange={handleRememberMeChange} name="rember_me" value="1" />
            记住密码
          </label>
        </div>

        <div className="loginButton">
          <Button type="submit" onClick={handleLogin} className="button">
            登录
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;

