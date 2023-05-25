

> router v6学习



> React Router v6 是 React Router 的最新版本，使用了全新的 API 和设计理念，并且不完全向后兼容 v5。
>
> 以下是 React Router v6 的一些主要更改：
>
> - 新的 Hooks API：React Router v6 中引入了许多新的 Hooks，例如“useRoutes”、“useMatch”、“useNavigate”、“useLocation”等。
> - 新的路由配置方式：React Router v6 中使用一个名为“Routes”的组件包裹所有的<Route>，而不是使用<Switch>。
> - 修改<Route>组件：React Router v6 中的<Route>组件不再接受“path”和“exact”属性，取而代之的是使用“element”属性来指定要渲染的组件。
> - 删除很多不常用的 API，简化了 API 的使用。



## 路由的使用

```
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="home" element={<Home />} >
                <Route index element={<CommodityManagement />} />
                <Route path='commodityManagement' element={<CommodityManagement />} />
                <Route path='commodityManagementChange' element={<CommodityManagementChange/>}/>
          </Route>
        </Routes>
      </Router>
```

> 在对应的子页面需要写 <Outlet/>

```
 <Content>
              {/* v5的写法是这样的
              <Routes>
                <Route path='/' element={<CommodityManagement />} />
                <Route path='/commodityManagement' element={<CommodityManagement />} />
                
                <Route path='/commodityManagementChange' element={<CommodityManagementChange/>}/>
              </Routes> */}
               {/* router v6写法是这样的 */}
              <Outlet/>
</Content>
```









