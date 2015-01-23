var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var markdown = require( "markdown" ).markdown;
var flux = require('../flux');

/**
 * @Class Console
 */

module.exports = React.createClass({

  mixins: [ FluxMixin, StoreWatchMixin('playStore', 'filesStore') ],

  statics: {
    willTransitionTo: function (params) {
      flux.actions.files.getMarkdown(params.chapter+'/'+params.level+'.md');
      flux.actions.files.getRust(params.chapter+'/'+params.level+'.rs');
    }
  },

  getStateFromFlux: function () {
    return this.getFlux().store('filesStore').getState();
  },

  render: function () {
    return (
        <div className="welcome" dangerouslySetInnerHTML={markdown.toHTML(this.state.markdown)} />
    )
  }

});
