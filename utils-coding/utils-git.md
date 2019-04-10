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


## HASH

To get the full SHA:

$ git rev-parse HEAD
cbf1b9a1be984a9f61b79a05f23b19f66d533537

To get the shortened version:
$ git rev-parse --short HEAD
cbf1b9a



## VSCODE GIT SSH

start-ssh-agent
code



## CREATE BRANCH (PE)

npm start
... develop on master..
git stash
git stash branch 1109-issue-name

git commit on ide
git push --set-upstream origin 1109-issue-name
git push -u origin 1109-issue-name

## MERGE BRANCH (PE)

utils git merge branches

Solution1: Merge
from working branch with vscode plugin "Git merger"
CTRL+SHIFT + P > Git: Merge from > Master

Solution2: Rebase
from the master 
rebase `mybranch`

https://www.atlassian.com/git/tutorials/merging-vs-rebasing
https://www.atlassian.com/git/articles/git-team-workflows-merge-or-rebase
https://hackernoon.com/git-merge-vs-rebase-whats-the-diff-76413c117333

------------------------------------

utils gitlab clean deleted branch

git fetch --prune

------------------------------------


## TOOLS

https://github.com/conventional-changelog/commitlint
https://github.com/commitizen/cz-cli
https://projectr.io/

## ALIAS
https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases
git config --global alias.pul "pull origin master"
git config --global alias.pus "push origin master"

git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status