// import readXlsxFile from 'read-excel-file';

it('Read excel file', () => {
    const filePath = 'cypress/fixtures/excel/TestExcel.xlsx';
    cy.task('readExcelFile', { filePath }).then((rows) => {
        console.log(rows);
        // expect(rows[0]).to.eq
    });
});

// it('Read excel file', () => {
//     cy.fixture('excel/TestExcel.xlsx', 'binary').then((content) => {
//         const blob = Cypress.Blob.binaryStringToBlob(content, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
//         const file = new File([blob], 'TestExcel.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//
//         readXlsxFile(file).then((rows) => {
//             console.log(rows);
//         });
//     });
// });
