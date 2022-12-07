const fp = require('fastify-plugin');
const { PrismaClient } = require('@prisma/client');

/**
 * This plugin adds support for Prisma
 *
 * @see https://www.prisma.io/fastify
 */
module.exports = fp(async (fastify) => {
  const prisma = new PrismaClient();
  await prisma.$connect();

  fastify.decorate('prisma', prisma);
});
