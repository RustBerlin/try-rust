var Fluxxor = require('fluxxor');
var stores = require('./stores');
var actions = require('./actions');

var flux = new Fluxxor.Flux(stores, actions);

function writeLog(type, payload) {
  log.info("[Dispatch]", type, payload);
}

flux.on("dispatch", writeLog);

module.exports = flux;
