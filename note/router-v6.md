

> router v6学习





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









