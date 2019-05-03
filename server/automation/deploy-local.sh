#!/bin/bash -e

SERVER_URL="192.168.0.47"
pushd "../"
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')
popd
  
main(){
  # echo "Checking branch is master or staging"
  # currentBranch=$(git branch | grep \* | cut -d ' ' -f2)
  # if [ "$currentBranch" == "master" ] || [ "$currentBranch" == "staging" ]
  # then
    echo "Current Production Version: $PACKAGE_VERSION "
    echo "You are on $currentBranch branch"
    echo "Making sure all tests are passing"
    yarn run test
    testCode=$?

    if [ $testCode -eq 0 ]
    then
      echo "####################  Starting Server Deployment! ####################"
      deploy_services
      create_production_stack_file
      deploy_stack_to_server
      echo "DONE WITH SERVER DEPLOYMENT!"
    else
      echo "Tests did not pass!!! Cancelling deployment"
    fi
  # else
  #   echo "You cant deploy from branch: $currentBranch" 
  # fi
}

deploy_services(){
  echo "Getting changed services"
  #services=`find ./services -maxdepth 1 -type d`
  services=` \
    find ./services -maxdepth 2 -type f -name '*Dockerfile*' -not -path './services' -not -path '.' \
      | awk 'BEGIN {FS="/"} {print $3}'`
  echo "Found services: ", $services
  
  #docker login
  
  for service in $services
    do 
      echo "Deploying" $service
      # Goto
      pushd "./services/$service"
      docker build -t $SERVER_URL:5000/local-oee-master-$service:v$PACKAGE_VERSION .
      docker push $SERVER_URL:5000/local-oee-master-$service
      # ls
      popd
    done
}

create_production_stack_file(){
  pushd "./services/_main"
  echo "Creating production Stack file"
  sed -i.bak -e "s/[v][0-9]*[.][0-9]*[.][0-9]*/v$PACKAGE_VERSION/g" "docker-compose.local.yml"
  docker-compose -f docker-compose.yml -f docker-compose.local.yml config > docker-local.yml
  popd
}

deploy_stack_to_server(){
  pushd "./services/_main"
  scp ./docker-local.yml adminlocal@$SERVER_URL:/home/adminlocal/apps/oee-master
  ssh adminlocal@$SERVER_URL 'bash -s' < ../../automation/tansfer_local_dockerfile.sh
  popd
}

main
echo "####################  DONE! ####################"