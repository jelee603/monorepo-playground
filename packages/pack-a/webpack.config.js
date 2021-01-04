const path = require('path');
module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'grid.js',
    library: 'Grid',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
};
