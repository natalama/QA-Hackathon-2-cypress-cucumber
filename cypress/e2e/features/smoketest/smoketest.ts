import {Then} from "@badeball/cypress-cucumber-preprocessor";


Then('I should see {string} icon', (iconName: string) => {
    cy.findByRole('image').should('exist')
})

Then('It should load', () => {
    cy.contains('OWASP Juice Shop').should('exist')
})

