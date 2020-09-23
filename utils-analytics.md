# Google Tag Manager

## Summary

- GA = google analytics
- FA = firebase analytics

- metric (GA + FA) = statistics
- dimension (GA) = user property (FA)

- dimensions vs metrics: https://www.searchenginepeople.com/blog/16081-analytics-metrics-dimensions.html
- dimensions & metrics examples: https://support.google.com/analytics/answer/1033861?hl=en


## Google Analytics

- https://www.optimizesmart.com/event-tracking-guide-google-analytics-simplified-version/#a3

event.push(
{
    eventCategory: 'favorite:tabnaame', <<<< standard
    eventSubcategory: 'fdsf' <<<< custom tab or subpage ???
    eventAction: 'clicked add-favorite', <<<< standard
    eventLabel: '#id' <<<< standard
    eventValue: '#id' <<<< standard
    more: [] <<<< custom complex js object
})

## Google Tag Manager



```
events type:
gtm.load
gtm.dom
optimize.activate
gtm.js
.* (enable regex)
REGEX for cookies
^(true|false|undefined)$
```

## Google Firebase

### Introduction
- Firebase is mandatory to publish an Android app on Google Play, this is why we have the google-services.json- Then you can track and report more information specific to usage of your application such as user info (preferences...), navigation events or click events.

### Event system
- In Firebase an Event is an important occurrence in your app that you want to measure. You can report up to 500 different types of Events per app and you can associate up to 25 unique parameters with each Event type. Some common events are suggested below, but you may also choose to specify custom Event types that are associated with your specific app. Each event type is identified by a unique name. Event names can be up to 40 characters long, may only contain alphanumeric characters and underscores ("_"), and must start with an alphabetic character. The "firebase_", "google_" and "ga_" prefixes are reserved and should not be used.
More info: https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Event

You can report up to 500 different types of Events per app and you can associate up to 25 unique parameters with each Event type.

### User property
A call to setUserProperty() will be persistent for all future sessions. Once set, all future logged events will be tagged with that user property. You do not need to call it each time your app starts.
You can report a maximum of 25 user properties
More info : https://support.google.com/firebase/answer/6317519

### Tagging plan
- First it's better to develop the event locally using the web platform without a physical device (analyticsLoggingEnabled=true & analyticsTrackingEnabled=false)- Secondly it's possible to switch in debug mode in order to check the behavior with a physical device (analyticsLoggingEnabled=false & analyticsTrackingEnabled=true)

### Debug
- Debug the events: https://support.google.com/firebase/answer/7201382
- Click debug view in Firebase console or Google Analytics

#### Debug Android
```
adb shell setprop debug.firebase.analytics.app com.app.package # enable debug
adb shell setprop debug.firebase.analytics.app .none. # disabled debug
```
#### Debug iOS
- In Xcode, select Product > Scheme > Edit scheme...
- Select Run from the left menu >Select the Arguments tab.
- In the Arguments Passed On Launch section, add:

```
-FIRDebugEnabled # enable debug
-FIRDebugDisabled # disable debug
```