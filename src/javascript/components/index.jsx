var State = Router.State;
var FluxMixin = Fluxxor.FluxMixin(React);

var Header = require('./header');
var Tutorial = require('./tutorial');
//var Markdown = require('./markdown');

/**
 * @Class Index
 */

module.exports = React.createClass({

  mixins: [FluxMixin, State],

  statics: {
    willTransitionTo: function (transition, params) {
      if (transition.path === '/') transition.redirect('/welcome/1');
    }
  },

  render: function () {
    return (
        <div>
          <Header />
          <Tutorial path={this.getParams().path} />
        </div>
    )
  }

});