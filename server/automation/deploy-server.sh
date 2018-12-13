#!/bin/bash -e

get_all_services(){
  services=`find ../services -maxdepth 1 -type d`
}

deploy_services() {
  get_package_version
  get_all_services
}

#./_global/detect_changed_services.sh
#./_global/package_changed_services.sh
main(){
  yarn version
  # Get Main Package Version
  PACKAGE_VERSION=$(cat ../package.json \
    | grep version \
    | head -1 \
    | awk -F: '{ print $2 }' \
    | sed 's/[",]//g' \
    | tr -d '[[:space:]]')
  deploy_services
}
main