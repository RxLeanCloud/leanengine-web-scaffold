# 流行的前端框架如何在云引擎部署


## Angular 4

### 1. 安装 @angular/cli

```sh
npm install -g @angular/cli
```

### 2. 初始化一个空的项目

```sh
ng new Todo-Demo
```

### 拷贝 app.js 和 server.js

将当前项目内的 app.js 以及 server.js 拷贝到您的 angular 项目的根目录中

### 本地编译

```
ng build --aot -prod 
```

### 发布到云引擎

```
lean depoy
```

### 打开浏览器预览

访问 `https:{your-custom-subdomain}.leanapp.cn` 即可。