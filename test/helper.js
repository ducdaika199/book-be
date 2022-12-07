// This file contains code that we reuse
// between our tests.
const Fastify = require('fastify');
const fp = require('fastify-plugin');
const App = require('../src/app');

// Fill in this config with all the configurations
// needed for testing the application
function config() {
  return {};
}

// automatically build and tear down our instance
function build() {
  const app = Fastify();

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  beforeAll(async () => {
    app.register(fp(App), config());
    await app.ready();
  });

  // tear down our app after we are done
  afterAll(() => app.close.bind(app));

  return app;
}

module.exports = {
  config,
  build,
};
