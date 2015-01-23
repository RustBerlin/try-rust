var reqwest = require('reqwest');
var constants = require('../constants/files');

module.exports = {

  getMarkdown: function (url) {
    this.dispatch(constants.GET_MARKDOWN);

    reqwest({ method: 'GET', url: url })
        .then(
            payload => this.dispatch(constants.GET_MARKDOWN_SUCCESS, payload),
            (err, message) => this.dispatch(constants.GET_MARKDOWN_FAIL, err, message)
        );
  },

  getRust: function (url) {
    this.dispatch(constants.GET_RUST);

    reqwest({ method: 'GET', url: url })
        .then(
            payload => this.dispatch(constants.GET_RUST_SUCCESS, payload),
            (err, message) => this.dispatch(constants.GET_RUST_FAIL, err, message)
        );

  }

};