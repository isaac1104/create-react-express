module.exports = app => {
  app.get('/api/test', (_req, res) => {
    res.send({
      status: 200,
      message: 'This is the test API route. You can also make other calls to REST APIs.'
    });
  });
};
