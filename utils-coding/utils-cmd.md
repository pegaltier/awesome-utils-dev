# SHELL COMMAND

## Online

- https://www.shell.how
- https://www.explainshell.com
- https://github.com/cli-guidelines/cli-guidelines

## Terminal

- https://eugeny.github.io/terminus/
- https://github.com/vercel/hyper

## Utils

- https://github.com/cheat/cheat
- https://github.com/sharkdp/bat
- https://github.com/tldr-pages/tldr
- https://github.com/ohmyzsh/ohmyzsh
- https://github.com/idank/explainshell
- https://github.com/shellspec/shellspec
- https://github.com/alebcay/awesome-shell
- https://github.com/romkatv/powerlevel10k
- https://github.com/adrianscheff/useful-sed
- https://github.com/ibraheemdev/modern-unix
- https://github.com/dylanaraps/pure-sh-bible
- https://github.com/gruntwork-io/bash-commons
- https://github.com/jlevy/the-art-of-command-line
- https://github.com/grv231/automation-bash-scripts

## ZSH

- https://github.com/zplug/zplug

## Vim

- https://www.fprintf.net/vimCheatSheet.html

## Remove

```
mv node_modules ../node_modules.bak
rmdir /s /q node_modules (windows)
rm -r -f node_modules (linux)
rm -rf ./node_modules (macos)
rm -rf ./node_modules/.cache/nx
rm .git/hooks/pre-commit
rm .git/hooks/pre-push
rm -f .git/index.lock
```

## Alias

```
alias ..="cd .."
alias ...="cd ../.."
```

# Wsl

- https://dev.to/equiman/move-wsl-file-system-to-another-drive-2a3d
- https://blog.iany.me/2020/06/move-wsl-to-another-drive/
- https://github.com/DDoSolitary/LxRunOffline

```
explorer.exe .
```

## Various

```
find . -type f -name '*.service.ts' -exec du -s {} + |sort -n
```