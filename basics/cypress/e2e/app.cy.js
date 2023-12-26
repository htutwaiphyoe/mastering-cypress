/// <reference types="Cypress" />

describe("Daily Tasks Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should shows image", () => {
    cy.get(".main-header").find("img");
  });

  it("should displays page title", () => {
    cy.get("h1").should("have.length", 1);
    cy.get("h1").contains(/daily tasks/i);
  });
});