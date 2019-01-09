

# COMPOSE
#########
# combine 2 compose files into 1
#   ex: docker-compose -f docker-compose.yml -f docker-compose.prod.yml config > production.yml
docker-compose -f <FILE_1.yml> -f <FILE_2.yml> config > <OUTPUT.YML>

# STACKS
########
# remove a stack
docker stack rm <STACK_NAME>
# view logs of stack failing to start (replicas 0/#)
sudo journalctl -u docker.service | tail -n 50
# view logs of single service 
#   -f = follow
docker service logs ees-datalogger_accounts-service -f
# view status of stack services
docker stack services <SERVICE_NAME>