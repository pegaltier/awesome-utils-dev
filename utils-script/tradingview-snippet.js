// utility functions to help optimize a tradingview strategy by automatically running the strategy with 
// different input parameter directly in the browser using chrome snippet feature (CTRL + SHIFT + P + run snippet)
var results = [];
var paramPositionToTest = 1;
function arrayMax(arr) {
  return arr.reduce(function (p, v) {
    return p.result > v.result ? p : v;
  }, []);
}
function getPercentage(rawPercentage, isNegative) {
    return parseFloat(rawPercentage.replace('&nbsp;%', ''));
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkDialogOpened() {
    const container = document.querySelector(
        '[data-name="indicator-properties-dialog"]'
      );
      if (!container) {
        throw new Error("open the backtest config box first");
      }
}
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function step(paramPosition) {
  // Shift + F6  to focus on the website
  await sleep(getRandomInt(100, 300));
  checkDialogOpened();
  const container = document.querySelector(
    '[data-name="indicator-properties-dialog"]'
  );
  const matches = container.querySelectorAll('[inputmode="numeric"]');
  const inputToTest = matches[paramPosition];
  inputToTest.dispatchEvent(new Event('mouseover', { bubbles: !0 }));
  inputToTest.click();
  await sleep(getRandomInt(100, 300));
  inputToTest.dispatchEvent(
    new KeyboardEvent('keydown', {
      altKey: !1,
      bubbles: !0,
      cancelBubble: !1,
      cancelable: !0,
      charCode: 'ArrowUp',
      code: 'ArrowUp',
      composed: !0,
      ctrlKey: !1,
      currentTarget: null,
      defaultPrevented: !0,
      detail: 0,
      eventPhase: 0,
      isComposing: !1,
      isTrusted: !1,
      key: 'ArrowUp',
      keyCode: 38,
      location: 0,
      metaKey: !1,
      repeat: !1,
      returnValue: !1,
      shiftKey: !1,
      sourceCapabilities: new InputDeviceCapabilities({
        firesTouchEvents: !1,
      }),
      timeStamp: performance.now(),
      type: 'keydown',
      view: window,
      which: 38,
    })
  );
  await sleep(getRandomInt(2000, 4000));
  const resultInPercent = document.querySelector('.additional_percent_value');
  if (resultInPercent.children.length === 0) {
    const result = getPercentage(resultInPercent.innerHTML);
    const value = inputToTest.value;
    results.push({ value, result });
    console.log('result:', value, ' => ', result);
  } else {
    const rawNegativeNumber = resultInPercent.lastChild.innerHTML.replace('−', '-');
    const result = getPercentage(rawNegativeNumber);
    const value = inputToTest.value;
    results.push({ value, result });
    console.log('result:', value, ' => ', result);
  }
}
// start
checkDialogOpened();
console.log('start param position', paramPositionToTest);
for (let i = 0; i < 120; i++) {
  await step(paramPositionToTest);
}
console.log('final:', results);
console.log('max:', arrayMax(results));
