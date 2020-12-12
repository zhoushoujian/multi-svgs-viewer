const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');

const dev = process.env.NODE_ENV !== "production" ? true : false;
console.info("dev", dev);

const webpackConfig = {
  entry: ['./plugin/js/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'plugin/js'),
    publicPath: '',
    filename: '[name].bundle.js',
  },
  devtool: dev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
  mode: dev ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.d\.ts$/,
        loader: 'ignore-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /\.d\.ts$/,
        loader: 'awesome-typescript-loader',
        options: {
          transpileOnly: true,
          "compilerOptions": {
            "lib": [
              "dom"
            ]
          },
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryDirectory: 'es',
              libraryName: 'antd',
              // style: 'css'
            })]
          })
        }
      }
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
};

module.exports = webpackConfig;
