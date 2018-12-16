#!/bin/bash -e
declare_new_version(){
  # Get Main Package Version
  PACKAGE_VERSION=$(cat ../package.json \
    | grep version \
    | head -1 \
    | awk -F: '{ print $2 }' \
    | sed 's/[",]//g' \
    | tr -d '[[:space:]]')
  echo "Current version: " $PACKAGE_VERSION
  # !!!!!!  THIS new_version variable will be GLOBAL !!!!!
  read -p "New version: " new_version

  echo "Updating version"
  yarn version --new-version $new_version
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
  
  popd
}

main(){
  echo "Making sure all tests are passing"
  yarn test
  testCode=$?

  if [ $testCode -eq 0 ]
  then
    echo "####################  Starting Server Deployment! ####################"
    declare_new_version
    echo "Received version: " $new_version
    # deploy_services
    # create_production_stack_file
    echo "DONE WITH SERVER DEPLOYMENT!"
  else
    echo "Tests did not pass!!! Cancelling deployment"
  fi

}
main
echo "####################  Server Deployed! ####################"