const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');

function abs(...args) {
  return path.join(__dirname, ...args);
}

const SRC_ROOT = abs('./src');
const PUBLIC_ROOT = abs('./public');
const DIST_PUBLIC = abs('./dist/public');

module.exports = {
  entry: path.join(SRC_ROOT, 'index.tsx'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  name: 'client',
  output: {
    path: DIST_PUBLIC,
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: PUBLIC_ROOT, to: DIST_PUBLIC }],
    }),
  ],
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  target: 'web',
};
