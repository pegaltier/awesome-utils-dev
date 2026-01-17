# ANGULARJS

## FILTER

-   <https://www.w3schools.com/angularjs/ng_filter_filter.asp>
-   <https://ultimatecourses.com/blog/everything-about-custom-filters-in-angular-js>
-   <https://sachilaranawaka.medium.com/angularjs-1-x-understanding-filters-b4a92873a54d>
-   <https://stackoverflow.com/questions/17238661/angularjs-custom-filter-for-text-number/17238971>

```javascript
// usage ex: | numLower:'pScore':'0.1'
app.filter('numLower', function () {
    return function (items, key, num) {
        return items.filter(item => item[key] <= num);
    }
});
// usage ex: | pValueFilter:true:'0.1'
app.filter('pValueFilter', function () {
    return function (items, isTested, thresholdLevel) {
        const res = isTested === true && thresholdLevel ?
            items?.filter(item => item.pCount > 0 && item.pScore <= thresholdLevel) :
            // isTested && !thresholdLevel ? items?.filter(item => item.pCount > 0) :
            isTested === false ? items?.filter(item => item.pCount === 0) : items;
        // console.log('🚀 ~ pValueFilter:', { isTested, thresholdLevel, arrIn: items?.length, arrOut: res?.length});
        return res ?? [];
    }
});
```
