import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Message  } from 'element-ui';
import './plugins/axios/index'
import './utils/header.js'
import '@/components/_global.js'

Vue.config.productionTip = false
console.log('router: ', router);

Vue.use(Button)
Vue.prototype.$message = Message

// if(process.env.NODE_ENV === 'development') new window.VConsole();

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
