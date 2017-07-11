# tutorial

https://www.atlassian.com/git/tutorials/setting-up-a-repository
http://learngitbranching.js.org


mkdir name

cd name

# make a new blank repository in the current directory
git init

# add a remote
git remote add origin url://to/source/repository

# fetch a commit (or branch or tag) of interest
# Note: the full history of this commit will be retrieved
git fetch origin <sha1-of-commit-of-interest>

# reset this repository's master branch to the commit of interest
git reset --hard FETCH_HEAD



#0 > git clone existing project 
git clone -b my-branch git@github.com:user/myproject.git


#1 > setting up a remote repository using web interface github/bitbucket

#2 > setting up your local repository and commit
git init
git add *
git commit -m "init project"
-- bitbuccket or git
git remote add origin https://hotelubapp@bitbucket.org/hotelubapp/hotelub-php-ws.git
git remote add origin https://github.com/pegaltier/web-style-guide.git
git push origin master
git push -u origin --all

#3 > suprimmer fichiers
git add -u
git commit -m "Deleted files manually"

#4 > change username
git config user.email

# clear local commit and reinit from remote server
git reset --hard origin/<branch_name>