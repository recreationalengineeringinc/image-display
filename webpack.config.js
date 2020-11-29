var path = require('path');
var CLIENT_DIR = path.join(__dirname, '/client');
var PUBLIC_DIR = path.join(__dirname, '/public');

module.exports = {
  mode: 'development',
  entry: `${CLIENT_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: CLIENT_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css']
  },
};