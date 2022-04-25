# lfgit

### Vue 基础生态

1. [Vue](https://cn.vuejs.org/)
2. [Vue Router](https://router.vuejs.org/zh/)
3. [Vuex](https://vuex.vuejs.org/zh/)
4. [Vue CLI 3.0](https://cli.vuejs.org/zh/)

### 第三方库

1. [sass/scss](https://sass-lang.com/)

2. [axios](https://github.com/axios/axios)

3. [element-ui](http://element.eleme.io/#/zh-CN)

## 项目结构

``` js
.
├── public                                                            // 项目 html 模板
│   ├── favicon.ico
│   └── index.html
├── src                                                               // 源代码
│   ├── api                                                           // 接口请求
│   ├── assets                                                        // 公共静态资源
│   │  ├── commom                                                     // 公共图片
│   │  │  └── original                                                // 未压缩图片
│   │  ├── h5                                                         // h5图片
│   │  │  └── original                                                // 未压缩图片
│   │  └── web                                                        // web图片
│   │  │  └── original                                                // 未压缩图片
│   ├── components                                                    // 公共组件
│   │  └── _global                                                    // 组件全局注册
│   ├── extend                                                        // 扩展文件
│   ├── plugins                                                       // 第三方库或者组件统一入口
│   │  └── axios                                                      // http请求封装（axios）及请求错误处理
│   ├── router                                                        // Vue Router路由配置文件
│   ├── store                                                         // Vuex 数据状态管理
│   ├── utils                                                         // 公共工具函数
│   ├── views                                                         // 业务组件（这里需要进一步描述业务模块）
│   ├── App.vue                                                       // 根组件
│   └── main.js                                                       // 入口 js
├── .env.production                                                   // 环境变量：线上开发环境
├── .env.development                                                  // 环境变量：本地开发环境
├── .eslintrc.js                                                      // eslint 配置文件
├── .gitignore                                                        // git 忽略文件
├── babel.config.js                                                   // Babel 配置文件
├── package.json                                                      // 依赖管理
├── README.md                                                         // 项目文档
└── vue.config.js                                                     // Vue CLI 3 配置
```
## 项目开发

1. Project setup
```
npm install
```

2. Compiles and hot-reloads for development
```
npm run serve
```

3. Compiles and minifies for production
```
npm run build
```

4. Lints and fixes files
```
npm run lint
```

## 规范


1. 取名小写，使用 `_` 隔开 例如：`layout_top` 

2. src路径使用 `@/` 例如：`@/assets/commom/logo.png  @commom/logo.png`

## 使用方式

### 组件全局注册

1. `components` 中全局注册组件的文件 `_global.js`

2. `main.js` 引入 ` @/components/_global.js `

3. 页面中使用,无需引入组件，直接使用 ` <HelloWorld /> `

4. ps: `组件名称不可重复`

4. [官网说明](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%9C%A8%E6%A8%A1%E5%9D%97%E7%B3%BB%E7%BB%9F%E4%B8%AD%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C)

### apis 使用

1. apis文件夹里面创建文件home.js

2. 引入`import axios from '../plugins/axios/index`

3. 在`home.js`添加接口: 传两个参数 `params(传值)`  `otherParams(headers)`,不传则默认{}
```
export function heros(params={},otherParams={}) {
  return axios({
    url: '/api/admin/checkip/',
    method: 'get',
    params,
    ...otherParams
  })
}
```
    ps: `参数自定义，可传多个`

4. 页面使用
```
async function(){
            // 调用接口heros并传值
            const res =await heros({
                name:'nameName',
                type:0
            },{
                headers:{"x-requested-with": "XMLHttpRequest"}
            })
            // 下面是需要做的操作
            this.total = res.body.total
        }
```


## 预览地址

1. [开发环境: https://xxx.xxx.com](https://xxx.xxx.com/)
2. [测试环境：https://xxx.xxx.com](https://xxx.xxx.com)
