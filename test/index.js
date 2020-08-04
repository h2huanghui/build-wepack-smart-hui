const path = require('path');

process.chdir(path.join(__dirname, 'smoke/template')); //进入文件夹

//引入文件
describe('builder-webpack test case', () => {
  require('./unit/webpack-base-test');
})