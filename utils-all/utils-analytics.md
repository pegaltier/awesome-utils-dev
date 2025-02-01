# Google Tag Manager


## Tools OSS
- https://github.com/PostHog/posthog
- https://github.com/medama-io/medama
- https://github.com/matomo-org/matomo
- https://github.com/aptabase/aptabase
- https://github.com/plausible/analytics
- https://github.com/umami-software/umami
- https://github.com/ClickHouse/ClickHouse
- https://github.com/benvinegar/counterscale

## Tools

- https://tagassistant.google.com/
- https://www.simpleanalytics.com/
- https://chrome.google.com/webstore/detail/dataslayer/ikbablmmjldhamhcldjjigniffkkjgpo
- https://chrome.google.com/webstore/detail/tag-assistant-companion/jmekfmbnaedfebfnmakmokmlfpblbfdm/related

## Summary

- GA = google analytics
- FA = firebase analytics

- metric (GA + FA) = statistics
- dimension (GA) = user property (FA)

- dimensions vs metrics: https://www.searchenginepeople.com/blog/16081-analytics-metrics-dimensions.html
- dimensions & metrics examples: https://support.google.com/analytics/answer/1033861?hl=en

## Helpers

```
console.log(dataLayer.slice(-1).pop())
```

## Google Analytics

- https://www.optimizesmart.com/event-tracking-guide-google-analytics-simplified-version/#a3

```
event.push(
{
    eventCategory: 'favorite:tabnaame', <<<< standard
    eventSubcategory: 'fdsf' <<<< custom tab or subpage ???
    eventAction: 'clicked add-favorite', <<<< standard
    eventLabel: '#id' <<<< standard
    eventValue: '#id' <<<< standard
    more: [] <<<< custom complex js object
})
```

## Google Tag Manager

Google Tag Manager is used to track the user interactions and thanks to that the project can use the data collected to improve the user experience. That means when you create a new screen or update an existing screen you have to take care to tag the possible interactions of the user. Basically the routing events should be tracked automatically and you must add the custom directive called gtmEvent each time you use a click event.

Now you must configure your directive in order to correctly tag the event:

- eventCategory is a fixed value depending on the screen, it must corresponds to one of the screens mentioned in the tag manager spreadsheet file
- eventSubcategory is a fixed value depending on the sub-screen, for example when we have a screen with tabs or sections or child screens. If no tab / section / subscreen and main screen then use: main
- eventAction is a value which corresponds to the action of the event, what does the link/button do. It must contains a variable and 'clicked', ex: 'send question clicked'. If the action aims to redirect to another internal screen then the value must be the name of the destination screen used in eventCategory, ex: 'invoices clicked'. This naming allows you to create conversion funnels.
- eventLabel allows you to pass additional information on the origin of the action, for example if you are in the menu: statistics menu, if you are in a list, the item id. The origin of the action can also be passed here. Performance teams use it to target conversion tunnel exit points in combination with 'eventAction.

### CODE HELPER

#### ANGULAR DIRECTIVE

```
[gtmEvent]="{
    eventCategory: 'profile',
    eventSubcategory: 'main',
    eventAction: 'tab clicked',
    eventLabel: tab?.label?.toLowerCase()
}"
```

#### GTM EVENTS

```
gtm.load
gtm.dom
optimize.activate
gtm.js
```

#### GTM WITH REGEX

```
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

## Google Optimize

- At bootstrap website appends « Optimize » script to the page
- « Optimize » load all the running experiments that matches 
- « Optimize » determines the variant of these experiments
- « Optimize » stores in a cookie experiments+variants
- « Optimize » sends the impression event to « Analytics » 
