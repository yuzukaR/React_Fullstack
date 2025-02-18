import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Avatar, Table } from 'antd'
import './home.css'
import { getData } from '../../api'

// table col data
const columns = [
    {
        title: 'Data1',
        dataIndex: 'id'
    },
    {
        title: 'Data2',
        dataIndex: 'name'
    },
    {
        title: 'Data3',
        dataIndex: 'age'
    },
    {
        title: 'Data4',
        dataIndex: 'email'
    },
    {
        title: 'Data5',
        dataIndex: 'status'
    }
]

const Home = () => {
    const userImg = require("../../assets/images/1.jpg")
    useEffect(() => {
        getData().then(({ data }) => {
            console.log(data, 'res')
            //const { tableData } = data.data
            setTableData(data.data)
        })
    }, [])
    // table data
    const [tableData, setTableData] = useState([])
    return (
        <Row className='home'>
            <Col span={8}>
                <Card hoverable>
                    <div className='user'>
                        <img src={userImg} />
                        <div className='userinfo'>
                            <p className='name'>Admin</p>
                            <p className='access'>超级管理员</p>
                        </div>
                    </div>
                    <div className='login-info'>
                        <p>上次登录时间：<span>date</span></p>
                        <p>上次登录地点：<span>location</span></p>
                    </div>
                </Card>
                <Card>
                    <Table rowKey={'id'} columns={columns} dataSource={tableData} pagination={false} />
                </Card>
            </Col>
            <Col span={16}>
            </Col>
        </Row>
    )
}

export default Home