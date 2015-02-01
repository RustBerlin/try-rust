var reqwest = require('reqwest');
var constants = require('../constants/files');

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

  getRust: function () {
    this.dispatch(constants.GET_RUST);

    reqwest({
      method: 'GET',
      url: window.location.href + '.rs',
      contentType: 'text/plain',
      type: 'html'
    })
        .then(payload => this.dispatch(constants.GET_RUST_SUCCESS, payload))
        .fail(err => this.dispatch(constants.GET_RUST_FAIL, err));

  }

};