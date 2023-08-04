const { Given, Then } = require("@wdio/cucumber-framework");
const addNotePage = require("../pageObject/addNotePage");
const verify = require("../pageObject/verify");

Given('I press the skip button', async() => {
    await addNotePage.skipBtn.click();
})
Then('I verify whether add note is displayed', async() => {
    await verify.addNoteVerify.toBeDisplayed();
})
Then('I click on the add note button', async() => {
  await addNotePage.addNote.click();
})
Then('I click on the text option', async() => {
    await addNotePage.textOption.click();
})
Then('I verify whether I am in editing screen', async() => {
    await verify.editScreenVerify.toBeDisplayed();
})
Then('I add titile to the note', async() => {
    await addNotePage.addTitle.addValue('Laptop Brands');
    await driver.pause(3000);
})
Then('I add the body', async() => {
    await addNotePage.addBody.addValue("Asus \n Dell \n Acer \n Hp");
})
Then('I save the changes by pressing back button', async() => {
    await addNotePage.saveChanges();
})
Then('I verify whether the edit button is displayed', async() => {
    await verify.editButtonVerify.toBeDisplayed();
})
Then('I verify the content is same or not', async() => {
    await verify.contentVerify.toHaveText("Asus \n Dell \n Acer \n Hp");
})