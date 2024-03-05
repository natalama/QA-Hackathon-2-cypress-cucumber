Feature: Smoke Test for the juice shop


  Scenario: Visiting home page and see that it loads
    When I visit "home" page
    Then I should see an icon

  @only
  Scenario Outline: Visiting different pages of OWASP Juice shop
    When I visit "<Page name>" page
    Then It should load
    Examples:
      | Page name   |
      | home        |
      | contact     |
      | about       |
      | photo wall  |
      | score board |