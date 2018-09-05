#!/bin/bash
echo "Running installation scripts"

### Yarn install on client
cd ../client
yarn install

## Goto shared github directory
cd ../../

### Yarn link ro component library to client
cd ./shared/ro-component-library
yarn unlink ro-component-library
yarn link
cd ../../ees-datalogger/client
yarn link ro-component-library
cd ../

#Go Back to the ees-datalogger-main folder
cd ./__main__