
# IONIC

## BEST PRACTICES
- https://devdactic.com/10-ionic-problems/

## LINKS
https://apps.ionic.io/apps 
http://ionicframework.com/docs/

## GENERAL

component : http://ionicframework.com/docs/v2/components/#overview 
sample : https://github.com/driftyco/ionic-conference-app
events : https://github.com/driftyco/ionic/blob/master/demos/src/events/app.component.ts
events : http://ionicframework.com/docs/v2/api/util/Events/
lifecycle : https://saniyusuf.com/ionic-by-component-page-lifecycle/
lifecycle : http://blog.ionic.io/navigating-lifecycle-events/

### UI

- https://ionicframework.com/docs/v2/ionicons/ 
- http://ionicframework.com/docs/v2/theming/overriding-ionic-variables/ 

### CLI

- http://ionicframework.com/docs/cli

#### CLI GENERAL

```
ionic start cutePuppyPics --v2					> start new project   
cd cutePuppyPics											 
ionic serve										> test web project 
ionic serve --lab								> test web and simulate android/ios mobile
ionic platform add android						> add android platform to project 
ionic platform add browser						> add browser platform to project 
ionic info 

ionic run android  								> run project on android device 
ionic run android --prod 						> run project on android device + minify 
ionic run android --prod --release				> run project on android device + minify + certificate
ionic build browser --prod
```

#### CLI REAL DEVICE
ionic emulate ios --livereload --consolelogs --serverlogs
ionic emulate android --livereload --consolelogs --serverlogs
 
ionic run ios -l -c -s
ionic run android -l -c -s
ionic run android -c

 
#### CLI GENERATE 
```
ionic g page login 
ionic g provider MyData 
ionic g directive ElasticHeader
ionic g directive textHolderPipe
```

#### CLI NEW COMPUTER
```
ionic state save
ionic state restore
```

### PUSH NOTIFICATIONS
- https://docs.ionic.io/services/push/ 
- https://medium.com/@ankushaggarwal/push-notifications-in-ionic-2-658461108c59#.l7dh5evsv 
- https://documentation.onesignal.com/docs/ionic-sdk-setup
- https://documentation.onesignal.com/docs/generate-an-ios-push-certificate
- https://ionicframework.com/docs/v2/native/onesignal/
- http://www.codingandclimbing.co.uk/blog/ionic-2-setup-push-notifications-for-android-with-onesignal-17
- https://documentation.onesignal.com/docs/customize-notification-icons

### IONIC VIEW
(share with others using ionic view app)
cmd: ionic upload
- https://apps.ionic.io/apps
- http://view.ionic.io/
- http://ionicframework.com/docs/cli/uploading_viewing.html
- https://play.google.com/store/apps/details?id=com.ionic.viewapp

update app without store
https://docs.ionic.io/services/deploy/

ionic package (generate apk or ipa)
http://docs.ionic.io/services/package/
https://www.joshmorony.com/building-ionic-2-applications-for-ios-without-a-mac

publish on store
https://ionicframework.com/docs/guide/publishing.html
http://ionicframework.com/docs/v1/guide/publishing.html (old)
https://cordova.apache.org/docs/en/latest/guide/platforms/android/#signing-an-app

create PWA
https://forum.ionicframework.com/t/building-for-browsers-pwa/72689

creator
https://creator.ionic.io/app/login

### UPDATE IONIC VERSION
update 3.3.0 https://github.com/ionic-team/ionic/releases/tag/v3.3.0
update version : http://blog.ionic.io/ionic-2-rc-weekend-updates/
delete node modules and update new version of ionic-angular inside package.json 
rmdir /s/q node_modules
npm install + correct error (angular version)
First, update the version of @ionic/app-scripts in your Ionic 2 app with
npm install @ionic/app-scripts@latest --save-dev

http://blog.ionic.io/announcing-ionic-cli-v3
Second, update your Ionic CLI using
npm install -g ionic

## CAPACITOR


- https://ionicframework.com/blog/announcing-capacitor-1-0/
- https://ionicframework.com/blog/announcing-capacitor-2-0/
- https://capacitor.ionicframework.com/docs/apis/
- https://github.com/capacitor-community

Unlike Cordova Capacitor expects you to commit your native app project (Xcode, Android Studio, etc.) as a source artifact. This means it’s easy to add custom native code, build “plugins” to expose native functionality to your web app without having to actually build a standalone plugin, and also debug and manage your app in the way that embraces the best tooling for that platform.

Capacitor embraces NPM for every dependency in your project, including plugins and platforms. That means you never capacitor install plugin-x, you just npm install plugin-x

Cordova was copying plugin files directly into a project. Instead Capacitor requires your plugins to be Cocoa Pods for iOS or typical android libraries for Android. Then, capacitor comes with a plugin:generate command to quickly scaffold out plugin projects, complete with Xcode and Android Studio projects and unit tests.

Capacitor provides a tiny CLI that is installed locally to each app. That means there are no global dependencies to manage and it’s easy to use different versions of Capacitor across every app you build.

```
npx cap init
npx cap add ios
npx cap add android
npx cap add electron
```

## PLUGINS

- https://github.com/bot101/capacitor-paystack