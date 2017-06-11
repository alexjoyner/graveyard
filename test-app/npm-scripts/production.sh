#!/usr/bin/env bash

pm2 start ../process.yml --env env_production
pm2 logs
