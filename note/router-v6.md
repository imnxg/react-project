

> router v6学习
>
> router v6文档：[Home v6.11.2 | React Router](https://reactrouter.com/en/6.11.2)



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







在React Router v6中，路由路径匹配的方式发生了一些变化。下面是一些关于路由路径匹配的基本概念和使用方法：

1. 路由路径格式：
   - 精确匹配（Exact Match）：使用`exact`属性或`*`前缀来进行精确匹配。例如，`<Route path="/" exact>`表示只有当路径完全匹配根路径时才会渲染该路由组件。
   - 参数匹配（Param Match）：使用冒号（:）来指定参数。例如，`<Route path="/users/:id">`表示匹配类似`/users/123`这样的路径，并将`:id`作为参数传递给路由组件。
   - 通配符匹配（Wildcard Match）：使用星号（*）作为通配符来匹配任意路径片段。例如，`<Route path="/users/*">`表示匹配以`/users/`开头的所有路径。
2. 路由匹配顺序：
   - 路由路径按照在代码中定义的顺序进行匹配。首先匹配到的路由将被渲染，后面的路由将不再匹配。
   - 若要实现嵌套路由，可以在父级路由组件中定义子路由，并在父级路由组件中渲染`<Outlet>`组件以显示子路由。
3. 嵌套路由：
   - 使用`<Route>`组件定义父级路由，内部可以包含子路由。
   - 在父级路由组件中使用`<Outlet>`组件来渲染子路由。
   - 子路由的路径会追加到父级路由的路径之后。
4. 路由参数：
   - 在路由路径中使用冒号（:）来指定参数。例如，`<Route path="/users/:id">`中的`:id`就是一个参数。
   - 路由参数可以通过`useParams()`钩子函数在路由组件中获取。
   - 路由参数的值可以通过`params`对象访问，例如`const { id } = useParams();`。
5. 嵌套路由参数：
   - 在嵌套路由中，父级路由的参数可以通过`useParams()`获取，而子路由的参数可以通过`useParams()`或父级路由传递给子路由组件的方式获取。

请注意，以上是一些关于React Router v6中路由路径匹配的基本概念和使用方法。具体的使用方式和更高级的路由功能可以参考React Router v6的官方文档，以便更好地理解和应用路由路径匹配的概念。





