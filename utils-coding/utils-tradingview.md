# TRADINGVIEW CHEATSHEET

## Exit after x bars in trade

```javascript
exitLongAfterBars = input.int(title="Exit Long After N bars", defval=15, minval=1) 
exitShortAfterBars = input.int(title="Exit Short After N bars", defval=15, minval=1)

condEnterLong = isNotLong() and condLong
condEnterShort = isNotShort() and condShort
condExitLong = isLong() and ta.barssince(condEnterLong) >= exitLongAfterBars -1 
condExitShort = isShort() and ta.barssince(condEnterShort) >= exitShortAfterBars -1
```


## Exit after x percent gains in trade

```javascript
exitLongAfterPercents = input.float(title="Close Long After X Percents", defval=3, minval=1)
exitShortAfterPercents = input.float(title="Close Short After X Percents", defval=3, minval=1)

lastEntryPrice = strategy.opentrades.entry_price(strategy.opentrades - 1)
currentPosPercent = isLong() ? ((close - lastEntryPrice) / lastEntryPrice) * 100 : isShort() ? ((lastEntryPrice - close) / close) * 100 : 0
condExitLong = isLong() and currentPosPercent >= exitLongAfterPercents
condExitShort = isShort() and currentPosPercent >= exitShortAfterPercents

// exemple to get the DCA price: https://www.tradingcode.net/tradingview/open-trade-entry-price/
// exemple to get the entry ID (L1 / S1) can be used to get the info of a specific trade
// https://www.tradingcode.net/tradingview/open-order-identifier/
```

