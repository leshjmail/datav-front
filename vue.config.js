module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  // configureWebpack: {
  //   resolve: {
  //     alias: {  
  //       'vue$': 'vue/dist/vue.runtime.common.js'  
  //     }  
  //   },
  // }
  devServer: {
    port: 10009, // 端口号
    host: '0.0.0.0',
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    // hotOnly: true, // 热更新
    // disableHostCheck: false,
    // http://datav.kuaimeo.com
    proxy: {
      '/web': {
        target: 'http://datav.kuaimeo.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/test': ''
        }
      }
    }
  }
};
