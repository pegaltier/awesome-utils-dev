
// 1. Iterating over multiple elements with Playwright
// source: https://eliasprescott.github.io/blog/iterating-over-elements-with-playwright/
async function forEachMatch<T>(locator: Locator, action: (currentLocator: Locator) => Promise<T>): Promise<T[]> {
    // Get the count of all the elements
    let locatorCount = await locator.count();

    // Prepare our list of return results
    let results: T[] = [];

    // Iterate through the elements
    for (let i = 0; i < locatorCount; i++) {
        
        // Get the current element using our index
        let currentLocator = locator.nth(i);

        // Run the user-given action for the current element
        let result = await action(currentLocator);

        // Store the result
        results.push(result);
    }

    return results;
}

test('Scraping Multiple Elements', async ({ page }) => {

    // Go to our example site
    await page.goto('https://www.wikipedia.org/');

    // Create a locator that resolves to multiple elements
    let languageLinkLocator = page.locator('.central-featured div a');

    // Pass in our Locator object along with a function for converting each iterated object into a value
    let languageInformation = await forEachMatch(languageLinkLocator, async languageLink => {
        
        // Inside this action function, we can focus solely on using the languageLink Locator object to scrape data or perform actions
        
        let href = await languageLink.getAttribute('href');

        let name = await languageLink.locator('strong').innerText();

        return [href, name];
    });

    console.log(languageInformation);
});