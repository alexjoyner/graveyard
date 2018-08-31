#!/bin/bash

echo "Preparing Development Environment"
dirname=${PWD##*/}
#Make github directory if it doesn't exist
mkdir ~/Documents/GitHub/
#Go up one directory
cd ../
#Move this directory to the Github folder if not already there
mv ./${dirname} ~/Documents/GitHub/
#Goto the github folder
cd ~/Documents/GitHub/
#Clone all the necessary github repos to the github folder
git clone https://github.com/alexjoyner/ees-datalogger-main.git ./ees-datalogger
git clone https://github.com/alexjoyner/eze-handler.git ./eze-handler
git clone https://github.com/alexjoyner/log-handler.git ./log-handler
git clone https://github.com/alexjoyner/datalogger-socket-service.git ./socket-service
git clone https://github.com/alexjoyner/historical-data-service.git ./historical-service
#Go Back to the ees-datalogger-main folder
