const MongoClient = require('mongodb').MongoClient

exports.connect = (url) => {
   MongoClient.connect(url, { useNewUrlParser: true }, (err, client)=>{
  if (err) return console.log(err)
	  db = client.db('event-logging')
	  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', () => {
    // we're connected!
    console.log(`MongoClient connected on ${url}`);
    console.log('###########################################################################');
  });
   });
};
