context("Search", () => {
  it("End-to-end testing of the Search component", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
    cy.get("Input").type("15370496");
    cy.contains("Buscar pelo CEP").click();
  });
});
