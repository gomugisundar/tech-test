Feature: Login
    Creating login in Tray.io feature and create a new workflow
    and go back to Dashboard and Delete the previously created workflow
    and logout of Tray.io

    Scenario: Tray.io customer Create the workflow and delete
        Given Customer on tray.io website
        When Customer click login button
        Then Customer should presented with login page
        When  Customer enters their email "gomuginanda@outlook.com"
        And  Customer enters their password "kamman123"
        And Customer clicks on login after entering login details
        Then Customer should presented with Dashboard page
        When Customer Clicks the Create Workflow
        And Customer get Create workflow pop up box
        And Customer enters the name "Gomugi"
        And Customer click create button
        Then Customer should presented with add a trigger page
        When Customer  click alert in connectors from core list
        Then Customer should presented with build page 
        When Click close
        Then Customer should presented with Dashboard page
        When Customer select Gomugi hamburger menu 
        And Customer click delete button   
        Then Customer get pop up box delete work flow 
        When Click yes
        And Customer click profile head 
        And Click logout
        And Automatically navigate to login page
