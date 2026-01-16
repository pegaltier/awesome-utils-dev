# TESTING

## TABLE OF CONTENTS

-   [LIST](#list)
-   [BROWSER](#browser)
-   [API](#api)
-   [COMPARATIVE](#comparative)
-   [GUIDE](#guide)
-   [TOOLS: ALL](#tools-all)
-   [TOOLS: AI](#tools-ai)
-   [TOOLS: WEB](#tools-web)
-   [TOOLS: MOBILE](#tools-mobile)
-   [TOOLS: CLOSED](#tools-closed)
-   [TOOLS: OSS: ALL](#tools-oss-all)
-   [TOOLS: OSS: JS](#tools-oss-js)
-   [UTILS: MOCK](#utils-mock)
-   [UTILS: ALL](#utils-all)
-   [UTILS: AI](#utils-ai)
-   [UTILS: HTTP](#utils-http)
-   [UTILS: CYPRESS](#utils-cypress)
-   [UTILS: PLAYWRIGHT LIST](#utils-playwright-list)
-   [UTILS: PLAYWRIGHT TOOLS](#utils-playwright-tools)
-   [UTILS: PLAYWRIGHT EXAMPLE / DEMO](#utils-playwright-example--demo)
-   [UTILS: PLAYWRIGHT LINKS](#utils-playwright-links)
-   [CYPRESS: LEARN](#cypress-learn)
-   [PLAYWRIGHT: NOTES](#playwright-notes)
-   [CYPRESS: NOTES](#cypress-notes)

## LIST

-   <https://github.com/mxschmitt/awesome-playwright>
-   <https://github.com/TheJambo/awesome-testing>
-   <https://github.com/omergulen/awesome-bdd>

## BROWSER

-   <https://github.com/kolodny/safetest>
-   <https://github.com/cypress-io/cypress>
-   <https://github.com/SeleniumHQ/selenium>
-   <https://github.com/microsoft/playwright>
-   <https://github.com/browserbase/stagehand>
-   <https://github.com/codeceptjs/CodeceptJS>
-   <https://github.com/webdriverio/webdriverio>
-   <https://github.com/sebastiancarlos/beachpatrol>
-   <https://github.com/testing-library/dom-testing-library>

## API

-   <https://github.com/wg/wrk>
-   <https://github.com/stepci/stepci>
-   <https://github.com/nakabonne/ali>
-   <https://github.com/dareid/chakram>
-   <https://github.com/anweber/httpyac>
-   <https://github.com/pactumjs/pactum>
-   <https://github.com/karatelabs/karate>
-   <https://github.com/mcollina/autocannon>
-   <https://github.com/Orange-OpenSource/hurl>
-   <https://github.com/schemathesis/schemathesis>

## COMPARATIVE

-   Selenium released in 2004 (opensource; requires java - WebDriver, complex installation because different dependencies version must match: java, selenium, webdriver, protractor; chrome, complex dom manipulation, flaky tests) ~28k stars on Github.

-   Cypress released in 2017 (partially opensource, simple installation, simple dom manipulation, stable tests, but dashboard is closed source, alternative called sorrycypress) ~45k stars on Github.

-   Playwright released in 2020 (opensource, simple installation, simple dom manipulation, stable tests, powerfull tooling) ~57k stars on Github.

-   Others solutions are: WebdriverIO, Puppeteer, Nightwatch, Protractor (NES)

-   The main arguments to use Cypress and Playwright is they are supported by Angular and Nx, that it manages tests directly with the browser; via Chrome DevTools Protocol (CDP) or directly run on it (Cypress) compared to Selenium that uses an intermeriary tool called WebDriver to communicate with the differents browser that makes tests flaky.

-   <https://www.rainerhahnekamp.com/en/angular-e2e-testing-protractor-is-dead-long-live-cypress/>

-   <https://www.lambdatest.com/blog/playwright-vs-selenium-vs-cypress/>

## GUIDE

-   <https://www.guru99.com/smoke-sanity-testing.html>
-   <https://github.com/NoriSte/ui-testing-best-practices>
-   <https://cypress.slides.com/amirrustam/patterns-practices>
-   <https://github.com/therodrigocosta/awesome-screenplay-pattern>
-   <https://netflixtechblog.com/introducing-safetest-a-novel-approach-to-front-end-testing-37f9f88c152d>

## TOOLS: ALL

-   <https://k6.io/>
-   <https://rungutan.com/>
-   <https://applitools.com/>

## TOOLS: AI

-   <https://www.meticulous.ai/>

## TOOLS: WEB

-   <https://screenster.io/>
-   <https://testrec.com/>
-   <https://www.browserstack.com/>
-   <https://angularplayground.it/>
-   <https://testing-playground.com/>
-   <https://crossbrowsertesting.com/>

## TOOLS: MOBILE

-   <https://github.com/mobile-dev-inc/maestro>

## TOOLS: CLOSED

-   <https://www.ranorex.com/>
-   <https://www.tricentis.com/products/automate-continuous-testing-tosca>

## TOOLS: OSS: ALL

-   <https://github.com/wg/wrk>
-   <https://github.com/hatoo/oha>
-   <https://github.com/carrier-io>
-   <https://github.com/grafana/k6>
-   <https://github.com/epam/carrier>
-   <https://github.com/apache/jmeter>
-   <https://github.com/tsenart/vegeta>
-   <https://github.com/buger/goreplay>
-   <https://github.com/kffl/speedbump>
-   <https://github.com/locustio/locust>
-   <https://github.com/puppeteer/puppeteer>
-   <https://github.com/codesenberg/bombardier>
-   <https://github.com/browserless/browserless>
-   <https://github.com/webhooksite/webhook.site>
-   <https://github.com/ihsw/toxiproxy-node-client>

## TOOLS: OSS: JS

-   <https://github.com/nut-tree/nut.js>
-   <https://github.com/lorenzofox3/zora>

## UTILS: MOCK

-   <https://github.com/mswjs/msw>
-   <https://github.com/microcks/microcks>

## UTILS: ALL

-   <https://github.com/mswjs/msw>
-   <https://github.com/appium/appium>
-   <https://github.com/rrweb-io/rrweb>
-   <https://github.com/Netflix/pollyjs>
-   <https://github.com/TradeMe/tractor>
-   <https://github.com/nas5w/combinate>
-   <https://github.com/guidepup/guidepup> a11
-   <https://github.com/ComponentDriven/csf>
-   <https://github.com/DevExpress/testcafe>
-   <https://github.com/jscutlery/test-utils>
-   <https://github.com/cucumber/screenplay.js>
-   <https://github.com/nightwatchjs/nightwatch>
-   <https://www.herodevs.com/support/endbridge>
-   <https://github.com/facebookincubator/memlab>

## UTILS: UNIT TESTS
-   <https://github.com/suites-dev/codemod>

## UTILS: AI

-   <https://github.com/anti-work/shortest>
-   <https://github.com/lightpanda-io/browser>
-   <https://github.com/browserbase/stagehand>
-   <https://github.com/web-infra-dev/midscene>
-   <https://github.com/magnitudedev/magnitude>
-   <https://github.com/nanobrowser/nanobrowser>
-   <https://github.com/executeautomation/mcp-playwright>

## UTILS: HTTP

-   <https://github.com/apiaryio/dredd>

## UTILS: CYPRESS

-   <https://github.com/bahmutov/cy-api>
-   <https://github.com/cypress-io/cypress>
-   <https://github.com/NetanelBasal/cyrun>
-   <https://github.com/agoldis/sorry-cypress>
-   <https://github.com/YOU54F/cypress-plugins>
-   <https://github.com/mfrachet/cypress-audit>
-   <https://github.com/tnicola/cypress-parallel>
-   <https://github.com/cypress-io/cypress-xpath>
-   <https://github.com/briebug/cypress-schematic>
-   <https://github.com/NoriSte/cypress-wait-until>
-   <https://github.com/smeijer/testing-playground>
-   <https://github.com/bahmutov/cypress-failed-log>
-   <https://github.com/Elecash/nx-cypress-coverage>
-   <https://github.com/socreate/angular-playground>
-   <https://github.com/component-driven/cypress-axe>
-   <https://github.com/ceceliacreates/ionic-cypress>
-   <https://github.com/cypress-io/cypress-skip-test>
-   <https://github.com/currents-dev/cypress-cloud>
-   <https://github.com/currents-dev/cypress-debugger>
-   <https://github.com/bahmutov/cypress-should-really>
-   <https://github.com/gkushang/cucumber-html-reporter>
-   <https://github.com/ksocha/cypress-circleci-reporter>
-   <https://github.com/cypress-io/cypress-realworld-app>
-   <https://github.com/meinaart/cypress-plugin-snapshots>
-   <https://github.com/cypress-io/cypress-example-recipes>
-   <https://github.com/maximilianschmitt/cypress-routines>
-   <https://github.com/bahmutov/cypress-angular-unit-test>
-   <https://github.com/testing-library/cypress-testing-library>
-   <https://github.com/LayZeeDK/angular-module-teardown-options>
-   <https://github.com/gothinkster/angular-realworld-example-app>
-   <https://github.com/TheBrainFamily/cypress-cucumber-preprocessor>
-   <https://github.com/Flaxline/angular-nx-cypress-coverage-example>
-   <https://github.com/CypressCecelia/cypress-testing-angular-workshop>
-   <https://github.com/cypress-visual-regression/cypress-visual-regression>

## UTILS: PLAYWRIGHT LIST

-   <https://github.com/mxschmitt/awesome-playwright>

## UTILS: PLAYWRIGHT TOOLS

-   <https://github.com/playwrightsolutions/playwright-practicesoftwaretesting.com>
-   <https://github.com/playwrightsolutions/playwright-json-summary-reporter>
-   <https://github.com/testla-project/testla-screenplay-playwright-js>
-   <https://github.com/playwright-community/eslint-plugin-playwright>
-   <https://github.com/playwright-community/playwright-jest-examples>
-   <https://github.com/playwright-community/playwright-ng-schematics>
-   <https://github.com/playwright-community/playwright-community>
-   <https://github.com/microsoft/playwright-testing-service>
-   <https://github.com/vitalets/playwright-webhook-reporter>
-   <https://github.com/vitalets/playwright-network-cache>
-   <https://github.com/vitalets/playwright-magic-steps>
-   <https://github.com/vitalets/playwright-fix-with-ai>
-   <https://github.com/vitalets/playwright-bdd>
-   <https://github.com/jfgreffier/incroyable-playwright>
-   <https://github.com/sebastiancarlos/beachpatrol>
-   <https://github.com/microsoft/playwright-test>
-   <https://github.com/valendres/playwright-msw>
-   <https://github.com/BuilderIO/gpt-crawler>
-   <https://github.com/mxschmitt/try-playwright>
-   <https://github.com/HamedFathi/screen.play.write>
-   <https://github.com/berstend/puppeteer-extra>
-   <https://github.com/testronaut/testronaut>
-   <https://github.com/mswjs/playwright>
-   <https://github.com/DyHex/POMWright>
-   <https://github.com/mxschmitt>

## UTILS: PLAYWRIGHT EXAMPLE / DEMO

-   <https://github.com/rishivajre/Playwright-End-to-End-E2E-Test-Automation-Framework>
-   <https://github.com/playwrightsolutions/playwright-api-test-demo>
-   <https://github.com/currents-dev/playwright-gh-actions-demo>
-   <https://github.com/jfgreffier/playwright-component-demos>
-   <https://github.com/jmorenoo23/qa-playwright-ia>

## UTILS: PLAYWRIGHT LINKS

-   <https://discord.com/servers/playwright-807756831384403968>
-   <https://playwright.dev/docs/release-notes>
-   <https://playwrightsolutions.com/>
-   <https://try.playwright.tech>
-   <https://dev.to/playwright>
-   <https://playwright.tech/>
-   <https://playwright.dev/>

## CYPRESS: LEARN

-   <https://github.com/stevekinney/cypress>
-   <https://cypress.slides.com/cecelia/testing-angular-applications-with-cypress#/1>
-   <https://webdave.de/blog/cypress>
-   <https://www.youtube.com/watch?v=V-o8WzlwKmM> Cypress Patterns and Practices
-   <https://www.youtube.com/watch?v=UHgtUSAROtc> Comparing Testing Tools
-   <https://www.youtube.com/watch?v=aH19jwv1l70> Cypress test in angular
-   <https://medium.com/@charith.rhettiarachchi/why-use-jest-over-karma-for-angular-testing-b56ffa82f8>
-   <https://itnext.io/cypress-storybook-keeping-test-scenario-data-and-component-rendering-in-one-place-c57b23cc1640>
-   <https://blog.checklyhq.com/easy-automated-e2e-testing-monitoring-for-your-frontend-with-vercel-and-checkly-3/>
-   <https://christianlydemann.com/the-most-common-cypress-mistakes/>
-   <https://www.checklyhq.com/docs/puppeteer-recorder/>
-   <https://timdeschryver.dev/blog/using-msw-in-an-angular-project>

## PLAYWRIGHT: NOTES

-   <https://stackoverflow.com/questions/77312463/playwright-library-throws-target-closed-error-only-if-context-or-browser-i>

-   <https://bugbug.io/blog/testing-frameworks/playwright-locators/>

-   forEach loop does not actually wait for completion of asynchronous operations inside it and context.close() is called faster. Indeed you can't use async/await with forEach. Instead, try changing it to for...of or a good old loop with i++.


    for (const row of rows) {
      const time = await row.locator('.time').innerText();
      const heading = await row.getByText('some common heading').innerText();

      console.log(`${time} ${heading}`);
    }

    const items = page.locator('ul > li'); 
    const count = await items.count(); 
    for (let i = 0; i < count; ++i) { 
        console.log(await items.nth(i).textContent()); 
    }

-   <https://stackoverflow.com/questions/69292101/how-can-i-get-playwright-to-listen-to-message-events>
-   wraps the page.on('console', ...) into an async function that we can use as a 'resolve if success, hang if failure'


    // Return true if the page emits 'Hello, World!' to the console info level
    async function waitForMessageAsync(): Promise<boolean> {
      return new Promise(function (resolve) {
        page.on('console', (msg) => {
          if (msg.type() === 'log' && msg.text() === 'Hello, World!') {
            resolve(true);
          }
        });
      });
    }

    await expect(await waitForMessageAsync).toBeTruthy();

## CYPRESS: NOTES

-   the difference between the then() and the within(). then() allows you to do imperative/js on the get element itself while the within() is in the elements inside the get
-   the difference between the within() and find():  within() allows you to do imperative/js and the find is classic chaining

note: you can also use then then() to trigger a function that use the cypress chaining, similar to a command but inside a function
