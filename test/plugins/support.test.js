const Fastify = require('fastify');
const Support = require('../../src/plugins/support');

test('support works standalone', async () => {
  const fastify = Fastify();
  fastify.register(Support);
  await fastify.ready();

  expect(fastify.someSupport()).toBe('hugs');

  await fastify.close();
});
