const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "127.0.0.1",
    port: 8888,
    open: true
  },
  lintOnSave: false,

})
