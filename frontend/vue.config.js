const Dotenv = require('dotenv-webpack');


module.exports = {
  
}
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    iconPaths: {
        favicon32: 'favicon-2.ico',
        favicon16: 'favicon-2.ico',
        appleTouchIcon: 'favicon-2.ico',
        maskIcon: 'favicon-2.ico',
        msTileImage: 'favicon-2.ico'
    }
  },
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  }
}
