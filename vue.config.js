const host = require('ip').address()

// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'
// 本地环境是否需要使用cdn
const devNeedCdn = false

const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
// cdn链接
const cdn = {
    // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
    externals: {
        // web3: 'Web3',
    },
    // cdn的js链接
    js: [
        // 'https://cdn.idlemystic.io/download/js/web3.js',
        // 'https://cdn.idlemystic.io/download/js/torus-embed.js',
        // 'https://cdn.idlemystic.io/download/js/Portis.js',
    ]
}

module.exports = {
    // publicPath: './',
    productionSourceMap: false,
    devServer: {
        host,
        port: 8080,
        open: true,
        // proxy: 'https://xqadmin.ikanke.cn:10443/ywapi/',
    },
    chainWebpack: config => {
        // config.resolve.symlinks(true); // 修复热更新失效
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@images', resolve('src/assets/images'))
            .set('@common', resolve('src/assets/common'))
            .set('@h5', resolve('src/assets/h5'))
            .set('@web', resolve('src/assets/web'))
            .set('@components', resolve('src/components'))
            .set('@mixins', resolve('src/mixins'))
            .set('@views', resolve('src/views'))
            .set('@store', resolve('src/store'));
        // ============注入cdn start============
        config
            .plugin('html')
            .tap(args => {
                  args[0].title = 'Cyber Kernel | NFT Game | Play and Earn'
                  if (isProduction || devNeedCdn){
                  args[0].cdn = cdn
                }
                return args
            })
        // ============注入cdn start============
    },
    configureWebpack: config => {
        // 用cdn方式引入，则构建时要忽略相关资源
        if (isProduction || devNeedCdn) config.externals = cdn.externals
    }
}
