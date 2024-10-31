import { defineConfig } from "cypress";
import * as mysql from 'cypress-mysql';
import * as xlsx from 'xlsx';
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';

export default defineConfig({

  pageLoadTimeout: 200000,

  e2e: {
    baseUrl: 'https://sanitarskyi-admin-panel-f873a4ce5323.herokuapp.com',
    watchForFileChanges: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    env: {
      db: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'employees'
      },
      allure: true
    },
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      mysql.configurePlugin(on);

      on('task', {
        // readExcelFile({ filePath }: { filePath: string }) {
        //   const workbook = xlsx.readFile(filePath);
        //   const sheetName = workbook.SheetNames[0];
        //   const sheet = workbook.Sheets[sheetName];
        //   return xlsx.utils.sheet_to_json(sheet);
        // }

        readExcelFile({ filePath }: { filePath: string }) {
          const workbook = xlsx.readFile(filePath);
          const result: { [key: string]: any[] } = {};
          workbook.SheetNames.forEach(sheetName => {
            const sheet = workbook.Sheets[sheetName];
            result[sheetName] = xlsx.utils.sheet_to_json(sheet);
          });
          return result;
        }
      });
      configureAllureAdapterPlugins(on, config);

      return config;
    },
  },
});
