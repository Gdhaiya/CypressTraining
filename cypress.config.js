const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "k8npa2",
  CYPRESS_RECORD_KEY: "46575950-3ff6-41f1-9942-7e6a4a2f2231",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
