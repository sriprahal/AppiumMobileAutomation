class Verify{
    get addNoteVerify(){
        return expect($('//*[@text="Add note"]'));
    }
    get editScreenVerify(){
        return expect($('//*[@text="Editing"]'));
    }
    get editButtonVerify(){
        return expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'));
    }
    get contentVerify(){
        return expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'));
    }
    get deleteContentVerify(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }
    get verifyPermanentDelete(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/note_list"]');
    }
}
module.exports = new Verify;