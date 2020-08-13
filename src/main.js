import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/axios/index'
import './utils/header.js'

Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
