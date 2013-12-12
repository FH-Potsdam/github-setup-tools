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
   # do whatever on $i
    mkdir $i
    touch $i/README.md
    echo "![image](screenshot.png)  " >> $i/README.md
    echo "#TITLE  " >> $i/README.md
    echo "##DESCRIPTION  " >> $i/README.md
    echo "##AUTHOR  " >> $i/README.md
    echo "Hello my name is [$i](https://github.com/$i) and I'd like to say... " >> $i/README.md
    convert -size 1280x720 xc:white $i/screenshot.png
    echo "##LICENSE  " >> $i/README.md

done