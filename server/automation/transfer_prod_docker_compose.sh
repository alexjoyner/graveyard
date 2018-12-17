#!/bin/bash -e

main(){
    echo "Transferring docker compose"
    cd ~/apps/ees-datalogger
    docker stack deploy --compose-file docker-cloud.yml oee-master
}

main