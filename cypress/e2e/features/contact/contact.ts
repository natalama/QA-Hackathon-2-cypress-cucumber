import {DataTable, Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {contactPage} from "../../pages/Contact";


When("I give the juice shop {int} stars with comment {string}", (rating: number, comment: string) => {
    contactPage.writeComment(comment)
    contactPage.setRating(rating)
})

When("I complete the captcha", () => {
     contactPage.solveCaptcha();
})

When ( "I submit the feedback", () => {
    contactPage.submit();
})

When ( "I don't fill anything", () => {
    cy.log(' We\'re not doing anything in this step')
})

Then("The feedback button should be disabled", () => {
    contactPage.findSubmitButton().should('be.disabled')
})

Then("I should receive {string}", (expectedMessage: string) => {
    cy.contains(expectedMessage).should('exist')
})