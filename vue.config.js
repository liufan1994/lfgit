const host = require('ip').address()

// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'
// 本地环境是否需要使用cdn
const devNeedCdn = false
// 代码压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
// cdn链接
const cdn = {
    // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
    externals: {
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': 'VueRouter'
    },
    // cdn的js链接
    js: [
        'https://cdn.idlemystic.io/download/js/web3.js',
        'https://cdn.idlemystic.io/download/js/torus-embed.js',
        'https://cdn.idlemystic.io/download/js/Portis.js',
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
        // ============压缩图片 start============
        config.module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({ bypassOnDebug: true })
            .end()
        // ============压缩图片 end============

        config.resolve.symlinks(true);
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
                if (isProduction || devNeedCdn){
                    args[0].title = 'Cyber Kernel | NFT Game | Play and Earn'
                    args[0].cdn = cdn
                }
                return args
            })
        // ============注入cdn start============
    },
    configureWebpack: config => {
        // 用cdn方式引入，则构建时要忽略相关资源
        if (isProduction || devNeedCdn) config.externals = cdn.externals 
        if (isProduction){
            // 代码压缩
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        //生产环境自动删除console
                        compress: {
                            warnings: false, // 若打包错误，则注释这行
                            drop_debugger: true,
                            drop_console: true,
                            pure_funcs: ['console.log']
                        }
                    },
                    sourceMap: false,
                    parallel: true
                })
            )
            // gzip压缩
            const productionGzipExtensions = ['html', 'js', 'css']
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + productionGzipExtensions.join('|') + ')$'
                    ),
                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240
                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false // 删除原文件
                })
            )
            // 公共代码抽离
            config.optimization = {
                splitChunks: {
                    cacheGroups: {
                        vendor: {
                            chunks: 'all',
                            test: /node_modules/,
                            name: 'vendor',
                            minChunks: 1,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority: 100
                        },
                        common: {
                            chunks: 'all',
                            test: /[\\/]src[\\/]js[\\/]/,
                            name: 'common',
                            minChunks: 2,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority: 60
                        },
                        styles: {
                            name: 'styles',
                            test: /\.(sa|sc|c)ss$/,
                            chunks: 'all',
                            enforce: true
                        },
                        runtimeChunk: {
                            name: 'manifest'
                        }
                    }
                }
            }
        }
    }
}
