Feature: Login

    Scenario Outline: Log in user email and password
        Given I am on home page
        When I click on the Sign In link
        Then I enter a <email> e-mail
        And I enter a <password> password
        And I click the Sign In button
        Then I see the welcome message <message>
        And My Account page contains email <email>

    Examples: 
        | email                   | password      | message                           |
        | "testdlemail@gmail.com" | "Q_w_e_r_t_y" | "Welcome, testName testLastName!" |
