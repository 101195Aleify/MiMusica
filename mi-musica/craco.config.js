// craco.config.js
module.exports = {
  webpack: {
    alias: {
      '@': require('path').resolve(__dirname, 'src')
    }
  }
};
