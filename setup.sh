#!/bin/bash

echo "Preparing Development Environment"
git clone https://github.com/alexjoyner/ees-datalogger-main.git ./packages/__main__
git clone https://github.com/alexjoyner/eze-handler.git ./packages/eze-handler
git clone https://github.com/alexjoyner/log-handler.git ./packages/log-handler
git clone https://github.com/alexjoyner/datalogger-socket-service.git ./packages/socket-service
git clone https://github.com/alexjoyner/historical-data-service.git ./packages/historical-data-service