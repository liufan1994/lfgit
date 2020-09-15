import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/axios/index'
import './utils/header.js'
import Tool from './tool/form-verification'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Tool)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
