const path = require('path')

// const PreloadWebpackPlugin = require('preload-webpack-plugin');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src/'),
        plugin : path.resolve(__dirname,'./src/plugin')
        // images:path.resolve(__dirname,'./src/assets/images')
      }
    },
    // devtool:"nosources-source-map",
  },
  chainWebpack: config => {
    // config.module
    //     .rule('images')
    //     .use('image-webpack-loader')
    //     .loader('image-webpack-loader')
    //     .options({
    //         bypassOnDebug: true,
    //         disable: true,
    //         pngquant: {
    //           quality: [0.65, 0.90],
    //           speed: 4
    //         },
    //         webp: {
    //           quality: 30
    //         }
    //     })
    //     .end()

    // config.plugin('preload').tap(options => {
    //   console.log(options);
      
    //   options[0].as = (entry) => {
    //     console.log(entry);
        
    //     if (/\.css$/.test(entry)) return 'style';
    //     if (/\.woff$/.test(entry)) return 'font';
    //     // if (/\.png$/.test(entry)) return 'image';
    //     return 'script';
    //   }
    //   options[0].include = 'allAssets'
    //   return options
    // })
  }
}