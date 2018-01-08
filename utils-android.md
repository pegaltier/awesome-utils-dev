<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Android / IntelliJ TIPS (FOR WINDOWS)](#android--intellij-tips-for-windows)
  - [SHORTCUT](#shortcut)
  - [LIVE TEMPLATES](#live-templates)
  - [FIX](#fix)
  - [AUTOCOMPLETE](#autocomplete)
  - [SHOW INTENTION](#show-intention)
  - [GROOVY CONSOLE](#groovy-console)
  - [PLUGIN](#plugin)
  - [SDK](#sdk)
  - [LIB](#lib)
  - [BUILD](#build)
  - [DRAFT](#draft)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# GRADLE CLEAN CACHE
C:\Users\pegal\.gradle\wrapper\dists



# Android / IntelliJ TIPS (FOR WINDOWS)

android dev : https://developer.android.com/index.html
Download badge : https://play.google.com/intl/fr_fr/badges/
experiment store : https://developer.android.com/distribute/users/experiments.html
zipalign (optimize RAM) : https://developer.android.com/studio/command-line/zipalign.html
https://developer.android.com/about/versions/nougat/android-7.0.html#apk_signature_v2


## COMMON Error activity + toolbar + action bar
https://developer.android.com/training/appbar/index.html
https://guides.codepath.com/android/using-the-app-toolbar													***************
https://stackoverflow.com/questions/31297246/activity-appcompatactivity-fragmentactivity-and-actionbaractivity-when-to-us


## COMMON Error share data 
https://stackoverflow.com/questions/4878159/whats-the-best-way-to-share-data-between-activities				***************

## COMMON Error data storage
https://stackoverflow.com/questions/6063550/android-best-way-to-save-data-stored-in-application-singleton-class

// COMMON Error user activity
https://stackoverflow.com/questions/4208730/how-to-detect-user-inactivity-in-android						*************** todo

## COMMON Error application/singleton/context
https://stackoverflow.com/questions/2002288/static-way-to-get-context-on-android?rq=1						***************
https://www.fwd.cloud/commit/post/android-context-on-demand/												***************
https://android.jlelse.eu/how-to-make-the-perfect-singleton-de6b951dfdb0									***************
http://www.developerphil.com/dont-store-data-in-the-application-object/										***************
https://stackoverflow.com/questions/987072/using-application-context-everywhere								***************
https://possiblemobile.com/2013/06/context/																	***************
https://medium.com/@programmerr47/singletons-in-android-63ddf972a7e7										***************

https://android-developers.googleblog.com/2009/01/avoiding-memory-leaks.html
https://code.tutsplus.com/tutorials/android-design-patterns-the-singleton-pattern--cms-29153
https://stackoverflow.com/questions/4208886/using-the-android-application-class-to-persist-data



## UTILS
https://www.appbrain.com/apptimizer
http://gunhansancar.com/tools/converter/#
https://android.fallible.co/#
http://stackoverflow.com/questions/24882550/how-to-format-text-in-string-displayed-in-textview
https://www.img-bak.in >> generate icons
https://romannurik.github.io/AndroidAssetStudio/index.html
https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html > Round icons generate
http://inloop.github.io/svg2android/

## SCREENSHOT STORE
https://theapplaunchpad.com/
https://appure.io

## MOCKUP IMAGES
http://magicmockups.com
https://mockuper.net
https://smartmockups.com


## ENCODING UTF8
https://blog.jetbrains.com/idea/2013/03/use-the-utf-8-luke-file-encodings-in-intellij-idea/


## CRYPTO
https://android-developers.googleblog.com/2016/06/security-crypto-provider-deprecated-in.html
Bouncy Castle : https://stackoverflow.com/questions/6788018/android-encryption-decryption-with-aes?rq=1
Https : https://stackoverflow.com/questions/40093004/how-do-you-encrypt-hide-the-body-of-an-https-call-using-retrofit-2-okhttp-3
Https : https://github.com/square/okhttp/wiki/HTTPS


## BUILD
buildType + productFlavor + minSDK


## IMAGE DRAWABLE FOLDER
https://robots.thoughtbot.com/android-imageview-scaletype-a-visual-guide
https://stackoverflow.com/questions/10517389/android-understanding-drawable-folder
https://stackoverflow.com/questions/28065267/mipmap-vs-drawable-folders

## DRAFT
https://medium.com/@sergii/best-practices-for-android-developer-productivity-cfd6ffba804c#.ll58votmq
http://android-developers.blogspot.fr/
https://github.com/googlesamples/android-architecture
https://overflow.buffer.com/2016/09/26/android-rethinking-package-structure/


## PLAY STORE SEELCTION
https://play.google.com/store/apps/topic?id=campaign_editorial_apps_kids_bestof2017
https://play.google.com/store/apps/topic?id=editors_choice&hl=fr



## PLUGIN

ADB IDEA 		> CTRL + ALT + SHIFT + A
KEY PROMOTER


## DEBUG
hugo @debuglog JakeWhaston
http://facebook.github.io/stetho/

## CLIENT REST
OKHTTP
RETROFIT 
FEIGN


https://github.com/OpenFeign/feign   ***** NETFLIX

## UI 
https://material.io/


## COMMON SDK
TextUtils
ContextCompat
ContextCompat.getColor(context, R.color.your_color);
ContextCompat.getDrawable(context, R.drawable.empty_photo2);

//Sur buton 
btnChangeDateIn.setBackgroundResource(R.drawable.shape_corner_orange);
btnChangeDateIn.setBackground(ContextCompat.getDrawable(this, R.drawable.shape_corner_orange));

// Sur imageview 
back1.setImageResource(R.drawable.icon_back);

relative.setBackgroundResource(0);
setBackgroundColor(Color.TRANSPARENT) 


## ADS MEDIATION
https://developers.google.com/admob/android/mediation
https://support.google.com/admob/answer/3063564?ctx=blog#sdk-less
https://admob.googleblog.com/2016/02/sdk-less-mediation.html
http://googleadsdeveloper.blogspot.fr/2016/03/adding-sdk-less-mediation-to-your.html


Analyze -> Inspect Code...
When your project has been inspected click on Code maturity issues and tada, there is a list of all Deprecated API usages :)


## STRING HELPER

&lt;br/&gt;
&lt;b&gt;AAAAAA&lt;/b&gt;
&lt;a href=\'https://www.google.fr\'&gt;TEXT_LINK&lt;/a&gt;


« text » 
“ text ”
’ ou \'



## SHORTCUT
Copy/paste 			> 	CTRL + SHIFT + V
Back				> 	CTRL + ALT + LEFT (<-)
Last Location		>	CTRL + SHIFT + BACKSPACE
Next Error			>	F2 / SHIFT + F2
File Structure		> 	F12 + SHIFT
Symbol				>	CTRL + ALT + HOME
Goto class name		> 	CTRL + N
Goto file name		> 	CTRL + SHIFT + N
Goto symbol name	> 	CTRL + ALT + SHIFT + N
Hide window			>	SHIFT + CTRL + F12

Multi cursor		> ALT + J
Find action 		> CTRL + SHIFT + A



## LIVE TEMPLATES
https://medium.com/google-developers/writing-more-code-by-writing-less-code-with-android-studio-live-templates-244f648d17c7
https://www.bignerdranch.com/blog/android-studio-live-templates/

usage : abrevation + tab

starter
newInstance
Tag (todo)

## FIX

for
nn
format

## AUTOCOMPLETE

Tab instead of enter

## SHOW INTENTION

ALT + enter


## GROOVY CONSOLE

allow to test small function
Find action : groovy console
System.out.println(func(test));


