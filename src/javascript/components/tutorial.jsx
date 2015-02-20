var Navigation = Router.Navigation;
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var markdown = require("markdown").markdown;
var flux = require('../flux');

var Editor = require('./editor');
var Console = require('./console');

var config = require('../config/console');

/**
 * @Class Tutorial
 */

var Tutorial = React.createClass({

  mixins: [Navigation, FluxMixin, StoreWatchMixin('consoleStore', 'editorStore')],

  statics: {
    /**
     * Params is defined in router.jsx
     * @param params
     * @param {String} params.chapter Name of directory in /src/tutorials
     * @param {String} params.task Name of file in /src/tutorials/CHAPTER_NAME
     */
    willTransitionTo: function (transition, params) {
      flux.actions.editor.getMarkdown();
      flux.actions.editor.getCode();
    }
  },

  getStateFromFlux: function () {
    return {
      editor: this.getFlux().store('editorStore').getState(),
      console: this.getFlux().store('consoleStore').getState()
    }
  },

  handleEditorChange: function (event) {
    var target = event.target;
    flux.actions.editor.setCode(target.value);
  },

  handleClick: function (event) {
    var href = event.target.getAttribute('href') || '';
    var isLocalLink = href[0] === '/';

    if(isLocalLink) {
      event.preventDefault();
      this.transitionTo(href);
    }
  },

  handleCompileClick: function () {
    this.getFlux().actions.console.compile(this.state.editor.code);
  },

  render: function () {
    return (
        <div className="tutorial">
          <div className="left">
            <Editor handleChange={this.handleEditorChange} value={this.state.editor.code} />
            <div className="horizontal" />
            <Console handleCompileClick={this.handleCompileClick} value={this.state.console.isLoadingCode ? config.isLoadingText : this.state.console.stdout} />
          </div>
          <div className="vertical" />
          <div className="right">
            <div className="markdown">
              <div onClick={this.handleClick} dangerouslySetInnerHTML={{__html: markdown.toHTML(this.state.editor.markdown)}} />
            </div>
          </div>
        </div>
    )
  }

});

module.exports = Tutorial;