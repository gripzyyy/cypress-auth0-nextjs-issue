describe("Auth", () => {
  beforeEach(() => {
    // Auth via the UI
    // cy.loginToAuth0(
    //   Cypress.env('auth0_username'),
    //   Cypress.env('auth0_password')
    // )
    // Login via POST request
    cy.loginByAuth0Api(
      Cypress.env("auth0_username"),
      Cypress.env("auth0_password")
    );
  });
  it("check login", () => {
    //cy.get("[data-cy=login-btn]").click();
    //cy.get("[data-cy=logout-btn]").should("be.visible");
  });
});
