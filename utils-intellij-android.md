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

## COMMON Error
http://www.developerphil.com/dont-store-data-in-the-application-object/
https://stackoverflow.com/questions/4208886/using-the-android-application-class-to-persist-data

## UTILS
http://gunhansancar.com/tools/converter/#
https://android.fallible.co/#
http://stackoverflow.com/questions/24882550/how-to-format-text-in-string-displayed-in-textview
https://www.img-bak.in >> generate icons
https://romannurik.github.io/AndroidAssetStudio/index.html
https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html > Round icons generate

## ENCODING UTF8
https://blog.jetbrains.com/idea/2013/03/use-the-utf-8-luke-file-encodings-in-intellij-idea/

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

## PLUGIN

ADB IDEA 		> CTRL + ALT + SHIFT + A
KEY PROMOTER

## SDK
TextUtils
ContextCompat

## LIB

hugo @debuglog JakeWhaston

## BUILD

buildType + productFlavor + minSDK


## DRAFT


https://medium.com/@sergii/best-practices-for-android-developer-productivity-cfd6ffba804c#.ll58votmq
http://android-developers.blogspot.fr/
https://github.com/googlesamples/android-architecture
https://overflow.buffer.com/2016/09/26/android-rethinking-package-structure/
http://facebook.github.io/stetho/

ContextCompat.getColor(context, R.color.your_color);
ContextCompat.getDrawable(context, R.drawable.empty_photo2);

//Sur buton 
btnChangeDateIn.setBackgroundResource(R.drawable.shape_corner_orange);
btnChangeDateIn.setBackground(ContextCompat.getDrawable(this, R.drawable.shape_corner_orange));

// Sur imageview 
back1.setImageResource(R.drawable.icon_back);

relative.setBackgroundResource(0);
setBackgroundColor(Color.TRANSPARENT) 

/


CLIENT REST :
OKHTTP
FEIGN : https://github.com/OpenFeign/feign   ***** NETFLIX
RETROFIT 


UI : 
https://material.io/



Analyze -> Inspect Code...

When your project has been inspected click on Code maturity issues and tada, there is a list of all Deprecated API usages :)




## STRING HELPER

&lt;br/&gt;
&lt;b&gt;AAAAAA&lt;/b&gt;
&lt;a href=\'https://www.google.fr\'&gt;TEXT_LINK&lt;/a&gt;


« text » 
“ text ”
’ ou \'