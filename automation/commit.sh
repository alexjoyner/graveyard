#!/usr/bin/env bash
git add .
read -p "Add a comment: " comment
git commit -am "$comment"

read -p "FINISHED! Press enter to continue";