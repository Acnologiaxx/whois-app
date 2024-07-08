const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    buffer: require.resolve('buffer/'),
    timers: require.resolve('timers-browserify'),
    stream: require.resolve('stream-browserify')
  };
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);
  return config;
};