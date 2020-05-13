module.exports = {
    outputDir: 'dist',
    // 配置 webpack-dev-server 行为。
    devServer: {
        host: '0.0.0.0',
        port: 8885,
        https: false,
        hotOnly: false,
        proxy: {
            '/ns': {
                target: 'http://localhost:8089/ns',  //跨域的域名
                ws: true,
                changeOrigin: true, //是否开启跨域
                pathRewrite: {
                    '^/ns': '/'  // 重写地址
                }
            }
        }
    },
};