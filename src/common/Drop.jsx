import { Dropdown, Menu, Button, Space } from '@arco-design/web-react';
import { IconDown } from '@arco-design/web-react/icon';
const dropList = (
  <Menu>
    <Menu.Item key='1'>设置</Menu.Item>
    <Menu.Item key='2'>个人中心</Menu.Item>
    <Menu.Item key='3'>退出</Menu.Item>
  </Menu>
);

function Drop() {
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
