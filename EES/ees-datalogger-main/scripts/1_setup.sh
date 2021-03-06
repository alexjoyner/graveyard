#!/bin/bash

echo "Preparing Development Environment"
#Go up one directory
cd ../../
#Clone all the necessary github repos to the github folder
### Datalogger Repos ###
git clone https://github.com/alexjoyner/ir900_datalogger.git
### Database Repo ###
git clone https://github.com/alexjoyner/ees-datalogger-db.git ./server/db
### Server Repos ###
git clone https://github.com/alexjoyner/eze-handler.git ./server/eze-handler
git clone https://github.com/alexjoyner/log-handler.git ./server/log-handler
git clone https://github.com/alexjoyner/datalogger-socket-service.git ./server/socket-service
git clone https://github.com/alexjoyner/historical-data-service.git ./server/historical-service
git clone https://github.com/alexjoyner/ees-datalogger-nginx.git ./server/nginx

echo "Now you just need the client repo and ro-component-library"