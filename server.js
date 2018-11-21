const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

require('./models/User');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongodbURI);

app.use(express.json());
app.use(cookieSession({
  name: 'session',
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/test_route')(app);
require('./routes/auth_route')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server on PORT: ${PORT}`);
});

/*
1. Create 'dev.js' file inside the config folder.
2. Paste the code below and replace the key values.

module.exports = {
  googleClientID: 'YOUR_GOOGLE_CLIENT_ID',
  googleClientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  mongodbURI: 'YOUR_MONGODB_URI',
  cookieKey: 'RANDOM_STRING',
};

*/
