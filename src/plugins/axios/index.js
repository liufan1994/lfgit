import Vue from 'vue'
import axios from 'axios'
// import { Message } from 'element-ui'
// import router from '@/router'

const instance = axios.create({
    // baseURL: 'https://xqadmin.ikanke.cn:10443/ywapi/',
    timeout: 15000,
})
// 添加请求拦截器
instance.interceptors.request.use(
    function(config) {
        // 在发送请求之前做些什么
        // console.log(config)

        const noTokenUrl = ['/v1/employee/list-page22222']

        const token = sessionStorage.getItem('userToken')
        if (token && !noTokenUrl.includes(config.url)) {
            config.headers.token = token
        }

        return config
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    function(res) {
        // 不需要额外处理返回值的URL
        const unHandleUrl = [
            '/v1/visit-log/download', //访客记录-导出
        ]

        if (unHandleUrl.includes(res.config.url)) {
            return res
        }

        if (res.data.status === 200||res.data.status === 901) {
            return res
        } else if ([600, 602].includes(res.data.status)) {
            // Message({
            //     message: res.data.message,
            //     type: 'error',
            // })
            // router.push('/login')
        } else {
            // Message.error(res.data.message)
        }
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)

Vue.prototype.$axios = axios
Vue.prototype.$instance = instance
