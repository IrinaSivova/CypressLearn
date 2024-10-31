

import { validate } from '@cypress/schema-tools';
import { validateBySchema } from '@cypress/schema-tools';
import pet from '../fixtures/petstore/pet.json'
import schema from '../fixtures/schema.json'


describe('API Schema Validation with JSON File', () => {

    it('should validate the JSON response against the pet schema', () => {
        // Load the schema from the JSON file
        cy.fixture('schema.json').then((schema) => {
            // Make a request to the API
            cy.request({
                method: "POST",
                url: "https://petstore.swagger.io/v2/pet",
                body: pet
            })
                .then((response) => {
                    // Assert the status code
                    expect(response.status).to.eq(200);

                    // Validate the response body against the schema
                    const validateSchema = validateBySchema(schema);
                    const result = validateSchema(response.body);
                    if (Array.isArray(result)) {
                        console.error("Validation errors:", result);
                    } else {
                        console.log("Validation succeeded!");
                    }
                    expect(result).to.be.true;

                });
        });
    });
});
