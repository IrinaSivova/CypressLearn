import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://sanitarskyi-admin-panel-f873a4ce5323.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
