const { Given, Then } = require("@wdio/cucumber-framework");
const deleteNotePage = require("../pageObject/deleteNotePage");
const verify = require("../pageObject/verify");

Given('I come back', async() => {
    await deleteNotePage.pressBack();
})
Then('I click on the content', async() => {
    await deleteNotePage.clickContent.click();
})
Then('I click on more icon', async() => {
    await deleteNotePage.clickMore.click();
})
Then('I click on delete button', async() => {
    await deleteNotePage.clickDelete.click();
})
Then('I accept the alert box', async() => {
    await deleteNotePage.acceptAlertbox();
})
Then('I click on nav menu', async() => {
    await deleteNotePage.clickNavMenu.click();
})
Then('I press trash can', async() => {
    await deleteNotePage.clickTrash.click();
})
Then('I delete the note permanently', async() => {
    await deleteNotePage.deleteNotePermanently.click();
})
Then('I accept the alert', async() => {
    await deleteNotePage.acceptAlertbox();
})
