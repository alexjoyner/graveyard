#!/usr/bin/env bash

PKG_NAME=`node -p "require('./package.json').name"`
PKG_VERSION=`node -p "require('./package.json').version"`

echo "Your current version of $PKG_NAME is $PKG_VERSION. If you need to change the version, please do so now and save package.json.  Press [ENTER] to continue."
read


PKG_VERSION=`node -p "require('./package.json').version"`

echo "Building app with webpack production mode";
webpack -p --define process.env.NODE_ENV="'production'";

echo "Building the server";
babel ./server --out-dir ./docs

echo "Any additional comments to your commit?"
read comments

git add --all;
git commit -m " Deploying $PKG_NAME v$PKG_VERSION : $comments";
git push;
