const { Then, Given } = require("@wdio/cucumber-framework");
const addNotePage = require("../pageObject/addNotePage");
const editNotePage = require("../pageObject/editNotePage");



Given('I click the edit button', async()=> {
    await editNotePage.clickEditButton.click();
})
Then('I add other two laptop brands', async() => {
    await addNotePage.addBody.addValue("\n Lenovo \n Toshiba");
})
Then('I press back twice to save', async() => {
    await addNotePage.saveChanges();
})