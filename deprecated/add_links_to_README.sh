#!/bin/bash
# This script needs imagemagick
# brew install imagemagick
#
users=("Duffy Duck" "Bender" "Prinzessin Lillifee")
# this should loop all users
#
#
for i in "${users[@]}"
do
   :
    echo "[$i](https://github.com/$i)  " >> README.md
    echo "![$i/image]($i/screenshot.png)  " >> README.md
done