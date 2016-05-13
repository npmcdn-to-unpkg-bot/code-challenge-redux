const app = new (require('express'))();
const port = 3000;

app.use((req, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/../client/index.html`);
});

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});

module.exports = app;
