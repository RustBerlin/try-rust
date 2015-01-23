var PlayStore = require('./play');
var FilesStore = require('./files');

module.exports = {
  playStore: new PlayStore(),
  filesStore: new FilesStore()
};
