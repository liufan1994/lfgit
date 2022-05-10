import Vue from 'vue'
import VueRouter from 'vue-router'
// import Menu from '../utils/menu-list'
// import Message from 'element-ui'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/',
        component: () => import('../views/layout/index.vue'),
        children:[
            {
                path:'home',
                name:'home',
                component: () => import('../views/layout/home.vue')
            }
        ]
    },
]

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes,
})
// 路由白名单-不需要进行菜单权限判断的路由
// const whiteList = ['/login']
// 路由守卫
// router.beforeEach((to, from, next) => {
    // 从本地sessionStorage里面获取当前状态，要先存进去
    // if (sessionStorage.getItem('myCode') === '666' && to.path !== '/login') {
    //   if (to.path === '/content/my-password') next()
    //   else next('/content/my-password')
    // //   if (from.path !== '/login') {
    //     Message({
    //       showClose: true,
    //       message: '您当前使用的是默认密码，请修改密码后登录',
    //       type: 'warning'
    //     })
    // //   }
    //   return
    // }
    // if (whiteList.indexOf(to.path) === -1) {
        // 当要去的页面路由不在白名单内时。表明该路由需要进行菜单权限判断

        // ===下面的代码是【菜单权限判断】===
        // 如果有相等值，那么找到它的下标
        // let userInfo = sessionStorage.getItem('userInfo')
        // const isExist = Menu(String(userInfo)).currMenuList.findIndex(
        //     (item) => {
        //         // currMenuList数组中 是否有 需要跳转到的路径
        //         return item.path === to.path
        //     }
        // )

        // isExist === 0 || isExist === -1
        // if (isExist === -1) {
        //     next('/login')
        // } else {
        //     next()
        // }
    // } else {
        // 否则，直接跳转到对应的页面
        // next()
    // }
// })

export default router
