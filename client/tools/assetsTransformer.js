//---------------------------------------------------------------------
// This is a fix for jest handling static assets like imported images
// when running tests. It's configured in jest section of package.json
//
// See:
// https://github.com/facebook/jest/issues/2663#issuecomment-317109798
//---------------------------------------------------------------------
const path = require('path');

module.exports = {
  process(src, filename /* , config, options */) {
    // eslint-disable-next-line prefer-template
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
