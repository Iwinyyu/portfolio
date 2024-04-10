#!/bin/bash

read -p "What is the title of this commit: " title
read -p "What is the description of this commit: " description


git add .
sleep 1s
git commit -m "$title" -m "$description"
sleep 1s
git push origin main



