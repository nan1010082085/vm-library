const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve ( dir ) {
  return path.join(__dirname, '..', dir)
}


module.exports = {
  mode: "none",
  entry: {
    'vm-library': './src/index.js',
    'vm-library.mini': './src/index.js'
  },
  output: {
    filename: "[name].js",
    library: 'vmLibrary',
    libraryExport: 'default',
    libraryTarget: "umd"
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.mini\.js$/
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [ resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client') ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              // 开启 CSS Modules
              modules: false,
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}