const host = require('ip').address()

module.exports = {
    // publicPath: './',
    devServer: {
        host,
        port: 8080,
        open: true,
        // proxy: 'https://xqadmin.ikanke.cn:10443/ywapi/',
    },
}
