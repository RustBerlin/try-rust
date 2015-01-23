var constants = require('../constants/files');

module.exports = Fluxxor.createStore({

  initialize: function () {
    this.state = {
      isLoadingMarkdown: false,
      isLoadingRust: false,
      isLoadingMarkdownError: false,
      isLoadingRustError: false,
      rust: '',
      markdown: ''
    };

    this.bindActions(
        constants.GET_MARKDOWN, this.onGetMarkdown,
        constants.GET_MARKDOWN_SUCCESS, this.onGetMarkdownSuccess,
        constants.GET_MARKDOWN_FAIL, this.onGetMarkdownFail,
        constants.GET_RUST, this.onGetRust,
        constants.GET_RUST_SUCCESS, this.onGetRustSuccess,
        constants.GET_RUST_FAIL, this.onGetRustFail
    );
  },

  onGetMarkdown: function () {
    this.state.isLoadingMarkdown = true;

    this.emit('change');
  },

  onGetMarkdownSuccess: function (payload) {
    this.state.isLoadingMarkdown = false;
    this.state.isLoadingMarkdownError = false;
    this.state.markdown = payload;
    this.emit('change');
  },

  onGetMarkdownFail: function () {
    this.state.isLoadingMarkdown = false;
    this.state.isLoadingMarkdownError = true;
    this.emit('change');
  },



  onGetRust: function () {
    this.state.isLoadingRust = true;
    this.emit('change');
  },

  onGetRustSuccess: function (payload) {
    this.state.isLoadingRust = false;
    this.state.isLoadingRustError = false;
    this.state.rust = payload;
    this.emit('change');
  },

  onGetRustFail: function () {
    this.state.isLoadingRust = false;
    this.state.isLoadingRustError = true;
    this.emit('change');
  },


  getState: function () {
    return this.state;
  }

});
