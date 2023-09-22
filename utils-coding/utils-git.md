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
- https://actionsbook.com/
- http://learngitbranching.js.org
- https://trunkbaseddevelopment.com
- https://maggieappleton.com/git-mistakes
- https://rogerdudler.github.io/git-guide/
- https://github.com/fffaraz/awesome-github
- https://blog.octo.com/git-dans-la-pratique-22
- https://github.com/mundimark/awesome-markdown
- https://github.com/GoldinGuy/UltimateGitResource
- https://guides.github.com/features/mastering-markdown
- https://github.com/firstcontributions/first-contributions
- https://juristr.com/blog/2019/04/productive-git-for-developers
- https://github.com/githubsatelliteworkshops/ci-cd-with-actions
- https://www.atlassian.com/git/tutorials/setting-up-a-repository
- https://indepth.dev/becoming-a-git-pro-part-1-internal-git-architecture/

## TOOLS
- https://github.com/conventional-changelog/standard-version
- https://github.com/jamesgeorge007/github-activity-readme
- https://github.com/conventional-changelog/commitlint
- https://github.com/toplenboren/simple-git-hooks
- https://github.com/sindresorhus/refined-github
- https://github.com/nemisj/git-removed-branches
- https://github.com/githubocto/repo-visualizer
- https://github.com/kreuzerk/import-conductor
- https://github.com/rafgraph/spa-github-pages
- https://github.com/Gherciu/commitlint-jira
- https://prettier.io/docs/en/precommit.html
- https://github.com/jesseduffield/lazygit
- https://github.com/Kikobeats/git-garbage
- https://github.com/jevakallio/git-notify
- https://github.com/atlassian/changesets
- https://github.com/observing/pre-commit
- https://github.com/release-it/release-it
- https://github.com/zricethezav/gitleaks
- https://github.com/bahmutov/npm-install
- https://github.com/github/super-linter
- https://github.com/lowlighter/metrics
- https://github.com/okonet/lint-staged
- https://github.com/commitizen/cz-cli
- https://github.com/github/git-sizer
- https://github.com/eth0izzle/shhgit
- https://github.com/typicode/husky
- https://github.com/upptime/upptime
- https://github.com/alibaba/hooks
- https://github.com/probot/probot
- https://www.gitkraken.com/
- https://socialify.git.ci/
- https://gitexplorer.com/
- https://projectr.io/

## OSS
- https://github.com/github-20k/super-star
- https://libraries.github20k.com/
- https://www.github20k.com/

## GITLAB
- https://github.com/tavyandy97/span-tree

## ACTIONS
- https://github.com/nektos/act
- https://github.com/garronej/ts_ci
- https://github.com/actions/toolkit
- https://github.com/sdras/awesome-actions
- https://github.com/jonico/awesome-runners
- https://github.com/actionsflow/actionsflow
- https://github.com/ad-m/github-push-action
- https://github.com/rossjrw/pr-preview-action
- https://github.com/benc-uk/workflow-dispatch
- https://github.com/actions/typescript-action
- https://github.com/githubocto/repo-visualizer
- https://github.com/softprops/action-gh-release
- https://github.com/mtfoley/pr-compliance-action
- https://github.com/styfle/cancel-workflow-action
- https://github.com/fountainhead/action-wait-for-check

## TEMPLATES
- https://github.com/badges/shields
- https://github.com/tandpfun/skill-icons
- https://github.com/vgpena/gh-docs-boilerplate
- https://github.com/kefranabg/readme-md-generator
- https://github.com/anuraghazra/github-readme-stats
- https://github.com/stevemao/github-issue-templates
- https://github.com/sindresorhus/css-in-readme-like-wat
- https://github.com/EddieHubCommunity/awesome-github-profiles
- https://github.com/abhisheknaiidu/awesome-github-profile-readme
- https://github.com/kautukkundan/Awesome-Profile-README-templates

## MOST USED

```bash
ssh-keygen -t rsa (create a ssh certificate then import it:account>setting)
git init (new blank repository)
git remote add origin url://to/source/repository (add a remote)
git status (get infos)
git stash (save local diff)
git stash branch myfeature  (restore the stashed diff on a new branch)
git stash pop (restore the stashed diff on current branch)
git fetch origin <sha1-of-commit-> (fetch a commit or branch or tag)
git show d42c389f:path-to-file.ts > histo.txt (load previous file from hash)
git rev-parse HEAD (get last commit hash)
git checkout d42c389f (check out a particular commit)
git cherry-pick d42c389f (apply any commit on current branch)
git cherry-pick -e d42c389f (same as above + change commit message)
git cherry-pick -m 1 d42c389f (apply any merge commit on current branch)
git revert d42c389f (revert any commit on current branch)
git revert -m 1 d42c389f (revert any merge commit on current branch)
git remote prune origin --dry-run (check local branches that have been deleted from remote)
git remote prune origin (clean local branches that have been deleted from remote)
npx git-removed-branches --prune --force (clean local branches that have been deleted from remote)
git branch -d branchname (delete local branch)
git branch -D branchname (delete local branch force)
git config --get remote.origin.url (check the remote url)
git commit --amend -m "New commit msg" (edit wrong unpushed commit message)
```

## CLONE 

- Clone existing project into project folder
```bash
git clone -b my-branch git@github.com:user/myproject.git
```

- Clone existing project into the current folder (.)
```bash
git clone -b my-branch git@github.com:whatever .
```

- Clone existing project into the specific folder (my-name)
```bash
git clone -b my-branch git@github.com:whatever my-name
```

## INIT

1. Setting up a remote repository using web github/bitbucket
2. Setting up your local repository and commit

```bash
git init
git add *
git commit -m "init project"
```

3. Add origin bitbucket or git
```bash
git remote add origin https/or/git/url
git push origin master
git push -u origin --all
```

## RESET

- Clean deleted branch:

```bash
git fetch --prune
```

- Different reset possible

```bash
git fetch origin
git reset --soft  (Uncommit changes, changes are left staged (index))
git reset --mixed (default) (Uncommit + unstage changes, changes are left in working tree)
git reset --hard: (Uncommit + unstage + delete changes, nothing left)
```

- Reset to match the remote branch

```bash
git reset --soft HEAD~1 (Undo last local commit)
git reset --hard origin/master (Undo all the local commits)
git reset --hard 3c74a11530697214cbcc4b7b98bf7a65 (Reset to commit)
git reset --hard (Reset any local changes)
```

- Remove local files and dir
```bash
git clean -n -f (to see)
git clean -f (to execute)
git clean -fd (and dir)
```

- Reset local

```bash
rm -Force -Recurse .git
```

- all resets possible
- https://stackoverflow.com/a/42903805
- https://stackoverflow.com/questions/3528245/whats-the-difference-between-git-reset-mixed-soft-and-hard

## STASH

Find advanced command to use stash feature as much as possible:

```bash
git stash save "your message" 
git stash save -u "your message"
git stash list
git stash apply stash@{1} # or 'stash@{1}' on windows
git stash pop
git stash pop stash@{1} # or 'stash@{1}' on windows
git stash show
git stash show -p
git stash show stash@{1} # or 'stash@{1}' on windows
git stash branch <name> stash@{1} # or 'stash@{1}' on windows
git stash clear
git stash drop stash@{1} # or 'stash@{1}' on windows
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

```bash
git checkout master
git pull
git checkout custom_branch
git merge master
git merge --abort (cancel)
```

You can also use Gitlab/Bitbucket explorer or VSCode plugin "Git merger":
- from custom_branch > CTRL+SHIFT + P > Git: Merge from > Master

## REBASE BRANCH

Rebasing works well when there is not so many commit in your branch else consider squashing all your commits into one before rebasing: Example for rebasing master into custom_branch

```bash
# example by pulling the master locally first
git checkout master
git pull
git checkout custom_branch
git rebase master

# example without pulling develop locally first
git checkout custom_branch
git fetch -a
git rebase origin/develop

# finalize
git rebase --continue (continue the rebase)
git rebase --abort (cancel the rebase)
git push --force (send to remote)
```

## RENAME BRANCH

```bash
# rename the master branch to another old, then rename seotweaks to master and push force
git branch -m master old-master
git branch -m seotweaks master
git push -f origin master
```

## CONTRIBUTE

1. Fork the github remote repository
2. Checkout your fork in your machine
3. Set the source repository as upstream
4. Fetch the full upstream repository.
5. Create branch, do your changes, push
6. Create a PR from your repo to the upstream

```
on the GitHub website fork the repository in question (called ‘upstream’) # step 1
git clone https://github.com/{user}/{source-repo}.git # step 2
git remote add upstream https://github.com/{user}/{source-repo}.git # step 3
git fetch upstream # step 4
git checkout -b my-branch & git commit & git push # step 5
on the GitHub website open a PR for your branch: my-branch # step 6
```

- https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork

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

## MULTI SSH

https://gist.github.com/jexchan/2351996
https://www.freecodecamp.org/news/how-to-manage-multiple-ssh-keys/
https://superuser.com/questions/272465/using-multiple-ssh-public-keys/272613
https://stackoverflow.com/questions/32212593/multiple-ssh-keys-are-not-working

git encrypts/decrypt network traffic using this private/public key mechanism
if you have a pr in ~/.ssh/id_rsa then ssh will automaticly use it
you can also use ssh-agent to manage more keys manually but you have to repeat
each time you reboot since ssh-agent loose config on restart of your computer
so best way is to use the ~/.ssh/config file
in addition to that you can want to configure per repo your user:
git config user.name "Your Pseudo Here"
git config user.email your@email.com


```
# multi key config:

# ssh-agent commands:
# ssh-add -l # list all ssh keys
# ssh-add -D # delete all ssh keys
# ssh-add ~/.ssh/id_rsa # add a specific key
# ssh-add ~/.ssh/id_ed25519
#
# ssh-config example:
# man ssh_config
#
Host *github.com
  Hostname github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentitiesOnly yes
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_ed25519_github

Host *company.com
  Hostname company.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentitiesOnly yes
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa_company
```