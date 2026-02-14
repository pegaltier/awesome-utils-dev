# MacOS

## TABLE OF CONTENTS

-   [LIST / AWESOME](#list--awesome)

-   [TIPS](#tips)

-   [TOOLS](#tools)

-   [PACKAGE MANAGER](#package-manager)

-   [JAVA](#java)

-   [NGINX](#nginx)

-   [SPOTLIGHT](#spotlight)

-   [CODING](#coding)

-   [DIRECTORY ACCESS](#directory-access)

-   [SYMLINK](#symlink)

-   [SHORTCUTS](#shortcuts)

-   [MOBILE DEV](#mobile-dev)

    -   [Tips (iOS/Android)](#tips-iosandroid)
    -   [Setup (iOS/Android)](#setup-iosandroid)
    -   [Installing Xcode](#installing-xcode)
    -   [Installing Android Studio](#installing-android-studio)
    -   [NVM installation](#nvm-installation)
    -   [Java installation](#java-installation)

-   [iOS Distribute](#ios-distribute)

    -   [iOS Certificate](#ios-certificate)

## LIST / AWESOME

-   <https://github.com/iCHAIT/awesome-macOS>
-   <https://github.com/appleboy/awesome-osx>
-   <https://github.com/jaywcjlove/awesome-mac>
-   <https://github.com/phmullins/awesome-macos>
-   <https://github.com/nikitavoloboev/my-mac-os>
-   <https://github.com/geerlingguy/mac-dev-playbook>
-   <https://github.com/myspaghetti/macos-virtualbox>
-   <https://github.com/PubFoundry/macos-frontend-setup>
-   <https://github.com/serhii-londar/open-source-mac-os-apps>
-   <https://github.com/herrbischoff/awesome-macos-command-line>
-   <https://github.com/BlockchainCommons/Secure-Development-Setup-macOS>

## TIPS

-   <https://www.maketecheasier.com/show-current-path-finder-mac/>
-   <https://stackoverflow.com/questions/30065227/run-open-vscode-from-mac-terminal>
-   <https://stackoverflow.com/questions/31374085/installing-adb-on-macos>
-   <https://www.browserstack.com/guide/how-to-debug-on-iphone>
-   <https://www.wiserfirst.com/blog/how-to-use-asdf-on-macos/>

## TOOLS

-   <https://github.com/jdx/mise>
-   <https://github.com/iina/iina>
-   <https://github.com/lima-vm/lima>
-   <https://github.com/p0deje/Maccy>
-   <https://github.com/asdf-community>
-   <https://github.com/abiosoft/colima>
-   <https://github.com/dwarvesf/hidden>
-   <https://github.com/leits/MeetingBar>
-   <https://github.com/kando-menu/kando>
-   <https://github.com/rxhanson/Rectangle>
-   <https://github.com/seemoo-lab/opendrop>
-   <https://github.com/sickcodes/Docker-OSX>
-   <https://github.com/kavishdevar/librepods>
-   <https://github.com/minamarkham/formation>
-   <https://github.com/jacklandrin/OnlySwitch>
-   <https://github.com/alienator88/Pearcleaner>
-   <https://github.com/LiveContainer/LiveContainer>
-   <https://github.com/NativeScript/template-macos-solid>
-   <https://apps.apple.com/us/app/magnet/id441258766?mt=12>

## PACKAGE MANAGER

-   <https://brew.sh/>
-   <https://github.com/crhuber/kelp>
-   <https://github.com/Homebrew/brew>
-   <https://github.com/lucasgelfond/zerobrew>


    brew update
    brew install nginx
    brew services list

## JAVA

    which java
    /usr/libexec/java_home
    /usr/libexec/java_home -V
    echo $JAVA_HOME

## NGINX

    nginx -V
    sudo nano /private/etc/hosts
    launchctl load /usr/local/cellar/nginx/1.21.0/homebrew.mxcl.nginx.plist
    launchctl unload /usr/local/cellar/nginx/1.21.0/homebrew.mxcl.nginx.plist

Important locations:

    Add configs in -> /usr/local/etc/nginx/servers/
    Default config -> /usr/local/etc/nginx/nginx.conf
    Logs will be in -> /usr/local/var/log/nginx/
    Default webroot is -> /usr/local/var/www/
    Default listen address -> http://localhost:8080

## SPOTLIGHT

Wanna speed up your MacOSX by telling Spotlight NOT to index 10k node_modules? Use and run my shell alias...

-   Solution 1.

Settings > Spotlight > exclude folders

-   Solution 2.


    alias npm_ignore_indexing='find . -type d -name "node_modules" -exec touch "{}/.metadata_never_index" \; -exec echo "✔ {}" \;'

## CODING

-   <https://github.com/bow-swift/bow-arch>
-   <https://github.com/MikeMcQuaid/strap>

## DIRECTORY ACCESS

Finder > Aller > Aller au dossier  
Terminal > ~/Library

## SYMLINK

-   Absolute symbolik link


    ln -s ~/Workspace/website-js/apps/website-js/src/i18n ~/Workspace/website-js/

-   Relative symbolik link


    cd ~/Workspace/website-js/cypress/fixtures/default-context/shared/
    ln -s ../../../../apps/website-js/src/i18n/ i18n

## SHORTCUTS

Lock screen: Control + CMD + Q  
Show/hide hidden: SHIFT+CMD+Dot  
Take screenshot full: SHIFT + CMD + 3  
Take screenshot portion: SHIFT + CMD + 4  
Array \[]: Option + 5/6  
Object {}: Option + 8/9  
Pipe |: Option + 7

## MOBILE DEV


### Tips (iOS/Android)

-   Debug iOS app: open safari > develop > find your device

-   Debug Android app: open chrome > go to: chrome://inspect#devices > find your device

-   <https://developers.google.com/web/tools/chrome-devtools/remote-debugging>

### Setup (iOS/Android)

This tutorial assumes that you are using Zsh as the line shell cmd tool which is used by default in newer versions of macOS.

### Installing Xcode

1.  Search for “xcode” in the App Store
2.  Install XCode from the App Store
3.  Install the Tools CLI: 

    xcode-select --install

### Installing Android Studio

1.  Download and install the latest version available on <https://developer.android.com/studio>
2.  Drag and drop the icon in the Applications directory
3.  Add the conf and the environment variables to the .zshrc file


    touch ~/.zshrc
    export LANG=en_US.UTF-8
    export ANDROID_HOME=~/Library/Android/sdk
    export ANDROID_SDK_ROOT=~/Library/Android/sdk
    export ANDROID_AVD_HOME=~/.android/avd

### NVM installation

NVM allows you to manage different versions of NodeJS (essential when working on more or less recent projects)

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.1/install.sh | bash
    nvm install v10.16.0
    nvm list
    nvm use v10.16.0

### Java installation

Solution 1 seems the easiest and quickest, however you can also choose solution 2 if you prefer the command line or if you have a problem with solution 1.

Solution 1  
Download and install the java JDK8 DMG here: <https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html>

Solution 2

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    brew cask install java --no-quarantine

## iOS Distribute

1.  App > Generic iOS Device
2.  Product > Archive > Distribute app > Ad Hoc (distribute IPA locally)

-   <https://github.com/sindresorhus/create-dmg>

### iOS Certificate

1.  Create an Apple Developper account: <https://appleid.apple.com/account#!&page=create>
2.  Connect the account on XCode: Preference> Account> + (bottom left)
3.  Ask the admin for App Manager access in order to have access to the creation of a distribution certificate  
    <https://developer.apple.com/support/roles/>
4.  make a certificate signing request, follow the procedure: <https://help.apple.com/developer-account/#/devbfa00fef7>
5.  Generate a certificate for your app and write down the password: Xcode > Account > Manage certificate > add (apple distribution)
6.  Open your Keychain, then drag the .cer file to “My certificates” and the .p12 file to “Keys”. You should be able to launch a build from the Product > Archive menu at this step. We will now configure the archive distribution.
7.  Download the profiles from the apple developer site (select the right team at the top right if you have several teams): <https://developer.apple.com/account/resources/profiles/list>  
    Usually, you need a profile to distribute on the App Store, and another for ad hoc distribution.
8.  Import them into XCode by opening the application project, then in the Signing & Capabilities tab. Uncheck Automatically manage signing. Click on Provisioning Profile > Import Profile…. Import the two previously downloaded profiles. Re-check Automatically manage signing
9.  Open Window > Organizer you should find the previously performed build
10. Click on Distribute > Ad Hoc > Next (default) > Select the Ad Hoc profile > Next > Choose the destination path
11. You have your IPA which you can distribute via <https://www.diawi.com/>
