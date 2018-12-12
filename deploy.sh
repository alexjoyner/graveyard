#!/bin/bash -e
get_package_version(){
  # Version key/value should be on his own line
  PACKAGE_VERSION=$(cat package.json \
    | grep version \
    | head -1 \
    | awk -F: '{ print $2 }' \
    | sed 's/[",]//g' \
    | tr -d '[[:space:]]')
}

get_all_services(){
  services=`find ./services -maxdepth 1 -type d`
}

deploy_services() {
  get_package_version
  get_all_services
  echo $PACKAGE_VERSION
  echo $services
}

#./_global/detect_changed_services.sh
#./_global/package_changed_services.sh
main(){
  deploy_services
}
main