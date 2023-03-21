module.exports = {
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer:{
    proxy: {
      '/django':{
        target: 'http://127.0.0.1:8000',
        pathRewrite: {'^/django' : ''}
      },
      '/fast': {
        target: 'http://127.0.0.1:9000',
        pathRewrite: {'^/fast' : ''}
      } 
    }
  }
}
