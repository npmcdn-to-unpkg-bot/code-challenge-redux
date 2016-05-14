const Promise = require('bluebird');
const AWS = require('aws-sdk');
const credentials = new AWS.Credentials(process.env.ACCESS_KEY_ID, process.env.SECRET_ACCESS_KEY);


AWS.config.update({
  credentials,
  region: 'us-west-2',
  endpoint: process.env.DYNAMO_URI,
});

const dynamo = module.exports = {
  db: Promise.promisifyAll(new AWS.DynamoDB),
  client: Promise.promisifyAll(new AWS.DynamoDB.DocumentClient),
};

dynamo.client.deleteAll = function deleteAll(params, done) {
  dynamo.client.scan(params, (err, results) => {
    if (err) return done(err);
    const len = results.Items.length;
    if (len === 0) done(null, { ItemsDeleted: 0 });
    let counter = 0;
    let team;
    for (let i = 0; i < results.Items.length; i++) {
      team = results.Items[i];
      params.Key = { id: team.id };
      dynamo.client.delete(params, () => {
        if (++counter === len) {
          done(null, { ItemsDeleted: counter });
        }
      });
    }
  });
};
