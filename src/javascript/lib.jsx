/* @flow */

var React = require('react/addons');
var Router = require('react-router');
var localStore = require('store');
var Fluxxor = require('fluxxor');
var log = require('loglevel');

window.React = React;
window.Router = Router;
window.localStore = localStore;
window.Fluxxor = Fluxxor;
window.log = log;

var config = require('./config/log');
log.setLevel(config.level);