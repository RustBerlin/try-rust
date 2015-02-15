var Navigation = Router.Navigation;
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var markdown = require("markdown").markdown;
var flux = require('../flux');

var Editor = require('./editor');
var Console = require('./console');

/**
 * @Class Tutorial
 */

module.exports = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin('playStore', 'filesStore')],

  statics: {
    /**
     * Params is defined in router.jsx
     * @param params
     * @param {String} params.chapter Name of directory in /src/tutorials
     * @param {String} params.task Name of file in /src/tutorials/CHAPTER_NAME
     */
    willTransitionTo: function (transition, params) {
      flux.actions.files.getMarkdown();
      flux.actions.files.getRust();
    }
  },

  getInitialState: function () {
    return {
      editor: undefined
    }
  },

  getStateFromFlux: function () {
    return this.getFlux().store('filesStore').getState();
  },

  handleEditorChange: function (event) {
    console.log(event.target.value);
  },

  handleClick: function (event) {
    event.preventDefault();
    alert(event);
  },

  render: function () {
    return (
        <div className="tutorial">
          <div className="left">
            <Editor handleChange={this.handleEditorChange} value={this.state.editor} defaultValue={this.state.rust} />
            <div className="horizontal" />
            <Console text={'asdf'} />
          </div>
          <div className="vertical" />
          <div className="right">
            <div onClick={this.handleClick} className="markdown">
              <div dangerouslySetInnerHTML={{__html: markdown.toHTML(this.state.markdown)}} />
            </div>
          </div>
        </div>

    )
  }

});