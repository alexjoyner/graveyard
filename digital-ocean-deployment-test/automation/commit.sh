#!/usr/bin/env bash
git add .
read -p "Add a comment: " comment
git commit -am "$comment"
git config --global user.name "Alex Joyner"     
git config --global user.email "alex@voicir.com"
git push origin


read -p "FINISHED! Press enter to continue!"