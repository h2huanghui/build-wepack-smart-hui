const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js');

  console.log(baseConfig);
  it('entry', () => {
    assert.equal(baseConfig.entry.index.indexOf('build-wepack-smart-hui/test/smoke/template/src/index/index.js') > -1, true)
  })
})