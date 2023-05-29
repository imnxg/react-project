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
.
|-- vite.config.js
|-- src
|   |-- mock
|   |-- main.jsx
|   |-- index.css
|   |-- home
|   |-- css
|   |-- common
|   |-- assets
|   |-- App.jsx
|   `-- App.css
|-- public
|   `-- vite.svg
|-- package.json
|-- package-lock.json
|-- note
|   |-- \263\365\312\274\321\371\312\275.md
|   |-- \261\250\270\346.md
|   |-- router-v6.md
|   |-- note.md
|   |-- assets
|   `-- arco-design.md
|-- index.html
`-- README.md

9 directories, 15 files

```


## 拉取和运行项目

拉取项目

```
git clone ...
```

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

## 效果



