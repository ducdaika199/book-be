module.exports = async (fastify) => {
  fastify.get('/', async () => ({ root: true }));
};
