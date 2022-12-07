const fp = require('fastify-plugin');
const healthcheck = require('fastify-healthcheck');

/**
 * This plugin adds health check endpoints to satisfy Kubernetes probes
 *
 * @see https://github.com/smartiniOnGitHub/fastify-healthcheck
 */
module.exports = fp(async (fastify) => {
  fastify.register(healthcheck);
});
