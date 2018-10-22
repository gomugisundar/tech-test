const { client, expect, assert } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');
const sleep = require('thread-sleep');
const timeDuration = 15000;
const sleepTime = 500;

//1. Login to Tray.io

Given('Customer on tray.io website', function () {
  const login = client.page.login();
  return login.navigate().waitForElementVisible('@wholePageBody', timeDuration);
});

When('Customer click login button', async function () {
  const login = client.page.login();
  await sleep( sleepTime);
  return login.waitForElementVisible("@login", timeDuration)
    .clicklogin();
});

Then('Customer should presented with login page', async function () {
  const login = client.page.login();
  await sleep(sleepTime);
  return login.waitForElementVisible("@loginpage", timeDuration)
});


When('Customer enters their email {string}', async function (email) {
  const login = client.page.login();
  await sleep(sleepTime);
  return login.waitForElementVisible("@emailAddress", timeDuration)
    .setValue('@emailAddress', email)
});

When('Customer enters their password {string}', async function (password) {
  const login = client.page.login();
  await sleep(sleepTime);
  return login.waitForElementVisible("@password", timeDuration)
    .setValue('@password', password);
});

When('Customer clicks on login after entering login details', async function () {
  const login = client.page.login();
  await sleep(sleepTime);
  return login.waitForElementVisible("@loginButton", timeDuration)
    .clickloginButton();
});

// Dashboard page
Then('Customer should presented with Dashboard page', async function () {
  const backtodashboard = client.page.backtodashboard();
  await sleep(sleepTime);
  return backtodashboard.waitForElementVisible("@dashboardpage", timeDuration)
});

//2. Create a new Workflow

When('Customer Clicks the Create Workflow', async function () {
  const createworkflow = client.page.createworkflow();
  await sleep(sleepTime);
  return createworkflow.waitForElementVisible("@CreateNewWorkFlow", timeDuration)
    .clickCreateNewWorkFlowButton();
});

When('Customer get Create workflow pop up box', async function () {
  const createworkflow = client.page.createworkflow();
  await sleep(sleepTime);
  return createworkflow.waitForElementVisible("@CreateNewWorkFlowpopupbox", timeDuration);
});

When('Customer enters the name {string}', async function (name) {
  const createworkflow = client.page.createworkflow();
  await sleep(sleepTime);
  return createworkflow.waitForElementVisible("@workflowname", timeDuration)
    .setValue('@workflowname', name)
    .clickCreateButton();
});

When('Customer click create button', async function () {
  const createworkflow = client.page.createworkflow();
  await sleep(sleepTime);
  return createworkflow.waitForElementVisible("@createButton", timeDuration)
    .clickCreateButton();
});

//3. Go back to Dashboard

Then('Customer should presented with add a trigger page', async function () {
  const backtodashboard = client.page.backtodashboard();
  await sleep(sleepTime);
  return backtodashboard.waitForElementVisible("@triggerpage",timeDuration);
});

When('Customer  click alert in connectors from core list', async function () {
  const backtodashboard = client.page.backtodashboard();
  await sleep(sleepTime);
  return backtodashboard.waitForElementVisible("@alertbox", timeDuration)
    .clickAlertboxButton();
});

Then('Customer should presented with build page', async function () {
  const backtodashboard = client.page.backtodashboard();
  await sleep(sleepTime);
  return backtodashboard.waitForElementVisible("@buildpage", timeDuration);
});

When('Click close', async function () {
  const backtodashboard = client.page.backtodashboard();
  await sleep(sleepTime);
  return backtodashboard.waitForElementVisible("@close", timeDuration)
    .clickcloseButton();
});

//4. Delete the previously created Workflow

When('Customer select Gomugi hamburger menu',async function () {
  const deleteworkflow = client.page.deleteworkflow();
  await sleep(sleepTime);
  return deleteworkflow.waitForElementVisible("@hamburgermenu", timeDuration)
  .click('@hamburgermenu');
});

When('Customer click delete button', async function () {
  const deleteworkflow = client.page.deleteworkflow();
  await sleep(sleepTime); 
  return deleteworkflow.waitForElementVisible("@deleteButton", timeDuration)
  .click('@deleteButton');
});


Then('Customer get pop up box delete work flow', async function () {
  const deleteworkflow = client.page.deleteworkflow();
  await sleep(sleepTime);
  return deleteworkflow.waitForElementVisible("@removeworkflow", timeDuration);
});

When('Click yes', async function () {
  const deleteworkflow = client.page.deleteworkflow();
  await sleep(sleepTime);
  return deleteworkflow.waitForElementVisible("@yesbutton", timeDuration)
    .click('@yesbutton');
});

//Log out of Tray.io

When('Customer click profile head',async function () {
  const logout = client.page.logout();
  await sleep(sleepTime);
  return logout.waitForElementVisible("@profilehead", timeDuration)
    .click('@profilehead');
});

When('Click logout', async function () {
  const logout = client.page.logout();
  await sleep(sleepTime);
  return logout.waitForElementVisible("@logoutbutton",timeDuration)
    .click('@logoutbutton');
});

Then ('Automatically navigate to login page', async function () {
  const login = client.page.login();
  await sleep(sleepTime);
  return login.waitForElementVisible("@loginpage",timeDuration)
    .click('@loginpage');
});