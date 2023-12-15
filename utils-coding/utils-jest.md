# Jest

# Books
- https://jesthandbook.com/

## Mocks
- if you need a dumb dependency injected by your file under test then use a partial pattern so you mock only myFunction if you need it. example: const mockedMyService: Partial<MyService> = { myFunction = jest.fn() }; so now you can create a spy on myFunction and then do assertion on it. example myFunctionSpy = jest.spyOn(mockedMyService, 'myFunction') and finally expect(myFunctionSpy).toHaveBeenCalledTimes(1).
- if you want to keep the original function implementation and be aware if the function is called then you can use jest.spyOn on a real function instead of jest.fn() function.
- with jest.fn() you can also replace the original function implementation using different ways: mockImplementation, mockReturnValue, mockReturnValueOnce, mock...


## Mocks

- Jest has an auto-mock function, it seems right to use this: jest.mock only with static class or with external dependencies compiled in ESM. Indeed the big dris method is more verbose, harder to maintain and slower compared to a simple partial empty objects.

```javascript
jest.mock('./static-helper');
jest.mock('swiper', () => ({ use: jest.fn() }));
```

- jest.mock('lib/module') with barrel import will mock the dependencies imported by the services inside your module. but you still need to define manually the mocked service using jest.MockedClass + functions prototype used with jest.fn()

```javascript
const MockedStaticHelper = StaticHelper as jest.MockedClass<typeof StaticHelper>;
MockedStaticHelper.displayThing = jest.fn().mockReturnValue(true);
```

You can also mock entire libraries by mapping in the jest preset to a file, see jest.preset.js:
- Mock files: https://gitlab.com/beeze_andy_schmidt/jest-esm-mock-test

## Expect

exemple how to check that an object contains a property with another object

```javascript
.toEqual(expect.objectContaining({ myProp: expect.any(Object)}))
```

## Articles

- https://github.com/facebook/jest/issues/936
- https://www.emgoto.com/mocking-with-jest/
- https://www.automasean.blog/js-testing-practices/
- https://codewithhugo.com/jest-mock-spy-module-import/
- https://generic-ui.com/blog/mocking-dependencies-in-angular
- https://indepth.dev/posts/1240/create-your-angular-unit-test-spies-automagically
- https://ordina-jworks.github.io/testing/2018/08/03/testing-angular-with-jest.html
- https://www.strv.com/blog/quickest-simplest-way-mocking-module-dependencies-jest-engineering

### Barrel

- https://github.com/nrwl/nx/pull/12764
- https://github.com/facebook/jest/issues/11234
- https://github.com/gilamran/fast-jest-with-esbuild
- https://github.com/dsmalik/ts-barrel-import-transformer
- https://stackoverflow.com/questions/63853066/lazy-load-imports-from-barrel-file-in-jest

- use esbuild to merge all the tests of the lib into a file
- use a jest transformer to convert to file import
- use a mock generation script to map to the correct file
- map case by case manually to the right file (only necessary)
- use a secondary entry points for jest (link index-jest in jest.preset)
- use NX_BATCH_MODE true to run test in batch