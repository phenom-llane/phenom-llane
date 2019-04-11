const serverConfig = {
  name: 'server',
  entry: './src/index.js',
  target: 'node',
  output: {
    path: `${__dirname}/server`,
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /js$/u,
        exclude: /node_modules/u,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = [serverConfig]

