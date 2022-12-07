const { data } = require('./pokemon');

async function connect() {
  return Promise.resolve();
}

class PrismaClient {
  constructor() {
    this.$connect = connect.bind(this);
    this.pokemon = {
      findMany: () => Promise.resolve(data),
      findUnique: (query) => {
        if (query.where.id === 1) {
          return Promise.resolve(data[0]);
        }
        return Promise.reject();
      },
      delete: (query) => {
        if (query.where.id === 1) {
          return Promise.resolve(data[0]);
        }
        return Promise.reject(new Error('record not found'));
      },
      create: (payload) => {
        const returned = {
          id: 1,
          published: false,
          ...payload.data,
        };
        return Promise.resolve(returned);
      },
      update: (query) => {
        if (query.where.id === 1) {
          const returned = {
            ...data[0],
            ...query.data,
          };
          return Promise.resolve(returned);
        }
        return Promise.reject(new Error('record not found'));
      },
    };
  }
}

module.exports = {
  PrismaClient,
};
