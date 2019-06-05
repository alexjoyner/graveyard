#!/bin/sh
# wait-for-routes.sh
set -e

cmd=$@

services=("http://accounts/healthz" "http://point-logs/healthz" "http://graphs/healthz" "http://live-data/healthz")

for service in ${services[*]}
do 
  echo "Waiting For" $service
  until [[ "$(curl -s $service)" == "I am happy and healthy" ]]
  do
    >&2 echo "$service is unavailable - waiting 1 sec"
    sleep 1
  done
  echo "$service is up"
done

>&2 echo "All required services are up - executing command $cmd"
exec "$cmd"