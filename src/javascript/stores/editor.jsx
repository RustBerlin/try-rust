var constants = require('../constants/editor');

module.exports = Fluxxor.createStore({

  initialize: function () {
    this.state = {
      code: '',
      markdown: '',
      isLoadingCodeError: true,
      isLoadingMarkdownError: true
    };

    this.bindActions(
        constants.GET_MARKDOWN_SUCCESS, this.onGetMarkdownSuccess,
        constants.GET_MARKDOWN_FAIL, this.onGetMarkdownFail,
        constants.GET_CODE_SUCCESS, this.onGetCodeSuccess,
        constants.GET_CODE_FAIL, this.onGetCodeFail,
        constants.SET_CODE, this.onSetCode
    );
  },

  onGetMarkdownSuccess: function (payload) {
    this.state.markdown = payload;
    this.state.isLoadingMarkdownError = false;
    this.emit('change');
  },

  onGetMarkdownFail: function () {
    this.state.isLoadingMarkdownError = true;
    this.emit('change');
  },

  onGetCodeSuccess: function (payload) {
    this.state.code = payload;
    this.state.isLoadingCodeError = false;
    this.emit('change');
  },

  onGetCodeFail: function () {
    this.state.isLoadingCodeError = true;
    this.emit('change');
  },

  onSetCode: function (payload) {
    this.state.code = payload;
    this.emit('change');
  },

  getState: function () {
    return this.state;
  }

});
