class AddNote{
    get skipBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }
    get addNote(){
        return $('//*[@text="Add note"]');
    }
    get textOption(){
        return $('//*[@text="Text"]');
    }
    get addTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }
    get addBody(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }
    async saveChanges(){
        await driver.back();
        await driver.back();
    }
}
module.exports = new AddNote();