# tutorial

https://blog.octo.com/git-dans-la-pratique-22/
https://www.atlassian.com/git/tutorials/setting-up-a-repository
http://learngitbranching.js.org
https://guides.github.com/features/mastering-markdown/

# -----------------------------------------------------------------------

# git most used 

git status (get infos)
git stash (save local diff)
git stash branch myfeature  (restore the stashed diff on a new branch)
git stash pop (restore the stashed diff on current branch)
git cherry-pick d42c389f (apply any commit on current branch)

# make a new blank repository in the current directory
git init

# add a remote
git remote add origin url://to/source/repository

# fetch a commit (or branch or tag) of interest
# Note: the full history of this commit will be retrieved
git fetch origin <sha1-of-commit-of-interest>

# reset this repository's master branch to the commit of interest
git reset --hard FETCH_HEAD
git reset --hard HEAD
git reset HEAD~ 

# reset local
rm -Force -Recurse .git

# all resets possible
https://stackoverflow.com/a/42903805

# -----------------------------------------------------------------------

#0 > git clone existing project into project folder
git clone -b my-branch git@github.com:user/myproject.git

#0 > git clone existing project into the current folder (.)
git clone -b my-branch git@github.com:whatever .

#0 > git clone existing project into the specific folder (my-name)
git clone -b my-branch git@github.com:whatever my-name

# -----------------------------------------------------------------------

#1 > setting up a remote repository using web interface github/bitbucket

#2 > setting up your local repository and commit
git init
git add *
git commit -m "init project"

-- bitbucket or git
git remote add origin https/or/git/url
git push origin master
git push -u origin --all

#3 > suprimmer fichiers
git add -u
git commit -m "Deleted files manually"


# -----------------------------------------------------------------------


switch credentiel method (token)

git config user.email

git config --global credential.helper wincred
git config --global credential.helper manager

git remote rm origin
git remote add origin https://user:password@github.com/pegaltier/utils-dev.git





