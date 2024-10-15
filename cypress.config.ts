import { defineConfig } from "cypress";

export default defineConfig({

  pageLoadTimeout: 120000,

  e2e: {
    baseUrl: 'https://sanitarskyi-admin-panel-f873a4ce5323.herokuapp.com',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
