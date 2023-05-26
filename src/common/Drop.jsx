import { Dropdown, Menu, Button, Space,Message } from '@arco-design/web-react';
import { IconDown } from '@arco-design/web-react/icon';
import React,{useState} from 'react';
import { useNavigate,Link } from "react-router-dom";

function Drop() {
  const [status,setStatus] = useState(false)
  const navigate = useNavigate();
  if(status){
    signOut();
  }
  const dropList = (
    <Menu 
    defaultOpenKeys={['1']}
    defaultSelectedKeys={['1_1']}
    onClickMenuItem={
      (key,event) => {
        Message.info({
          content: `You select ${key}, ${event.target.innerText}`,
          showIcon: true,
      },
      key=="3"?setStatus(true):""
      ) 
      }
    }
    >
      <Menu.Item key='1'>设置</Menu.Item>
      <Menu.Item key='2'>个人中心</Menu.Item>
      <Menu.Item key='3'>退出</Menu.Item>
    </Menu>
  );


  function signOut (){
   
    navigate("/",{state:{value:111}});
  
  }

  return (
    <Space className='dropdown-demo' style={{ position: "fixed",right: "0",top:"0",margin: "5px"}}>
      <Dropdown droplist={dropList} position='bl'>
        <Button type='text'>
          超级管理员<IconDown />
        </Button>
      </Dropdown>
      {/* <Dropdown droplist={dropList} position='bl' disabled>
        <Button type='text'>
          Hover me <IconDown />
        </Button>
      </Dropdown> */}
    </Space>
  );
}

export default Drop;
