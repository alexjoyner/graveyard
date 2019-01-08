#!/bin/bash -e

main(){
    echo "Transferring docker compose"
    cd ~/apps/oee-master
    docker stack deploy --compose-file docker-cloud.yml oee-master
}

main