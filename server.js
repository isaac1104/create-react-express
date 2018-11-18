const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

require('./models/User');
require('./utils/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongodbURI);

app.use(express.static('client/public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

require('./routes/test_route')(app);
require('./routes/auth_route')(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server on PORT: ${PORT}`);
});
