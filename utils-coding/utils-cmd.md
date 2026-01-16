# SHELL COMMAND

## TABLE OF CONTENTS

-   -   [Online](#online)
    -   [Terminal](#terminal)
    -   [Utils](#utils)
    -   [ZSH](#zsh)
    -   [Vim](#vim)
    -   [Remove](#remove)
    -   [Alias](#alias)

-   [WSL2](#wsl2)

    -   [WSL2/Nix](#wsl2nix)

        -   [install](#install)
        -   [uninstall](#uninstall)

    -   [Various](#various)

## Online

-   <https://www.shell.how>
-   <https://www.explainshell.com>
-   <https://github.com/cli-guidelines/cli-guidelines>

## Terminal

-   <https://github.com/wavetermdev/waveterm>
-   <https://eugeny.github.io/terminus/>
-   <https://github.com/vercel/hyper>

## Utils

-   <https://github.com/chmln/sd>
-   <https://github.com/cheat/cheat>
-   <https://github.com/sharkdp/bat>
-   <https://github.com/nivekuil/rip>
-   <https://github.com/Adembc/lazyssh>
-   <https://github.com/tldr-pages/tldr>
-   <https://github.com/ohmyzsh/ohmyzsh>
-   <https://github.com/natemoo-re/clack>
-   <https://github.com/starship/starship>
-   <https://github.com/zellij-org/zellij>
-   <https://github.com/ajeetdsouza/zoxide>
-   <https://github.com/idank/explainshell>
-   <https://github.com/shellspec/shellspec>
-   <https://github.com/manifoldco/promptui>
-   <https://github.com/addyosmani/firew0rks>
-   <https://github.com/alebcay/awesome-shell>
-   <https://github.com/romkatv/powerlevel10k>
-   <https://github.com/adrianscheff/useful-sed>
-   <https://github.com/ibraheemdev/modern-unix>
-   <https://github.com/dylanaraps/pure-sh-bible>
-   <https://github.com/gruntwork-io/bash-commons>
-   <https://github.com/trinib/Linux-Bash-Commands>
-   <https://github.com/jlevy/the-art-of-command-line>
-   <https://github.com/grv231/automation-bash-scripts>
-   <https://github.com/Nikoo-Asadnejad/Practical_BashScripts>

## ZSH

-   <https://github.com/zplug/zplug>

## Vim

-   <https://www.fprintf.net/vimCheatSheet.html>

## Remove

    mv node_modules ../node_modules.bak
    rmdir /s /q node_modules (windows)
    rm -r -f node_modules (linux)
    rm -rf ./node_modules (macos)
    rm -rf ./node_modules/.cache/nx
    rm .git/hooks/pre-commit
    rm .git/hooks/pre-push
    rm -f .git/index.lock

## Alias

    alias ..="cd .."
    alias ...="cd ../.."

# WSL2

-   <https://dev.to/equiman/move-wsl-file-system-to-another-drive-2a3d>
-   <https://blog.iany.me/2020/06/move-wsl-to-another-drive/>
-   <https://github.com/DDoSolitary/LxRunOffline>

```bash
explorer.exe .
```

## WSL2/Nix

### install

```bash
# start wsl session & start deamon as root: https://nixos.org/manual/nix/stable/installation/multi-user.html
wsl
sudo su -
nix-daemon
# start another wsl session and enjoy your nix commands
wsl
nix develop --extra-experimental-features nix-command --extra-experimental-features flakes
```

### uninstall

```bash
# https://nix-tutorial.gitlabpages.inria.fr/nix-tutorial/installation.html
# https://github.com/NixOS/nix/issues/1402
# https://github.com/NixOS/nix/issues/5370

# Delete the Nix store (and misc. Nix-related files) as root: 
rm -rf /nix/
# Delete the Nix configuration file as root: 
rm -rf /etc/nix
# Delete your user links as normal user: 
rm -rf ~/.nix-channels ~/.nix-defexpr ~/.nix-profile
```

## Various

    find . -type f -name '*.service.ts' -exec du -s {} + |sort -n
