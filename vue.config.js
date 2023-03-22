module.exports = {
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer:{
    proxy: {
      '/questionServer':{
        target: 'http://127.0.0.1:10000',
        pathRewrite: {'^/questionServer' : ''}
      },
      '/fast': {
        target: 'http://127.0.0.1:9000',
        pathRewrite: {'^/fast' : ''}
      } 
    }
  }
}
