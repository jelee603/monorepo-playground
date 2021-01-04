const path = require('path');
module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chart.js',
    library: 'Chart',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
};
