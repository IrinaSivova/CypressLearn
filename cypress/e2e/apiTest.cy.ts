import pet from '../fixtures/petstore/pet.json'

const apiUrl: string = 'https://petstore.swagger.io/v2'

let petId: number

pet.name = 'Automation User'
pet.tags.push({id:1,name:"qwe"})
pet.tags.push({id:2,name:"asd"})

it(`Create pet`, () => {

    pet.id = 834592374

    cy.request({
        method: 'POST', url: `${apiUrl}/pet`, body: pet
    }).then(response => {

        expect(response.body.id).not.eq(0)
        expect(response.body.name).eq(pet.name)
        expect(response.isOkStatusCode).to.be.true
        expect(response.status).to.eq(200)
        expect(response.headers.connection).to.eq('keep-alive')
        // expect(response.duration).to.be.greaterThan(50)
        // expect(response.duration).to.be.lessThan(200)

        petId = response.body.id

        cy.request({
            method: 'GET', url: `${apiUrl}/pet/${response.body.id}`
        }).then(response => {
            console.log(response)
            expect(response.body.id).not.eq(0)
            expect(response.body.name).eq(pet.name)
            expect(response.status).to.eq(200)
        })
    })
})

it(`Get pet by id`, () => {
    cy.request({
        method: 'GET', url: `${apiUrl}/pet/${petId}`
    }).then(response => {
        console.log(response)
        expect(response.body.id).not.eq(0)
        expect(response.body.name).eq(pet.name)
        expect(response.status).to.eq(200)
    })
})

it(`Update pet`, () => {

    pet.id = petId
    pet.name = 'Automation User Changed'
    pet.status = 'sold'

    cy.request({
        method: 'PUT', url: `${apiUrl}/pet`, body: pet
    }).then(response => {

        expect(response.body.id).not.eq(0)
        expect(response.body.name).eq(pet.name)
        expect(response.body.status).eq(pet.status)
        expect(response.status).to.eq(200)

        cy.request({
            method: 'GET', url: `${apiUrl}/pet/${response.body.id}`
        }).then(response => {
            console.log(response)
            expect(response.body.id).not.eq(0)
            expect(response.body.name).eq(pet.name)
            expect(response.body.status).eq(pet.status)
            expect(response.status).to.eq(200)
        })
    })
})

it(`Update pet`, () => {
    cy.request({
        method: 'GET', url: `${apiUrl}/pet/123123123`, failOnStatusCode: false
    }).then(response => {
        expect(response.status).eq(404)
    })
})
