const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
process.chdir(path.join(__dirname, 'template')); //进入目录
const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: '10000ms'
})

//删除dist目录
rimraf('./dist', () => {
  const prodCongfig = require('../../lib/webpack.prod')
  webpack(prodCongfig, (err, stats) => {
    if (err) {
      console.log(err);
      process.exit(2);
    }
    console.log(stats.toString({
      color: true,
      modules: false,
      children: false
    }));
    console.log('webpack build success,begin run test');
    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));
    mocha.run();
  })
})

