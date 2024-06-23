# TRADINGVIEW CHEATSHEET

## libraries
- https://youtu.be/r8j6Fp2CkzY 5 Useful Libraries for TradingView

## Important notes

- Even with indicator in a different panel than the price chart it's now possible to plot some data in the price chart using the force_overlay feature
- When using strategy.entry(...) hedging and scaling is desactivated so when you enter a long position then short will automatically be closed and vice versa. Also you have only one position on the same order ID because scaling is desactivated even if the entry condition is met multiple times only one position is opened
- If you want to have the same strategy long and short positons opened at the same time you need to use strategy.order(...) but takes care here to manage the pyramiding because if the entry condition is met multiple times position will be increased

- https://www.tradingcode.net/tradingview/strategy-entry-function/
- https://www.tradingcode.net/tradingview/strategy-order-function/
- https://www.tradingcode.net/tradingview/pyramiding-strategy-orders/
- https://stackoverflow.com/questions/73715428/pine-script-short-position-automatically-closed-when-next-long-position-trigger
- https://stackoverflow.com/questions/69677670/pine-script-strategy-with-long-and-short-trades-at-the-same-time
- https://stackoverflow.com/questions/69478094/what-is-the-difference-between-strategy-order-and-strategy-entry

## Generic onliner

```javascript
getPos() => strategy.position_size
isIn() => strategy.position_size != 0
isFlat() => strategy.position_size == 0
isLong() => strategy.position_size > 0
isShort() => strategy.position_size < 0
isNotLong() => strategy.position_size <= 0
isNotShort() => strategy.position_size >= 0
```

## Generic multiline

```javascript
formatBigNumber(num) =>
    var string formattedNum=na
    if num >= 1000000000
        formattedNum := str.tostring(math.round(num/1000000000, 2)) + "B"
    else if num >= 1000000
        formattedNum := str.tostring(math.round(num/1000000, 2)) + "M"
    else if num >= 1000
        formattedNum := str.tostring(math.round(num/1000, 2)) + "K"
    else
        formattedNum := str.tostring(num)
    formattedNum

calcPosSize(riskPerc, usePosSize) =>
    riskEquity  = (riskPerc / 100) * strategy.equity
    atrCurrency = (ta.atr(20) * syminfo.pointvalue)
    posSizeInit = usePosSize ? math.floor(riskEquity / atrCurrency) : 1
    posSize = posSizeInit > 1000000000 ? 1000000000 : posSizeInit < 0 ? 1 : posSizeInit
    posSize
```


## Exit after x bars in trade

```javascript
exitLongAfterBars = input.int(title="Exit Long After N bars", defval=15, minval=1) 
exitShortAfterBars = input.int(title="Exit Short After N bars", defval=15, minval=1)

condLong = false // add here your logic
condShort = false // add here your logic
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


## Multi time frame calculation

```javascript
// Define custom security function
f_sec(_market, _res, _exp) => request.security(_market, _res, _exp[barstate.isrealtime ? 1 : 0])[barstate.isrealtime ? 0 : 1]

// Get EMA values
ema = ta.ema(close, len)
emaValue1 = f_sec(market, res1, ema)
emaValue2= f_sec(market, res2, ema)
emaValue3 = f_sec(market, res3, ema)
```

## Multi time frame DAILY OHLC

[do,dh,dl] = request.security(syminfo.tickerid, 'D', [open, high, low], lookahead=barmerge.lookahead_on)
plot(dh, title="High", color=color.red,    linewidth=2, trackprice=true)
plot(do, title="Open", color=color.yellow, linewidth=2, trackprice=true)
plot(dl, title="Low",  color=color.green,  linewidth=2, trackprice=true)


## Multi Moving average function

```javascript
maType = input.string('WMA', options = ['EMA','HMA','WMA','SMA','RMA'])

ma(type, source, length) =>
    switch type
        'SMA'   =>    ta.sma(source, length)
        'EMA'   =>    ta.ema(source, length)
        'WMA'   =>    ta.wma(source, length)
        'HMA'   =>    ta.hma(source, length)
        'RMA'   =>    ta.rma(source, length)
```
