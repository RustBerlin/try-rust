var reqwest = require('reqwest');
var constants = require('../constants/editor');

module.exports = {

  getMarkdown: function () {
    this.dispatch(constants.GET_MARKDOWN);

    reqwest({
      method: 'GET',
      url: window.location.href + '.md',
      contentType: 'text/plain',
      type: 'html'
    })
        .then(payload => this.dispatch(constants.GET_MARKDOWN_SUCCESS, payload))
        .fail(err => this.dispatch(constants.GET_MARKDOWN_FAIL, err));
  },

  getCode: function () {
    this.dispatch(constants.GET_CODE);

    reqwest({
      method: 'GET',
      url: window.location.href + '.rs',
      contentType: 'text/plain',
      type: 'html'
    })
        .then(payload => this.dispatch(constants.GET_CODE_SUCCESS, payload))
        .fail(err => this.dispatch(constants.GET_CODE_FAIL, err));
  },

  setCode: function (payload) {
    this.dispatch(constants.SET_CODE, payload);
  }

};