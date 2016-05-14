const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.dev');

const app = express();
const port = 3000;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use('/api/v1', require('./server/middleware/jwtAuth'), require('./server/routes/api/v1'));

app.use((req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
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
