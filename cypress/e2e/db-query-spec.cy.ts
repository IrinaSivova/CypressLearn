describe('Test select data from db and assert', () => {

    it('Query DB initial', () => {
        const query = 'select * from employees where emp_no = 10001';
        cy.query(query).then((res) => {
            expect(res[0].last_name).to.equal('Facello');
        });
    })

    it('Query DB', () => {
        const query = 'select * from employees where emp_no = 10001';
        cy.query(query).then((res) => {
            const employees = res as unknown as Employee[];

            cy.log(JSON.stringify(employees));

            if (employees) {
                expect(employees[0].last_name).to.equal('Facello');
            } else {
                throw new Error('Query result is undefined');
            }
        });
    })
})
