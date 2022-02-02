const { createYield } = require("typescript");

describe('My Test', () => {
    it("Visit", () => {
        cy.visit('http://localhost:4200'); 
    });
});