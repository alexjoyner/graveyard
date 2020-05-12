#!/usr/bin/env bash

webpack-dev-server -d --progress --profile --colors --watch --display-error-details --content-base ../docs --inline --hot
nodemon ../server/server.js --exec babel-node
