add-users-via-github-api
========================

add users from shell script



- get a token like in this guide:
[https://help.github.com/articles/creating-an-access-token-for-command-line-use](https://help.github.com/articles/creating-an-access-token-for-command-line-use)  
This should stay a secret it has read write acces to all your repos.  

- create a team https://github.com/organizations/[YOUR_ORGANIZATION]/teams
- get the id of the team  

-----------------

    #!/bin/bash
    yourusername="user-name"
    token="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    response=$(curl -u "$yourusername:$token" https://api.github.com/orgs/:org/teams)
    echo $response


- add all users  

-----------------

    #!/bin/bash
    token="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    yourusername="user-name"
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



Copyright (c)  2013 Fabian "fabiantheblind" Morón Zirfas  
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software  without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to  permit persons to whom the Software is furnished to do so, subject to the following conditions:  
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  

see also http://www.opensource.org/licenses/mit-license.php

