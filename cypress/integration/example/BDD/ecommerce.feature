Feature: Executing Cypress with BDD framework for ecommerce website

    This Feature file is to execute Cypress test with BDD framework for ecommerce website

    @RegressionTest
    Scenario: Checking the E2E flow
    Given Login to the application
    When Selecting product
    And validating the price
    Then Selecting the country and verifying the message

    @SmokeTest
    Scenario: Entering User Details
    Given Login to the application
    When Entering the user Details
            |names | gender|
            |Bobx  | Male |
    Then Validating the user Details