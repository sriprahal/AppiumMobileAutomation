class DeleteNote {
    async pressBack() {
        await driver.back();
    }
    get clickContent() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }
    get clickMore() {
        return $('~More');
    }
    get clickDelete() {
        return $('//*[@text="Delete"]');
    }
    async acceptAlertbox() {
        await driver.acceptAlert();
    }
    get clickTrash() {
        return $('//*[@text="Trash Can"]');
    }
    get clickNavMenu() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }
    get deleteNotePermanently() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }

}
module.exports = new DeleteNote();