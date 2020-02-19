const fs = require('fs');
const path = require('path');

const prettierrcPath = path.join(process.env.INIT_CWD, '.prettierrc.js');

if (!fs.existsSync(prettierrcPath)) {
  fs.writeFileSync(
    prettierrcPath,
    "module.exports = require('@weahead/prettier-config');"
  );
}
