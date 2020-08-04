const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js');

  console.log(baseConfig);
  it('entry', () => {
    assert.equal(baseConfig.entry.index, 'D:/frontEnd/geekbang/webpack/my-project/build-wepack/test/smoke/template/src/index/index.js')
  })
})