//路由配置
import { createBrowserRouter } from 'react-router-dom'
import Main from '../pages/main'
import Home from '../pages/home'


const routes = [
    {
        path: '/',
        //对应页面
        Component: Main,
        //子路由
        children: [
            {
                path: 'home',
                Component: Home
            }
        ]
    }
]

//传入路由
export default createBrowserRouter(routes)