const { build } = require('../helper');

describe('example tests', () => {
  const app = build();

  test('example is loaded', async () => {
    const res = await app.inject({
      url: '/example',
    });
    expect(res.payload).toEqual('this is an example 1');
  });
});
