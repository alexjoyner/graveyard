#!/bin/bash -e

new_version=0.0.0
main(){
  echo "Checking branch is master or staging"
  currentBranch=$(git branch | grep \* | cut -d ' ' -f2)
  if [ "$currentBranch" == "master" ] || [ "$currentBranch" == "staging" ]
  then
    echo "You are on $currentBranch branch"
    echo "Making sure all tests are passing"
    yarn run test
    testCode=$?

    if [ $testCode -eq 0 ]
    then
      echo "####################  Starting Server Deployment! ####################"
      declare_new_version
      deploy_services
      create_production_stack_file
      deploy_stack_to_server
      echo "DONE WITH SERVER DEPLOYMENT!"
    else
      echo "Tests did not pass!!! Cancelling deployment"
    fi
  else
    echo "You cant deploy from branch: $currentBranch" 
  fi
}

declare_new_version(){
  pushd "../"
  # Get Main Package Version
  PACKAGE_VERSION=$(cat package.json \
    | grep version \
    | head -1 \
    | awk -F: '{ print $2 }' \
    | sed 's/[",]//g' \
    | tr -d '[[:space:]]')
  echo "Current version: " $PACKAGE_VERSION
  # !!!!!!  THIS new_version variable will be GLOBAL !!!!!
  read -p "New version: " new_version

  echo "Updating version to " $new_version
  yarn version --new-version $new_version
  popd
}

deploy_services(){
  echo "Getting changed services"
  #services=`find ./services -maxdepth 1 -type d`
  services=` \
    find ./services -maxdepth 2 -type f -name '*Dockerfile*' -not -path './services' -not -path '.' \
      | awk 'BEGIN {FS="/"} {print $3}'`
  echo "Found services: ", $services
  
  docker login
  
  for service in $services
    do 
      echo "Deploying" $service
      # Goto
      pushd "./services/$service"
      docker build -t rosco9awj/oee-master-$service:v$new_version .
      docker push rosco9awj/oee-master-$service
      # ls
      popd
    done
}

create_production_stack_file(){
  pushd "./services/_main"
  echo "Creating production Stack file"
  sed -i.bak -e "s/[v][0-9]*[.][0-9]*[.][0-9]*/v$new_version/g" "docker-compose.prod.yml"
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml config > docker-cloud.yml
  popd
}

deploy_stack_to_server(){
  SERVER_URL="204.48.24.79"
  pushd "./services/_main"
  scp ./docker-cloud.yml alex@$SERVER_URL:/home/alex/apps/oee-master
  ssh alex@$SERVER_URL 'bash -s' < ../../automation/transfer_prod_docker_compose.sh
  popd
}

main
echo "####################  DONE! ####################"