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

# Android / IntelliJ TIPS (FOR WINDOWS)

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

