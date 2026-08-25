
const CompressionPlugin = require("compression-webpack-plugin");

let config = {

  //Compress Bundle
  plugins: [new CompressionPlugin()],

  //Minimise Bundle
  optimization: {
    minimize: true,
  },
  devtool:  "source-map",
  
  //Files to watch
  entry: './src/index.js',
  
  //Bundle name
  output: { filename: 'bundle.js' },
}

module.exports = (env, argv) => {

  split(config)

  if (argv.mode === 'development') {
    config.optimization.minimize = false;
    config.plugins = []
  }

  return config;
};

const split = config => {
  config.entry = {
    bundle: './src/index.js',
  }
  config.output = {
    filename: '[name].js',
  }
}