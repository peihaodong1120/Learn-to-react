/*
  配置代理2 ：
    1、在src目录下创建 setuProxy.js 文件
    做如下配置
*/

const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      // 遇见 /api 前缀的请求，就会触发该代理配置 (所有请求都会转发给'http://localhost:5000')
      target: 'http://localhost:5000', // 配置转发目标地址（能返回数据的服务器地址）
      changeOrigin: true, //控制服务器收到的响应头中Host字段的值。 默认false，建议配置为true。
      /*
        当changeOrigin 为false 的时候，服务器就会知道我们的真实host。
      */
      pathRewrite: {
        '^/api1': '' // 替换地址中的关键字为空，保证请求后台服务器的的地址是正常地址
      }
    }),
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {
        '^/api2': ''
      }
    })
  )
}
