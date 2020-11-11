<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [GIT](#git)
  - [TUTORIAL](#tutorial)
  - [TOOLS](#tools)
  - [TEMPLATES](#templates)
  - [MOST USED](#most-used)
  - [CLONE](#clone)
  - [INIT](#init)
  - [RESET](#reset)
  - [STASH](#stash)
  - [HASH](#hash)
  - [CREATE BRANCH](#create-branch)
  - [MERGE/REBASE](#mergerebase)
  - [MERGE BRANCH](#merge-branch)
  - [REBASE BRANCH](#rebase-branch)
  - [CONFIG](#config)
  - [ALIAS](#alias)
  - [VSCODE SSH](#vscode-ssh)
  - [SUBMODULES](#submodules)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# GIT

## TUTORIAL
- https://githooks.com/
- http://learngitbranching.js.org
- https://trunkbaseddevelopment.com
- https://maggieappleton.com/git-mistakes
- https://blog.octo.com/git-dans-la-pratique-22
- https://guides.github.com/features/mastering-markdown
- https://juristr.com/blog/2019/04/productive-git-for-developers
- https://www.atlassian.com/git/tutorials/setting-up-a-repository
- https://indepth.dev/becoming-a-git-pro-part-1-internal-git-architecture/

## TOOLS
- https://github.com/conventional-changelog/standard-version
- https://github.com/conventional-changelog/commitlint
- https://prettier.io/docs/en/precommit.html
- https://github.com/kreuzerk/import-conductor
- https://github.com/okonet/lint-staged
- https://github.com/alibaba/hooks
- https://github.com/jesseduffield/lazygit
- https://github.com/observing/pre-commit
- https://github.com/bahmutov/npm-install
- https://github.com/github/super-linter
- https://github.com/commitizen/cz-cli
- https://github.com/eth0izzle/shhgit
- https://github.com/typicode/husky
- https://www.gitkraken.com/
- https://gitexplorer.com/
- https://projectr.io/

## GITLAB
- https://github.com/tavyandy97/span-tree

## TEMPLATES

- https://github.com/vgpena/gh-docs-boilerplate
- https://github.com/kefranabg/readme-md-generator
- https://github.com/anuraghazra/github-readme-stats
- https://github.com/stevemao/github-issue-templates
- https://github.com/sindresorhus/css-in-readme-like-wat
- https://github.com/abhisheknaiidu/awesome-github-profile-readme
- https://github.com/kautukkundan/Awesome-Profile-README-templates

## MOST USED

```
git init (new blank repository)
git remote add origin url://to/source/repository (add a remote)
git status (get infos)
git stash (save local diff)
git stash branch myfeature  (restore the stashed diff on a new branch)
git stash pop (restore the stashed diff on current branch)
git fetch origin <sha1-of-commit-> (fetch a commit or branch or tag)
git rev-parse HEAD (get last commit hash)
git checkout d42c389f (check out a particular commit)
git cherry-pick d42c389f (apply any commit on current branch)
git cherry-pick -e d42c389f (same as above + change commit message)
git cherry-pick -m 1 d42c389f (apply any merge commit on current branch)
git revert d42c389f (revert any commit on current branch)
git revert -m 1 d42c389f (revert any merge commit on current branch)
git remote prune origin (clean local branches that have been deleted from remote)
git branch -d branchname (delete local branch)
git branch -D branchname (delete local branch force)
git config --get remote.origin.url (check the remote url)
git commit --amend -m "New commit msg" (edit wrong unpushed commit message)
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

## INIT

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

## RESET

- Clean deleted branch:  
```
git fetch --prune
```

- Different reset possible
```
git fetch origin
git reset --soft  (Uncommit changes, changes are left staged (index))
git reset --mixed (default) (Uncommit + unstage changes, changes are left in working tree)
git reset --hard: (Uncommit + unstage + delete changes, nothing left)
```

- Reset to match the remote branch
```
git reset --soft HEAD~1 (Undo last local commit)
git reset --hard origin/master (Undo all the local commits)
git reset --hard 3c74a11530697214cbcc4b7b98bf7a65 (Reset to commit)
git reset --hard (Reset any local changes)
```

- Remove local files and dir
```
git clean -n -f (to see)
git clean -f (to execute)
git clean -fd (and dir)
```

- Reset local
```
rm -Force -Recurse .git
```

- all resets possible
- https://stackoverflow.com/a/42903805
- https://stackoverflow.com/questions/3528245/whats-the-difference-between-git-reset-mixed-soft-and-hard

## STASH

Find advanced command to use stash feature as much as possible:
```
git stash save "your message" 
git stash save -u "your message"
git stash list
git stash apply stash@{1} 
git stash pop
git stash pop stash@{1}
git stash show
git stash show -p
git stash show stash@{1}
git stash branch <name> stash@{1}
git stash clear
git stash drop stash@{1}
```
More detail: https://www.freecodecamp.org/news/useful-tricks-you-might-not-know-about-git-stash-e8a9490f0a1a/

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

## CREATE BRANCH

1. develop on base branch..
2. checkout 
```
git checkout -b branchName
```
3. commit and push
```
git commit on ide
git push --set-upstream origin 1109-issue-name
git push -u origin 1109-issue-name
```

OR

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

## MERGE/REBASE

- https://medium.com/datadriveninvestor/git-rebase-vs-merge-cc5199edd77c
- https://www.atlassian.com/git/tutorials/merging-vs-rebasing
- https://www.atlassian.com/git/articles/git-team-workflows-merge-or-rebase
- https://hackernoon.com/git-merge-vs-rebase-whats-the-diff-76413c117333

## MERGE BRANCH

Example for merging master into custom_branch

```
git checkout master
git pull
git checkout custom_branch
git merge master
git merge --abort (cancel)
```

You can also use Gitlab/Bitbucket explorer or VSCode plugin "Git merger":
- from custom_branch > CTRL+SHIFT + P > Git: Merge from > Master

## REBASE BRANCH

Example for rebasing master into custom_branch

```
git checkout master
git pull
git checkout custom_branch
git rebase master
git rebase --continue (continue the rebase)
git rebase --abort (cancel the rebase)
git push --force (send to remote)
```

## CONTRIBUTE

1. Fork the github remote repository
2. Checkout your fork in your machine
3. Set the source repository as upstream
4. Fetch the full upstream repository.

```
Fork the repository in question (called ‘upstream’) on the GitHub website
git clone https://github.com/{user}/{source-repo}.git # step 2
git remote add upstream https://github.com/{user}/{source-repo}.git # step 3
git fetch upstream # step 4
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


## VSCODE SSH

```
start-ssh-agent
code
```

## SUBMODULES

- switch branch:
```
git pull origin name
git submodule update
```

- reset config:
```
# go to the branch with gitmodules conf
git checkout integration
# get the latest changes
git pull
# copy the new URL to your local config
git submodule sync --recursive
# update the submodule from the new URL
git submodule update --init --recursive
```

- pin a submodule
```
cd submodule
git checkout 1eeda2931087d0d9ab693484e0b0d41e13cd9cb1
cd ..
git commit -m "pins latest @submodule"
```

## PAGES

- https://richpauloo.github.io/2019-11-17-Linking-a-Custom-Domain-to-Github-Pages/