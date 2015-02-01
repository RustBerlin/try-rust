var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Link = Router.Link;

/**
 * @Class Header
 */

module.exports = React.createClass({

  mixins: [ FluxMixin ],

  render: function () {
    return (
        <div className="header">
          <div className="pure-menu pure-menu-open pure-menu-horizontal pure-menu-fixed">
            <h1 className="pure-menu-heading" href="">Play Rust</h1>
          </div>
        </div>
    )
  }

});
