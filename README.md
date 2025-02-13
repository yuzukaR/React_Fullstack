This is a learned base project using react to build a backend manage system.
tech stack including:
1. create-react-app 脚手架
2. react-router-dom 路由
3. axios 二次封装
4. Ant Design UI
5. mock.js 数据模拟
6. echarts 图表

functionality including:
1. project building and route configuration 项目搭建以及路由配置
2. page layout 页面布局
3. menu permission configuration 菜单权限设置
4. user list page 用户列表页面
5. menu function 面包屑和菜单功能
6. system user permission 系统用户鉴权
7. component packaging 组件封装和模块化

_____________________________________
## 开始项目

1. 以create-react-app脚手架开始创建项目  
npx create-react-app my-app  
cd my-app  
npm start  

2. react-router路由介绍  
引进路由  
配置路由文件router/index.js  
分配页面pages，每个页面一个文件夹  

3. Ant组件设计页面布局layout  
npm install Ant  
css重新设计layout  
sider，header组件抽离，创建component文件夹存放自制组件  

4. 引入redux toolkit对分离组件做状态统一  
实现header参数传入sider，对sider组件进行收起  

5. 修改home page，引用ANT的card UI，并引入Axios  

6. Axios的二次封装，为什么要去做，要做哪些事情？  
- 结合Axios提供的API：
- 拦截器  
    - 请求拦截器（接口请求前）    
    - 响应拦截器（拿到数据之后做异常状态处理）  
对axios接口相关的文件，创建API文件夹  



## react-dom-router  
URL对后端服务器发出请求  
后端路由根据不同的URL请求来执行不同的代码，然后返回不同的结果  
前端路由针对不同的URL渲染不同的组件 - 组件中包含的后端请求API接口再向后端进行请求  
    - 拦截：因为前端框架的影响，URL改变先不去请求后端，而是显示不同的组件，由组件中的接口请求后端 
    - 例子：点击不同tab切换路由的url，但并没有对后端发出请求，因为前端拦截了并自己处理了   
1. 在router/index.js中配置router文件  
2. app.js中引入router  
3. index.js创建router组件并render  
4. main.js中使用outlet给子组件占位，表示这个位置可能是给将来挂载其他组件使用的  
使用children来表示嵌套关系  




## Axios  
基于promise网络请求库，作用于node.js和浏览器中。  
- 可以从node.js创建http请求  
- 支持promise API  
- 拦截请求和响应  
- 取消请求  
- 超时处理  
- 查询参数序列化支持嵌套项处理  
- 自动将请求体序列化为: JSON, Multipart/FormData, URL encoded form  
- 将HTML Form 转换成Json进行请求  
- 自动转换JSON数据  



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
