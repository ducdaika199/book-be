const fp = require('fastify-plugin');
const traps = require('@dnlup/fastify-traps');

/**
 * This plugin adds graceful shutdown handlers
 *
 * @see https://github.com/dnlup/fastify-traps
 */
module.exports = fp(async (fastify) => {
  fastify.register(traps, {
    strict: false,
    onClose() {
      fastify.log.info('Received onClose hook');
      fastify.log.info('Disconnecting from Prisma');
      fastify.prisma.$disconnect();
    },
  });
});
