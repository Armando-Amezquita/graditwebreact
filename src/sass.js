const path = require('path');

module.exports = {
  style: {
    modules: {
      localIdentName: "[name]__[local]___[hash:base64:5]",
    },
    sass: {
      additionalData: `@import "${path.join(__dirname, 'styles', 'variables.scss')}";`
    },
  },
};