import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/Home' },
    // 首页
    {
        path: '/Home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    // 验证规则
    {
        path: '/validation-rules',
        name: 'validation-rules',
        component: () => import('../views/validation-rules.vue'),
    },
    // 上传文件
    {
        path: '/upload-files',
        name: 'upload-files',
        component: () => import('../views/upload-files.vue'),
    },
]

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes,
})

export default router
