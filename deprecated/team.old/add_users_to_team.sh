#!/bin/bash
# get token like in this guide
# https://help.github.com/articles/creating-an-access-token-for-command-line-use
# this should stay a secret
# it has read write acces to all your repos
#
token="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
yourusername="somebody"
# get the id of the team via
# response=$(curl -u "$yourusername:$token" https://api.github.com/orgs/FH-Potsdam/teams)
# echo $response
team="123456"

# all the users
users=("foo" "bah" "foobah" )

#loop all users
#
#
for i in "${users[@]}"
do
   :
   # do whatever on $i
   $(curl -i -u "$yourusername:$token" -X PUT -d "" https://api.github.com/teams/$team/members/$i)
done