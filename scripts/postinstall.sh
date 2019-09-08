#!/bin/sh

if [ ! -f "${INIT_CWD}/.prettierrc.js" ]; then
  echo "module.exports = require('@weahead/prettier-config');" > "${INIT_CWD}/.prettierrc.js"
fi
