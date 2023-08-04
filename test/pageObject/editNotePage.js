class EditNote{
    get clickCreatedNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"');
    }
    get clickEditButton(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }
    get addOtherTwoBrands(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }
}
module.exports = new EditNote();