import React, {useEffect} from 'react'
import { Card, Col, Row, Avatar } from 'antd'
import './home.css'
import { getData } from '../../api'

const Home = () => {
    const userImg = require("../../assets/images/1.jpg")
    useEffect(()=> {
        getData().then((res) => {
            console.log(res, 'res')
        })
}, [])
    return(
        <div>
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
                </Col>
                <Col span={16}>
                </Col>
            </Row>
        </div>
    )
}

export default Home