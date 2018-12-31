const serverResponses = require('../responses/server-responses');
const messages = require('../responses/messages');

const events = {}


events.logEvent = function(req, res) {
  let {
  	logLevel,userPrincipal,eventType,eventDetail
  }= req.body;
  db.collection('events').insertOne({
  	logLevel,userPrincipal,eventType,eventDetail
  }, (err, result) => {
    if (err)
    serverResponses.sendError(res, messages.INTERNAL_SERVER_ERROR);
    
    return serverResponses.sendSuccess(res, messages.SUCCESSFUL);
  })
};

events.getEvents = function(req, res) {
	let { logLevel,userPrincipal,eventType } = req.query;
	let query = { };
	if(logLevel)
		query.logLevel = logLevel;
	if (userPrincipal)
		query.userPrincipal = userPrincipal;
	if (eventType)
		query.eventType = eventType;

  db.collection('events').find(query).toArray(function(err,results){
  	if(err)
		return serverResponses.sendError(res, messages.INTERNAL_SERVER_ERROR, err);
	return serverResponses.sendSuccess(res, messages.SUCCESSFUL, results);
  	});
}

module.exports = events;