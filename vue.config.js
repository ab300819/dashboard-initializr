const path = require('path');

module.exports = {
  configureWebpack: config => {
    config.entry.app = './src/index.js';
  }
};
