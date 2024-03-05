Feature: Test valid and invalid input for contacts

  Scenario Outline: Create valid customer feedback
    Given I visit "contact" page
    When I give the juice shop <Rating> stars with comment "<Comment>"
    And I complete the captcha
    And I submit the feedback
    Then I should receive "<Expected Message>"
    Examples:
      | Comment       | Rating | Expected Message                                    |
      | VERY Bad      | 1      | Thank you for your feedback                         |
      | semi-Bad      | 2      | Thank you for your feedback                         |
      | quite alright | 3      | Thank you for your feedback                         |
      | good enough   | 4      | Thank you for your feedback                         |
      | best          | 5      | Thank you so much for your amazing 5-star feedback! |

  Scenario: Fill nothing and expect submit to be disabled
    Given I visit "contact" page
    When I don't fill anything
    Then The feedback button should be disabled