import React from "react";
import { Outlet } from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import CommonAside from "../components/commonAside";
import CommonHeader from "../components/commonHeader"
import { useSelector } from 'react-redux'

const { Header, Sider, Content } = Layout;

const Main = () => {
    // const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    // 创建变量/var————获取state
    const collapsed = useSelector(state => state.tab.isCollapse)
    return (
        <Layout className="main-container">
            {/* 组建抽离，传递变量 */}
            <CommonAside collapsed = {collapsed}/>
            <Layout>
                {/* <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        // icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        // onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header> */}
                <CommonHeader collapsed = {collapsed}/>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Main;
