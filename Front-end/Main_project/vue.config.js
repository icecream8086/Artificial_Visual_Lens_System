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
