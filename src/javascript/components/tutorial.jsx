var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var markdown = require("markdown").markdown;
var flux = require('../flux');

var Editor = require('./editor');
var Console = require('./console');

/**
 * @Class Console
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

  getStateFromFlux: function () {
    return this.getFlux().store('filesStore').getState();
  },

  render: function () {
    console.log(this.state.rust);
    return (
        <div className="tutorial pure-g">
          <div className="pure-u-1-2">
            <Editor code={this.state.rust} />
            <Console text="Hello World!" />
          </div>
          <div className="pure-u-1-2">
            <div className="l-box">
              <div dangerouslySetInnerHTML={{__html: markdown.toHTML(this.state.markdown)}} />
            </div>
          </div>
        </div>

    )
  }

});
