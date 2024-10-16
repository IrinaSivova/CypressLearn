import readXlsxFile from 'read-excel-file'

const file: File = `cypress/fixtures/excel/TestExcel.xlsx`;

it(`Read excel file`, () => {
    readXlsxFile(file).then((rows) => {
        console.log(file)
    })

})
