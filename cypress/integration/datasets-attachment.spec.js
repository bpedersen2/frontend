/// <reference types="Cypress" />

describe("Datasets", () => {
  beforeEach(() => {
    cy.login(Cypress.config("username"), Cypress.config("password"));

    cy.createDataset("raw");

    cy.server();
    cy.route("POST", "/api/v3/Datasets/**/*").as("upload");
  });

  afterEach(() => {
    cy.removeDatasets();
  });

  describe("Add Attachment", () => {
    it("should go to dataset details and add an attachment using the dropzone", () => {
      cy.visit("/datasets");

      cy.get(".mat-row")
        .contains("Cypress Dataset")
        .click();

      cy.get(".mat-tab-label")
        .contains("Attachments")
        .click();

      cy.fixture("attachment-image").then(file => {
        cy.get(".dropzone").upload(
          {
            fileContent: file.content,
            fileName: file.name,
            mimeType: file.mimeType
          },
          { subjectType: "drag-n-drop" }
        );
      });

      cy.wait("@upload").then(response => {
        expect(response.method).to.eq("POST");
        expect(response.status).to.eq(200);
      });

      cy.get(".attachment-card #caption").should(
        "have.value",
        "SciCatLogo.png"
      );
    });

    it("should go to dataset details and add an attachment using the browse button", () => {
      cy.visit("/datasets");

      cy.get(".mat-row")
        .contains("Cypress Dataset")
        .click();

      cy.get(".mat-tab-label")
        .contains("Attachments")
        .click();

      cy.fixture("attachment-image").then(file => {
        cy.get("button")
          .contains("Browse")
          .click()
          .upload(
            {
              fileContent: file.content,
              fileName: file.name,
              mimeType: file.mimeType
            },
            { subjectType: "drag-n-drop" }
          );
      });

      cy.wait("@upload").then(response => {
        expect(response.method).to.eq("POST");
        expect(response.status).to.eq(200);
      });

      cy.get(".attachment-card #caption").should(
        "have.value",
        "SciCatLogo.png"
      );
    });
  });
});
