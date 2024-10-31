

import Ajv from "ajv";
import schema from "../fixtures/schema.json";
import pet from '../fixtures/petstore/pet.json'


describe("API Schema Validation", () => {
  it("should validate the JSON response against the schema", () => {
    // Load the schema from the fixture
    cy.fixture('schema.json').then((schema) => {
      // Make a request to the API
      cy.request({
        method: "POST", 
        url: "https://petstore.swagger.io/v2/pet", 
        body: pet})
        .then((response) => {
        // Assert the status code
        expect(response.status).to.eq(200);

        // Initialize AJV
        const ajv = new Ajv();
        const validate = ajv.compile(schema);

        // Validate the response body against the schema
        const isValid = validate(response.body);

        // Log validation errors if the schema doesn't match
        if (!isValid) {
          cy.log("Schema validation errors:", validate.errors);
        }

        // Assert that the schema validation passed
        expect(isValid).to.be.true;
      });
    });
  });
});




