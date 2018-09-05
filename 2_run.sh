#!/bin/bash
echo "Running installation scripts"

### Yarn install on client
cd ../client
yarn install

## Goto shared github directory
cd ../../

### Yarn link ro component library to client
cd ./shared/ro-component-library
yarn install
yarn build
yarn unlink ro-component-library
yarn link
cd ../../ees-datalogger/client
yarn link ro-component-library
yarn start


