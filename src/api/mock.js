import Mock from 'mockjs'

//拦截接口

Mock.mock(/home\/getData/, function(){
    console.log('拦截接口')
})