const path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  devServer: {
    port: 8080,
    open: true,
  },
};