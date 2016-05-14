const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'client')));

app.use('/api/v1', require('./middleware/jwtAuth'), require('./routes/api/v1'));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ message: 'Invalid token' });
  }
  next();
});

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});

module.exports = app;
