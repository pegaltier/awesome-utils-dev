# MacOS

- https://github.com/iCHAIT/awesome-macOS
- https://github.com/phmullins/awesome-macos
- https://github.com/appleboy/awesome-osx
- https://github.com/nikitavoloboev/my-mac-os
- https://github.com/serhii-londar/open-source-mac-os-apps
- https://github.com/herrbischoff/awesome-macos-command-line

# Swift

- https://github.com/bow-swift/bow-arch

# Tips

- https://www.maketecheasier.com/show-current-path-finder-mac/
- https://stackoverflow.com/questions/30065227/run-open-vscode-from-mac-terminal
- https://stackoverflow.com/questions/31374085/installing-adb-on-macos
- https://www.browserstack.com/guide/how-to-debug-on-iphone

## Spotlight

Wanna speed up your MacOSX by telling Spotlight NOT to index 10k node_modules? Use and run my shell alias...

- Solution 1.

Settings > Spotlight > exclude folders

- Solution 2.

```
alias npm_ignore_indexing='find . -type d -name "node_modules" -exec touch "{}/.metadata_never_index" \; -exec echo "✔ {}" \;'
```
