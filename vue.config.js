module.exports = {
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer:{
    proxy: {
      '/getQuestionMeta':{
        target: 'http://127.0.0.1:10000',
        changeOrigin: true
      },
      '/getQuestionInfo':{
        target: 'http://127.0.0.1:10000',
        changeOrigin: true
      },
      '/fast': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: true
      } 
    }
  }
}
