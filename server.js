const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const serverResponses = require('./responses/server-responses.js');
const messages = require('./responses/messages');
const database = require('./database/connection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

var url = process.argv[2];
if (!url) {
  throw new Error('Mongo url not mentioned');
}
database.connect(url);

var routes = require('./routes/index');
routes(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// catch 404 and forward to error handler
app.use((req, res) =>
  serverResponses.sendError(res, messages.NOT_FOUND));

app.listen(3000, function() {
  console.log('listening on 3000')
});
