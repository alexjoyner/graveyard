#!/bin/bash -e

main(){
    echo "Transferring docker compose"
    cd ~/apps/oee-master
    docker stack deploy --compose-file docker-local.yml oee-master
}

main