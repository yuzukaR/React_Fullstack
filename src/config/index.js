export default [
    {
        path: '/home',
        name: 'home',
        label: '首页',
        icon: 'HomeOutlined',
        url: '/home/index'
    },
    {
        path: '/goods',
        name: 'goods',
        label: '商品管理',
        icon: 'ShopOutlined',
        url: '/goods/index'
    },
    {
        path: '/users',
        name: 'users',
        label: '用户管理',
        icon: 'UserOutlined',
        url: '/users/index'
    },
    {
        path: '/other',
        label: '其他',
        icon: 'SettingOutlined',
        children: [
            {
                path: '/other/pageOne',
                name: 'page1',
                label: '页面1',
                icon: 'SettingOutlined',
            },
            {
                path: '/other/pageTwo',
                name: 'page2',
                label: '页面2',
                icon: 'SettingOutlined',
            },
        ]
    }
]