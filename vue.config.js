module.exports = {
    outputDir: 'dist', // 输出文件目录
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://www.baidu.com/api',
                changeOrigin: true, // 允许websockets跨域
                // ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        } // 代理转发配置，用于调试环境
    }
}