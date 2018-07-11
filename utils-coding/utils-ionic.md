
## IONIC2 
https://apps.ionic.io/apps 
 
http://ionicframework.com/docs/v2/getting-started/installation/ 

icons : https://ionicframework.com/docs/v2/ionicons/ 
push1 : https://docs.ionic.io/services/push/ 
push1 : https://medium.com/@ankushaggarwal/push-notifications-in-ionic-2-658461108c59#.l7dh5evsv 
push2 : https://documentation.onesignal.com/docs/ionic-sdk-setup
push2 : https://documentation.onesignal.com/docs/generate-an-ios-push-certificate
push2 : https://ionicframework.com/docs/v2/native/onesignal/
push2 : http://www.codingandclimbing.co.uk/blog/ionic-2-setup-push-notifications-for-android-with-onesignal-17
push2 : https://documentation.onesignal.com/docs/customize-notification-icons
theme : http://ionicframework.com/docs/v2/theming/overriding-ionic-variables/ 
component : http://ionicframework.com/docs/v2/components/#overview 
sample : https://github.com/driftyco/ionic-conference-app
events : https://github.com/driftyco/ionic/blob/master/demos/src/events/app.component.ts
events : http://ionicframework.com/docs/v2/api/util/Events/
parent/child : http://stackoverflow.com/questions/35832407/ionic-2-modify-a-variable-in-app-js-from-child-page
lifecycle : https://saniyusuf.com/ionic-by-component-page-lifecycle/
lifecycle : http://blog.ionic.io/navigating-lifecycle-events/

init project :  
 
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
https://ionicframework.com/docs/intro/deploying/


 
 
ionic emulate ios --livereload --consolelogs --serverlogs
ionic emulate android --livereload --consolelogs --serverlogs
 
ionic run ios -l -c -s
ionic run android -l -c -s
ionic run android -c

 
generate elements 
ionic g page login 
ionic g provider MyData 
ionic g directive ElasticHeader
ionic g directive textHolderPipe




switch from computer
ionic state save
ionic state restore

ionic icons & splash screens
http://ionicframework.com/docs/cli/icon-splashscreen.html





ionic view (share with others using ionic view app)
cmd: ionic upload
https://apps.ionic.io/apps
http://view.ionic.io/
http://ionicframework.com/docs/cli/uploading_viewing.html
https://play.google.com/store/apps/details?id=com.ionic.viewapp

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

UPDATE IONIC VERSION
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
