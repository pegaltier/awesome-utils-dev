# VITE

## VITE

-   <https://gist.github.com/wojtekmaj/306385c07e2a69ac53e85caf8c78d3bb> webpack-to-vite.sh
-   <https://gist.github.com/prescottprue/e8f2a437e647285340dea50a495a811b> jest-to-vitest.sh

## VITEST

## LIBS

-   <https://github.com/tinylibs/tinyspy>
-   <https://github.com/vitest-dev/vscode>
-   <https://github.com/vitest-tests/browser-examples>

## FROM JEST

-   <https://github.com/Namchee/j2v>
-   <https://github.com/trivikr/vitest-codemod>
-   <https://github.com/scalvert/jest-to-vitest>
-   <https://github.com/kamaal111/jest-to-vitest-codemod>

## MOCKS

### GLOBAL

```javascript
// from: https://www.bitovi.com/blog/more-mocks-mocking-modules-in-vitest
import type * as NavigationModule from './navigation';
vi.mock('./navigation', async () => { // <- now async
  // Use the `importActual` method and await it.
  const actualModule = await vi.importActual<typeof NavigationModule>('./navigation');
  return {
    ...actualModule,
    calculateRoute: (from, to, starDateTimeSeconds, setLastError) => {
      const err = actualModule.errorIdToErrorData(mockErrorId);
      setLastError(err);
    },
  };
});
```

### HOISTED

```javascript
// https://github.com/vitest-dev/vitest/discussions/4124
const fsMock = vi.hoisted(() => ({
  existsSync: vi.fn().mockReturnValue(false),
}));
vi.mock('fs', async () => fsMock);
// first it() use false
fsMock.existsSync.mockReturnValue(false);
// second it() use true
fsMock.existsSync.mockReturnValue(true);
```
