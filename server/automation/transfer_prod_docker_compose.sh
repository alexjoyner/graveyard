#!/bin/bash -e

main(){
    echo "Transferring docker compose"
    cd ~/apps/ees-datalogger
    sh ./redeploy.sh
}

main