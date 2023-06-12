import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    auth0_username: "",
    auth0_password: "",
    auth0_domain: "",
    auth0_client_id: "",
    auth0_client_secret:
      "",
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
