var constants = require('../constants/console');

module.exports = Fluxxor.createStore({

  initialize: function () {
    this.state = {
      stdout: 'asdf',
      isLoadingCode: false,
      isLoadingCodeError: false
    };

    this.bindActions(
        constants.POST_CODE, this.onPostConsole,
        constants.POST_CODE_SUCCESS, this.onPostConsoleSuccess,
        constants.POST_CODE_FAIL, this.onPostConsoleFail
    );
  },

  onPostConsole: function () {
    this.state.isLoadingCode = true;
    this.emit('change');
  },

  onPostConsoleSuccess: function (stdout) {
    this.state.stdout = stdout || 'asdf';
    this.state.isLoadingCode = false;
    this.state.isLoadingCodeError = false;
    this.emit('change');
  },

  onPostConsoleFail: function (err) {
    this.state.isLoadingCode = false;
    this.state.isLoadingCodeError = true;
    this.emit('change');
  },

  getState: function () {
    return this.state;
  }

});
