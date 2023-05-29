import React, { useState } from 'react';
import '../css/login.css';
import { useNavigate } from "react-router-dom";
import { Button } from '@arco-design/web-react';

/**
 * 登录页面
 * @returns 
 */
function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // 在这里处理登录逻辑，这里简单地将用户名和密码存储到本地存储中
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    //判断是否为空，并自动检测是否为admin
    if (username == "") {
      localStorage.setItem("isLogin", false);
    }
    if (password == "") {
      localStorage.setItem("isLogin", false);
    }

    // 如果用户选择了remember me，存储状态到本地存储中
    if (rememberMe) {
      localStorage.setItem("rememberMe", true);
    } else {
      localStorage.removeItem("rememberMe");
    }
    //判断是否为admin
    if (username == "admin" && password == "admin") {
      localStorage.setItem("isLogin", true);
      //TODO:跳转到主页
      navigate("/home", { state: { value: 111 } });
    }


    // 跳转到主页
    navigate("/home", { state: { value: 111 } });
  };

  const handleUsernameChange = (event) => {
    if (event.target.value === "") {
      setRememberMe(false);
    }
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <div className="loginContainer">
      <div className="loginCanvas">
        <div className="userTitle">用户登录</div>

        <div className="inputContainer">
          {/* <div className="inputLabel">账号</div> */}
          <input type="text" onChange={handleUsernameChange} className="inputField" placeholder="请输入账号" />
        </div>

        <div className="inputContainer">
          {/* <div className="inputLabel">密码</div> */}
          <input
            type="password"
            onChange={handlePasswordChange}
            className="inputField"
            placeholder="请输入密码"
          />
        </div>

        <div className="inputContainer">
          {/* <div className="inputLabel">图形验证</div> */}
          <div className="inputFieldInvidate">
            <input type="text" className='inputInvidate' placeholder="图形验证码" />
            {/* //省略图形验证码的实现,这里直接使用了一张图片,图片地址为./assets/invidate.jpg,可以自行替换,图片大小为100*40,图片中的验证码为1234,可以自行修改,但是需要修改下面的代码,将1234修改为你的验证码,否则无法登录,这里只是简单的实现了一个登录页面,并没有实现验证码的功能 */}
            <span className="invidatePic"><img src="./assets/invidate.jpg" alt="imgName"  className=''/></span>
          </div>
        </div>

        <div className="inputContainer">
          <label>
            <span className='remember_me'><input type="checkbox" onChange={handleRememberMeChange} value="1" /></span>
            <span className='rememberText'>记住密码</span>
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

