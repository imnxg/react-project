## 创建react项目
> 由于webpack构建缓慢，本项目用vite进行构建

创建项目看这里 [创建项目步骤](./note/note.md)
> 文档中介绍了本项目使用的相应依赖

## 目录结构
显示目录结构：
```
tree -I node_modules -r -L 2
```
目录结构如下：
```
|-- vite.config.js		vite配置
|-- src
|   |-- utils   		工具
|   |-- mock			公共组件模拟数据	
|   |-- main.jsx   		入口
|   |-- index.css		全局样式
|   |-- home       		主页（布局）
|   |-- css        		css样式
|   |-- components  	各组件
|   |-- common			页面
|   `-- assets
|-- public				静态资源（图片引用，相对路径）
|   |-- vite.svg
|   |-- icon
|   `-- assets
|-- package.json
|-- package-lock.json
|-- note				笔记
|   |-- router-v6.md
|   |-- note.md
|   |-- assets
|   `-- arco-design.md
|-- index.html			
`-- README.md	

9 directories, 15 files

```
## 环境
Node.js v18.14.2

## 拉取和运行项目

安装依赖
```
npm i
```

启动项目：

```
npm run dev
```

编译:

```
npm run build
```
账号：admin
密码：123456
验证码：3n3d

线上地址：[https://react.nnxx.me/](https://react.nnxx.me/)




