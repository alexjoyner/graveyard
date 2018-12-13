#!/bin/bash -e

main(){
    echo "Deploying client"
    pushd './www/'
    yarn deploy
    popd
    echo "Finished deploying client!"
}
main