describe("Auth", () => {
  beforeEach(() => {
    cy.loginToAuth0(
      Cypress.env('auth0_username'),
      Cypress.env('auth0_password')
    )
    cy.visit("/");
  });
  it("check login", () => {
    //cy.get("[data-cy=login-btn]").click();
    //cy.get("[data-cy=logout-btn]").should("be.visible");
  });
});
