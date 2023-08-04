Feature: Mobile app Demo
    Scenario: Creating a note
        Given I press the skip button
        Then I verify whether add note is displayed
        Then I click on the add note button
        Then I click on the text option
        Then I verify whether I am in editing screen
        Then I add titile to the note
        Then I add the body
        Then I save the changes by pressing back button
        Then I verify whether the edit button is displayed
        Then I verify the content is same or not

    Scenario: Editing the note
        Given I click the edit button
        Then I add other two laptop brands
        Then I press back twice to save

     Scenario: Deleting a note
        Given I come back
        Then I click on the content
        Then I click on more icon
        Then I click on delete button
        Then I accept the alert box
        Then I click on nav menu
        Then I press trash can
        Then I delete the note permanently
        Then I accept the alert
        