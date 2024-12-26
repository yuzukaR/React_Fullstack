//路由配置
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Main from '../pages/main'
import Home from '../pages/home'
import Goods from '../pages/goods'
import Users from '../pages/users'
import PageOne from '../pages/other/pageOne'
import PageTwo from '../pages/other/pageTwo'
import { Component } from 'react'

const routes = [
    {
        path: '/',
        //对应页面
        Component: Main,
        //子路由
        children: [
            // 重定向
            {
                path: '/',
                element: <Navigate to='home' replace/>
            },
            {
                path: 'home',
                Component: Home
            },
            {
                path: 'users',
                Component: Users
            },
            {
                path: 'goods',
                Component: Goods
            },
            {
                path: 'other',
                children: [
                    {
                        path: 'pageone',
                        Component: PageOne
                    },
                    {
                        path: 'pagetwo',
                        Component: PageTwo
                    }
                ]
            }
        ]
    }
]

//传入路由
export default createBrowserRouter(routes)