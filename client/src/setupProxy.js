const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:5000' }));
};
