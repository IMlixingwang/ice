const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src/'),
        // images:path.resolve(__dirname,'./src/assets/images')
      }
    },
    devtool:"nosources-source-map",
  },
  chainWebpack: config => {
    config.module
      .rule("image-webpack-loader")
      .test(/\.(gif|png|jpe?g|svg)$/i)
      .use("file-loader")
      .loader("image-webpack-loader")
      .tap(() => ({
        disable: process.env.NODE_ENV !== "production"
      }))
      .end();
  }
//   chainWebpack: config => {
//     config.module
//         .rule('images')
//         .use('image-webpack-loader')
//         .loader('image-webpack-loader')
//         .options({
//             bypassOnDebug: true,
//             disable: true,
//             pngquant: {
//               quality: [0.65, 0.90],
//               speed: 4
//             },
//             webp: {
//               quality: 30
//             }
//         })
//         .end()
// }
}