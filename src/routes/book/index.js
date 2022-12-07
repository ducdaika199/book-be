module.exports = async (fastify) => {
  fastify.get('/', async () => {
    const allBooks = await fastify.prisma.book.findMany();
    return allBooks;
  });

  fastify.post('/', async (req) => {
    const book = await fastify.prisma.book.create({ data: req.body });
    return book;
  });

  fastify.put('/:id', async (req) => {
    const { title, description, published } = req.body;
    const book = await fastify.prisma.book.update({
      where: { id: Number(req.params.id) },
      data: {
        title,
        description,
        published,
      },
    });
    return book;
  });

  fastify.get('/:id', async (req) => {
    const book = await fastify.prisma.book.findUnique({
      where: { id: Number(req.params.id) },
    });
    return book;
  });

  fastify.delete('/:id', async (req) => {
    const book = await fastify.prisma.book.delete({
      where: { id: Number(req.params.id) },
    });
    return book;
  });
};
