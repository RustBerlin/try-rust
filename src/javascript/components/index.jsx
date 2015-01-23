var FluxMixin = Fluxxor.FluxMixin(React);

var Header = require('./header');
var Tutorial = require('./tutorial');
//var Markdown = require('./markdown');

/**
 * @Class Index
 */

module.exports = React.createClass({

  mixins: [ FluxMixin, Router.State ],

  render: function () {
    console.log(this.getParams());

    return (
        <div>
          <Header />
          <Tutorial path={this.getParams().path} />
        </div>
    )
  }

});
