import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({
    // baseURL: 'https://xqadmin.ikanke.cn:10443/ywapi/',
    timeout: 15000,
})

Vue.prototype.$axios = axios
Vue.prototype.$instance = instance
