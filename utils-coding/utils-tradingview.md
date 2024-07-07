# TRADINGVIEW CHEATSHEET

## People
- https://github.com/alexgrover

## libraries
- https://youtu.be/r8j6Fp2CkzY 5 Useful Libraries for TradingView
- Zen Library: https://www.tradingview.com/script/yUWPxUBt-ZenLibrary
- Strategy Library: https://www.tradingview.com/script/mCOgJC67-Strategy
- TA Library: https://www.tradingview.com/script/BICzyhq0-ta
- Visible Chart Library: https://www.tradingview.com/script/j7vCseM2-VisibleChart
- Time Library: https://www.tradingview.com/script/tyeeNU9I-Time

## Tools
- https://github.com/TreborNamor/TradingView-Machine-Learning-GUI


## samples
- https://courses.theartoftrading.com/pages/pine-script-mastery-code

## Important notes

- Even with indicator in a different panel than the price chart it's now possible to plot some data in the price chart using the force_overlay feature
- When using strategy.entry(...) hedging and scaling is desactivated so when you enter a long position then short will automatically be closed and vice versa. Also you have only one position on the same order ID because scaling is desactivated even if the entry condition is met multiple times only one position is opened
- If you want to have the same strategy long and short positons opened at the same time you need to use strategy.order(...) but takes care here to manage the pyramiding because if the entry condition is met multiple times position will be increased

## notes links
- https://www.tradingcode.net/tradingview/strategy-entry-function/
- https://www.tradingcode.net/tradingview/strategy-order-function/
- https://www.tradingcode.net/tradingview/pyramiding-strategy-orders/
- https://stackoverflow.com/questions/73715428/pine-script-short-position-automatically-closed-when-next-long-position-trigger
- https://stackoverflow.com/questions/69677670/pine-script-strategy-with-long-and-short-trades-at-the-same-time
- https://stackoverflow.com/questions/69478094/what-is-the-difference-between-strategy-order-and-strategy-entry
