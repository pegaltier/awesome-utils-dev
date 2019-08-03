# GIT TIPS & HELPERS

## TUTORIAL
http://learngitbranching.js.org
https://blog.octo.com/git-dans-la-pratique-22/
https://guides.github.com/features/mastering-markdown/
https://juristr.com/blog/2019/04/productive-git-for-developers/
https://www.atlassian.com/git/tutorials/setting-up-a-repository


## MOST USED 

```
git init (new blank repository)
git remote add origin url://to/source/repository (add a remote)
git status (get infos)
git stash (save local diff)
git stash branch myfeature  (restore the stashed diff on a new branch)
git stash pop (restore the stashed diff on current branch)
git fetch origin <sha1-of-commit-> (fetch a commit or branch or tag)
git cherry-pick d42c389f (apply any commit on current branch)
```

## CLONE 

- Clone existing project into project folder
```
git clone -b my-branch git@github.com:user/myproject.git
```

- Clone existing project into the current folder (.)
```
git clone -b my-branch git@github.com:whatever .
```

- Clone existing project into the specific folder (my-name)
```
git clone -b my-branch git@github.com:whatever my-name
```

## RESET / CLEAN

- Clean deleted branch:  
```
git fetch --prune
```

- Reset to match the remote branch
```
git fetch origin
git reset --hard origin/master
```

- Remove local files
```
git clean -n -f (to see)
git clean -f (to execute)
```

- Reset local
```
rm -Force -Recurse .git
```
- all resets possible
https://stackoverflow.com/a/42903805


## NEW REPO

1. Setting up a remote repository using web github/bitbucket
2. Setting up your local repository and commit
```
git init
git add *
git commit -m "init project"
```
3. Add origin bitbucket or git
```
git remote add origin https/or/git/url
git push origin master
git push -u origin --all
```

## CONFIG 
Switch credentiel method (token)
```
git config user.email

git config --global credential.helper wincred
git config --global credential.helper manager

git remote rm origin
git remote add origin https://user:password@github.com/pegaltier/utils-dev.git
```

## HASH

To get the full SHA:
```
$ git rev-parse HEAD
cbf1b9a1be984a9f61b79a05f23b19f66d533537
```

To get the shortened version:
```
$ git rev-parse --short HEAD
cbf1b9a
```

## VSCODE GIT SSH

```
start-ssh-agent
code
```

## CREATE BRANCH (PE)

1. develop on base branch..
2. stash and create branch from stash
```
git stash
git stash branch 1109-issue-name
```
3. commit and push
```
git commit on ide
git push --set-upstream origin 1109-issue-name
git push -u origin 1109-issue-name
```

## MERGE BRANCH (PE)

Example for merging from master into my-branch
- Solution1. git checkout custom_branch && git merge master
- Solution2. git checkout custom_branch && git rebase master

You can also use VSCode plugin "Git merger":
- from custom_branch > CTRL+SHIFT + P > Git: Merge from > Master

https://medium.com/datadriveninvestor/git-rebase-vs-merge-cc5199edd77c
https://www.atlassian.com/git/tutorials/merging-vs-rebasing
https://www.atlassian.com/git/articles/git-team-workflows-merge-or-rebase
https://hackernoon.com/git-merge-vs-rebase-whats-the-diff-76413c117333

## TOOLS

- <https://github.com/conventional-changelog/commitlint>
- <https://github.com/commitizen/cz-cli>
- <https://projectr.io/>

## ALIAS
https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases
```
git config --global alias.pul "pull origin master"
git config --global alias.pus "push origin master"

git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```