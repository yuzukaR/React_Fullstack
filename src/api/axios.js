//二次封装axios的逻辑
import axios from 'axios'

const baseUrl = '/api'

// axios二次封装的核心

class HttpRequest {
    constructor () {
        this.baseUrl = baseUrl
    }
    getInsideConfig(){
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }

    request(options){
        options = { ...this.getInsideConfig(), ...options }
        // 创建axios实例
        const instance = axios.create()

        return instance(options)
    }
}

export default new HttpRequest(baseUrl)