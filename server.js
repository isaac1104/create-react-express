const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

if (['production', 'ci'].includes(process.env.NODE_ENV)) {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
