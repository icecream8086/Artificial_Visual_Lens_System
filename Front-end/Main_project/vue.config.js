// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


// // vue.config.js

const { defineConfig } = require('@vue/cli-service')
const config = require('./config');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: config.apiTarget,
        changeOrigin: true,
        ws: true,
        secure: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      fallback: {
        stream: require.resolve("stream-browserify"),
         "crypto": require.resolve("crypto-browserify") 
      },
      
    },
  },
})
