# Google Tag Manager

## Events

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

## Various

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