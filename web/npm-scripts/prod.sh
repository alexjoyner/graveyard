#!/usr/bin/env bash

pm2 start ./process.yml --env env_production --watch
pm2 logs
