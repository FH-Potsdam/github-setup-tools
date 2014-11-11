#!/bin/zsh
# needs jq installed
# http://stedolan.github.io/jq/
#
# gets all the repos I'm a member

main(){
if [ $# -eq 0 ]
  then
    echo "please provide one name for the user to query"
    echo "usage:  sh get_collabo.sh fabiantheblind"
    exit
fi
  if hash brew 2>/dev/null; then
  echo "homebrew is installed"
else
  echo "installing homebrew"
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  brew doctor
fi

if hash jq 2>/dev/null; then
  echo "jq is installed"
else
  echo "installing jq"
  brew install jq
fi

  url="https://api.github.com/users/${1}/repos?type=member"
  curl $url | jq '.[].owner.login'
}
# execute
main $1