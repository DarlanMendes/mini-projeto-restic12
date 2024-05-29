module.exports = {
  devServer: {
    proxy: {
      '^/baseApi':{
        target: 'https://api.themoviedb.org/3',
        changeOrigin:true, 
        pathRewrite:{'^/baseApi':''}
      }
    }
  }
}