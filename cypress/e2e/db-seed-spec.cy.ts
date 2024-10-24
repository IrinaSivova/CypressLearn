// cypress/e2e/db-seed-spec.cy.ts
import moment from 'moment';
import { faker } from '@faker-js/faker';
import user from '../fixtures/dbUser.json';

const myUser = user as any;
myUser.employeeNumber = faker.number.int({ min: 1000, max: 9999 })
myUser.firstName = faker.person.firstName()
myUser.lastName = faker.person.lastName()
myUser.hireDate = faker.date.past({ years: 10, refDate: '2020-01-01' })

const email = faker.internet.email({provider: 'blabla.com'})

describe('Seed database', () => {
    beforeEach(() => {
        const deleteQuery = `DELETE FROM employees WHERE last_name IN ('Sanitarskyi', 'Smith', 'Johnson')`;
        cy.log(JSON.stringify(myUser));

        cy.query(deleteQuery).then(() => {
            const seedQuery = `
                INSERT INTO employees (emp_no, birth_date, first_name, last_name, gender, hire_date)
                VALUES (${myUser.employeeNumber}, '1953-09-02', '${myUser.firstName}', '${myUser.lastName}', 'M', '2005-03-15')`;

            cy.query(seedQuery);
        });
    });

    it('Verify seeded data', () => {

        cy.log(email)

        const query = `SELECT * FROM employees WHERE last_name = '${myUser.lastName}'`;
        cy.query(query).then((res: any) => {
            if (res && res.length > 0) {
                expect(res[0].last_name).to.equal(myUser.lastName);
                expect(res[0].first_name).to.equal(myUser.firstName);
                expect(moment(res[0].birth_date).format('YYYY-MM-DD')).to.equal('1953-09-02');
                expect(res[0].gender).to.equal('M');
                expect(moment(res[0].hire_date).format('YYYY-MM-DD')).to.equal('2005-03-15');
            } else {
                throw new Error('No data returned from query');
            }
        });
    });

    afterEach(() => {
        const deleteQuery = `DELETE FROM employees WHERE last_name IN ('Sanitarskyi', 'Smith', 'Johnson')`;
        cy.query(deleteQuery);
    });
});
