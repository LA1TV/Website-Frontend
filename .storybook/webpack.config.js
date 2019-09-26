module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [{
      loader: require.resolve('@storybook/source-loader'),
      options: {
        prettierConfig: {
          printWidth: 100,
          semi: false,
          singleQuote: false,
          tabWidth: 2,
        },
      },
    },],
    enforce: 'pre',
  });

  return config;
};
