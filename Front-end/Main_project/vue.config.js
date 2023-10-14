// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


// // vue.config.js

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.21.78.46:3000',
        changeOrigin: true,
        ws: true,                       //是否代理 websockets
        secure: true,                   //是否https接口
        pathRewrite: {                  //路径重置
          '^/api': ''
        }
      }
    }
  }
})
