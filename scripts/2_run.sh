#!/bin/bash
echo "Running installation scripts"

### Yarn install on client
cd ../../client
yarn install

## Goto shared github directory
cd ../../

### Yarn link ro component library to client
cd ./node_modules/ro-component-library
yarn install
yarn build
cd ../../ees-datalogger/client
yarn start


