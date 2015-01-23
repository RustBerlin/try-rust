var reqwest = require('reqwest');
var constants = require('../constants/play');

module.exports = {

  play: function (code) {
    this.dispatch(constants.POST_PLAY, code);

    reqwest({ method: 'POST', data: code })
        .then(
            payload => this.dispatch(constants.POST_PLAY_SUCCESS, payload),
            (err, message) => this.dispatch(constants.POST_PLAY_SUCCESS, err, message)
        );
  }

};