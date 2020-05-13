#!/bin/sh
# wait-for-routes.sh

set -e

host="$1"
shift
cmd="$@"


services=()

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

# until PGPASSWORD=$POSTGRES_PASSWORD psql -h "$host" -U "postgres" -c '\q'; do
#   >&2 echo "Postgres is unavailable - sleeping"
#   sleep 1
# done

>&2 echo "All required services are up - executing command $cmd"
exec "$cmd"