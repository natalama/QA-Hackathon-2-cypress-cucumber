import {When} from "@badeball/cypress-cucumber-preprocessor";
import pages from "../../fixtures/pages.json";

When('I visit {string} page', (pageName: string) => {
    cy.visit(pages[pageName]);
    cy.findByText("Dismiss").click();
});