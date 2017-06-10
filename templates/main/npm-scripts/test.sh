#!/usr/bin/env bash

if [ ! -d "docs" ]; then
  echo "No distribution docs folder found. Running initial build";
  NODE_ENV='production' webpack -p
fi

mochaRunner(){
    mocha $(find ./client ./server -path '*spec*') --compilers js:babel-core/register --require ignore-styles --watch
}
coverage(){
    ./npm-scripts/cover.sh
    open ./coverage/lcov-report/index.html
}
echo "How would you like to test?"
select yn in "Mocha Runner" "Coverage Report"; do
    case $yn in
        "Mocha Runner" ) mochaRunner; break;;
        "Coverage Report" ) coverage; exit;;
    esac
done
