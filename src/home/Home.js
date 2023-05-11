import React from 'react';
import ReactDOM from 'react-dom/client';
// import CommodityManagement from "../common/CommodityManagement";
// import CommodityManagementChange from "../common/CommodityManageChange"
import { Layout, Menu, Breadcrumb, Button, Message } from '@arco-design/web-react';
import { IconHome, IconCalendar, IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import { Link, Route, Routes,Outlet,NavLink} from 'react-router-dom';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;


class Home extends React.Component {
  state = {
    collapsed: false,
    itemName: '商品管理',
    itemId: '1_1',
    itemLink: "",
  };
  handleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
   
  render() {
    return (
      <Layout className='layout-collapse-demo'>
        <Sider collapsed={this.state.collapsed} collapsible trigger={null} breakpoint='xl'>
          <div className='logo' />
          <Menu
            defaultOpenKeys={['1']}
            defaultSelectedKeys={['1_1']}
            onClickMenuItem={(key,event) =>
              Message.info({
                content: `You select ${key}, ${event.target.innerText}   ${this.state.itemLink}`,
                showIcon: true,
              }, 
             
              this.setState({  
                itemName: event.target.innerText,
                itemId: key,
                // itemLink: key=="3_1"?"commodityManagementChange":"commodityManagement",
                }),
              )
              
            }
            style={{ width: '100%' }}
          >
            <MenuItem key='0_1' disabled>
              <IconHome />
              Menu 1
            </MenuItem>

            <SubMenu
              key='1'
              title={
                <span>
                  <IconCalendar />
                  基础管理
                </span>
              }
            >
              <MenuItem key='1_1' itemname="商品管理">商品管理</MenuItem>
            </SubMenu>
            <SubMenu
              key='2'
              title={
                <span>
                  <IconCalendar />
                  订单管理
                </span>
              }
            >
              <MenuItem key='2_1' itemname="交易订单" ><Link to="CommodityManagementChange">交易订单</Link></MenuItem>
            </SubMenu>

            <SubMenu
              key='3'
              title={
                <span>
                  <IconCalendar />
                  系统管理
                </span>
              }
            >
              <MenuItem key='3_1' itemname="用户管理"><Link to={this.state.itemLink}>用户管理</Link></MenuItem>   
              <MenuItem key='3_2' itemname="菜单管理">菜单管理</MenuItem>   
              <MenuItem key='3_3'>角色管理</MenuItem>    
              <MenuItem key='3_4'>公司管理</MenuItem>    
              <MenuItem key='3_5'>系统环境变量</MenuItem>    
              <MenuItem key='3_6'>权限管理</MenuItem>    
            </SubMenu>
            <SubMenu
              key='4'
              title={
                <span>
                  <IconCalendar />
                  支付管理
                </span>
              }
            >
              <MenuItem key='4_1'>支付配置信息</MenuItem>        
              <MenuItem key='4_2'>支付配置</MenuItem>    
            </SubMenu>
            <SubMenu
              key='5'
              title={
                <span>
                  <IconCalendar />
                  图表
                </span>
              }
            >
              <MenuItem key='5_1'>数据可视化</MenuItem>         
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <Button shape='round' className='trigger' onClick={this.handleCollapsed}>
              {this.state.collapsed ? <IconCaretRight /> : <IconCaretLeft />}
            </Button>
          </Header>
          <Layout style={{ padding: '0 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              {/* <Breadcrumb.Item>List</Breadcrumb.Item> */}
              <Breadcrumb.Item>{this.state.itemName}</Breadcrumb.Item>
            </Breadcrumb>
            <Content>
              {/* <Routes>
              
                <Route path='/' element={<CommodityManagement />} />
                <Route path='/commodityManagement' element={<CommodityManagement />} />
                
                <Route path='/commodityManagementChange' element={<CommodityManagementChange/>}/>
              </Routes> */}
              <Outlet/>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
      
    );
  }
}

export default Home;
