require('dotenv').config();

const path = require('path');
const AutoLoad = require('fastify-autoload');

module.exports = async (fastify, opts) => {
  // Place here your custom code!
  fastify.log.info(`Environment variables: FASTIFY_PORT: ${process.env.FASTIFY_PORT}`);

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: { ...opts },
  }).after((error) => {
    fastify.log.info(`After plugins registration, error if any: ${error}`);
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: { ...opts },
  });
};
