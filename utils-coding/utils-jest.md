# Jest

## Notes

- jest.mock('lib/module') with barrel import will mock the dependencies imported by the services inside your module. but you still need to define the mocked service using jest.MockedClass + functions prototype used with jest.fn()

