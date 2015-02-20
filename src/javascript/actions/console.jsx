var reqwest = require('reqwest');
var constants = require('../constants/console');
var config = require('../config/console');

module.exports = {

  compile: function (code) {
    this.dispatch(constants.POST_CODE, code);

    var data = Object.assign({}, config.blueprint);
    data.code = code;

    var params = {
      url: config.compilerUrl,
      method: 'POST',
      type: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      crossOrigin: true
    };

    reqwest(params)
        .then(payload => this.dispatch(constants.POST_CODE_SUCCESS, payload.result))
        .catch(err => this.dispatch(constants.POST_CODE_FAIL, err));
  }

};