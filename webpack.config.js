const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve ( dir ) {
  return path.join(__dirname, '..', dir)
}

const entry = {
  'vm-library-common': './src/index.js',
  'vm-library-common.mini': './src/index.js',
  'UicButton': './packages/button/index.js',
  'UicProgress': './packages/progress/index.js'
};

module.exports = {
  mode: "none",
  entry: entry,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: "",
    libraryExport: "default",
    library: {
      root: 'uic',
      commonjs: "vm-library"
    },
    libraryTarget: "umd"
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
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
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   include: [ resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client') ]
      // },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              // 开启 CSS Modules
              modules: false
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