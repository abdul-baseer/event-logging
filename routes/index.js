'use strict';
  var events = require('../controllers/events');

module.exports = function(app) {


  // routes
  app.route('/events')
    .post(events.logEvent)
    .get(events.getEvents);
};
