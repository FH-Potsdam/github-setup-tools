#github setup tools

Some tools for setting up github for organizations, managing teams, getting infos and so on.

##Content  

####deprecated (nothing to see here move along)
####init (bash - creates a set of folders from a list and adds README.md and a image)
####issues (bash - create issues from a list needs "ghi" works in a repo)
####organization (nodejs - orga reading)
####team (bash - add users to a team)

##prerequisites Mac OSX  

[homebrew](http://brew.sh)  

    brew install imagemagick
    brew install ghi

##Authentification  
get an auth token like in [this guide](https://help.github.com/articles/creating-an-access-token-for-command-line-use)
__Warning!__ this should stay a secret. It has read write acces to all your repos.


##Environment Variables  
For easy auth code storage you can use [EnvPane](https://github.com/hschmidt/EnvPane). These variables can then be accessed in scripts and applications. 

__In NodeJs:__  

    console.log(process.env.ENV_VARIABLE) // ENV_VARIABLE is the name of the variable 

__In Shell Scripts:__  

    echo $ENV_VARIABLE  


##Misc Infos  

If you want to create a repository without assigning all admins of the organization to it do it like this.  

- Create the repo in your own account  
- go to settings > Danger Zone™ > Transfer
- Transfer the ownership to the organization



##License  

Copyright (c)  2013 Fabian "fabiantheblind" Morón Zirfas  
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software  without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to  permit persons to whom the Software is furnished to do so, subject to the following conditions:  
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  

see also http://www.opensource.org/licenses/mit-license.php


