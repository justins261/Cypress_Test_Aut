const { defineConfig } = require("cypress");

module.exports = {
  projectId: "cdawks",
  // ...rest of the Cypress project config
}


module.exports = defineConfig({
  projectId: 'cdawks',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
