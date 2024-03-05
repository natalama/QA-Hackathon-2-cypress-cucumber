import {evaluate} from "mathjs";

class Contact {

    findCommment() {
        return cy.get('#comment')
    }

    findRating() {
        return cy.get('#rating')
    }

    findCaptchaToSolve() {
        return cy.findByLabelText("CAPTCHA code which must be solved");
    }

    findResult() {
        return cy.findByLabelText("Field for the result of the CAPTCHA code");
    }

    setCaptchaAnswer(answer: string) {
        return this.findResult().type(answer);
    }

    writeComment(comment: string) {
        return this.findCommment().type(comment)
    }

    setRating(rating: number) {
        for(let i = 1; i < rating; i++) {
            this.findRating().focus().type("{rightarrow}");
        }
    }



    solveCaptcha() {
        this.findCaptchaToSolve().invoke('text').then(captchaText => {
            const answer = evaluate(captchaText);
            this.setCaptchaAnswer(answer);
        })
    }

    submit() {
        this.findSubmitButton().click({force: true});
    }

    findSubmitButton() {
        return cy.get('#submitButton');
    }
}

export const contactPage = new Contact()