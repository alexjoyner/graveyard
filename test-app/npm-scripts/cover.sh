#!/usr/bin/env bash

node_modules/istanbul/lib/cli.js cover node_modules/mocha/bin/_mocha -- -R spec $(find ./client ./server -path '*spec*')  --compilers js:babel-core/register --require ignore-styles
