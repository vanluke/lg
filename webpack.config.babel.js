import path from 'path';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import { loaders, sasslint } from './webpack-configuration/loaders';
import plugins from './webpack-configuration/plugins';

const devEntry = [
  'webpack-dev-server/client?http://localhost:5100',
  'webpack/hot/dev-server',
  './src/js/index.js'
];

export default {
  entry:  [
    'webpack-dev-server/client?http://localhost:5100',
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js'
  },
  devtool: process.env.NODE_ENV === 'production'
    ? 'source-map'
    : 'inline-source-map',
  resolve: { extensions: ['', '.js'] },
  plugins,
  devServer: {
    contentBase: './public',
    quite: false,
    noInfo: false,
    stats: {
      colors: true,
      timings: true
    },
    hot: true,
    historyApiFallback: { index: '/' }
  },
  module: {
    // preLoaders: [
    //   sasslint
    // ],
    loaders
  },
  postcss() {
    return [precss, autoprefixer];
  }
};
