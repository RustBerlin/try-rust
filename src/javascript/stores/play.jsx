var Fluxxor = require('fluxxor');
var constants = require('../constants/play');

module.exports = Fluxxor.createStore({

  initialize: function () {
    this.state = {

    };

    this.bindActions(
        constants.POST_PLAY_SUCCESS, this.onPostPlaySuccess,
        constants.POST_PLAY_FAIL, this.onPostPlayFail
    );
  },

  onPostPlaySuccess: function (stdout) {
    this.state = {
      stdout: stdout
    };

    this.emit('change');
  },

  onPostPlayFail: function (err) {

  },

  getState: function () {
    return this.state;
  }

});
