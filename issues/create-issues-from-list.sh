#!/bin/bash
#
#
# this script needs ghi to be installed
# https://github.com/stephencelis/ghi
# brew install ghi

issues=("Ape shall not kill ape!" "Luke, I am your father." "Comedy is a dead art form. Tragedy not's funny!" "Foo? - Bah!")
for i in "${issues[@]}"
do
   :
   ghi milestones -l

   ghi open -M 1 -m $i
   echo "opened issue: '$i'"
done