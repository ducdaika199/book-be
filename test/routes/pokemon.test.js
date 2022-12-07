const { build } = require('../helper');

describe('pokemon tests', () => {
  const app = build();

  test('pokemon list is loaded', async () => {
    const res = await app.inject({
      url: '/pokemon',
    });
    const data = JSON.parse(res.payload);
    const expected = [
      {
        id: 1,
        title: 'Pikachu',
        description: 'Electric mouse',
      },
    ];
    expect(data).toStrictEqual(expected);
  });

  test('pokemon can be gotten by id', async () => {
    const res = await app.inject({
      url: '/pokemon/1',
    });
    const data = JSON.parse(res.payload);
    const expected = [
      {
        id: 1,
        title: 'Pikachu',
        description: 'Electric mouse',
      },
    ];
    expect(data).toStrictEqual(expected[0]);
  });

  test('pokemon can not be gotten by wrong id', async () => {
    const res = await app.inject({
      url: '/pokemon/wrong-id',
    });
    expect(res.payload).toEqual('');
  });

  test('pokemon can be deleted by id', async () => {
    const res = await app.inject({
      method: 'DELETE',
      url: '/pokemon/1',
    });
    const data = JSON.parse(res.payload);
    const expected = [
      {
        id: 1,
        title: 'Pikachu',
        description: 'Electric mouse',
      },
    ];
    expect(data).toStrictEqual(expected[0]);
  });

  test('pokemon can not be deleted by wrong id', async () => {
    const res = await app.inject({
      method: 'DELETE',
      url: '/pokemon/wrong-id',
    });
    const data = JSON.parse(res.payload);
    expect(data.message).toEqual('record not found');
  });

  test('pokemon can be added', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/pokemon',
      payload: {
        title: 'Pikachu',
        description: 'Electric mouse',
      },
    });
    const data = JSON.parse(res.payload);
    const expected = [
      {
        id: 1,
        title: 'Pikachu',
        description: 'Electric mouse',
        published: false,
      },
    ];
    expect(data).toStrictEqual(expected[0]);
  });

  test('pokemon can be updated', async () => {
    const res = await app.inject({
      method: 'PUT',
      url: '/pokemon/1',
      payload: {
        title: 'Pikachu Renamed',
      },
    });
    const data = JSON.parse(res.payload);
    expect(data.title).toEqual('Pikachu Renamed');
  });
});
