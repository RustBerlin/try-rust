var EditorStore = require('./editor');
var ConsoleStore = require('./console');

module.exports = {
  editorStore: new EditorStore(),
  consoleStore: new ConsoleStore()
};
