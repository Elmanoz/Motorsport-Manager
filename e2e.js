const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    console.log("Loading game...");
    await page.goto('http://localhost:8000/index.html');

    console.log("Starting New Game...");
    await page.click('#btn-new-game');

    console.log("Waiting for team selection to load...");
    await page.waitForSelector('#team-list div');

    console.log("Selecting first team...");
    await page.click('#team-list div');

    console.log("Checking dashboard...");
    await page.waitForSelector('#dash-team-name', { timeout: 2000 });
    const teamName = await page.innerText('#dash-team-name');
    console.log(`Team Selected: ${teamName}`);

    console.log("Checking Upgrades Menu...");
    await page.click('#btn-goto-upgrades');
    await page.waitForSelector('#upgrades-list div', { timeout: 2000 });
    await page.click('#btn-back-dashboard');

    console.log("Starting Race Weekend...");
    await page.click('#btn-goto-weekend');

    console.log("In Practice Session...");
    await page.waitForSelector('#btn-test-setup', { timeout: 2000 });
    await page.click('#btn-test-setup'); // test setup
    await page.click('#btn-goto-qualifying');

    console.log("In Qualifying Session...");
    await page.waitForSelector('#qualifying-grid div', { timeout: 5000 });
    await page.click('#btn-goto-prerace');

    console.log("In Pre-Race...");
    await page.waitForSelector('#btn-start-race', { timeout: 2000 });
    await page.click('#btn-start-race');

    console.log("In Race Session...");
    await page.waitForSelector('#race-leaderboard div', { timeout: 5000 });

    console.log("Changing race speed to 5x...");
    await page.click('#btn-speed-5x');

    console.log("Waiting for race to finish (this might take a few seconds)...");
    await page.waitForSelector('#race-post-race', { state: 'visible', timeout: 30000 });

    console.log("Race finished! Proceeding to next round...");
    await page.click('#btn-end-weekend');

    console.log("Back at dashboard...");
    await page.waitForSelector('#dash-team-name', { timeout: 2000 });

    console.log("Saving Game...");

    // intercept the alert from saveGame()
    page.on('dialog', async dialog => {
      console.log(`Alert appeared: ${dialog.message()}`);
      await dialog.accept();
    });

    await page.click('#btn-save-game');

    console.log("All E2E checks passed successfully.");
  } catch (error) {
    console.error("Test failed:", error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
