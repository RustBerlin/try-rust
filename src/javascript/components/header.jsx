var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Link = Router.Link;

/**
 * @Class Console
 */

module.exports = React.createClass({

  mixins: [ FluxMixin ],

  render: function () {
    return (
        <div className="header">
          <div className="pure-menu pure-menu-open pure-menu-horizontal pure-menu-fixed">
            <a className="pure-menu-heading" href="">Play Rust</a>
            <ul>
              <li className="pure-menu-selected"><Link to="/">Home</Link></li>
              <li><Link to="/introduction/hello">Tour</Link></li>
            </ul>
          </div>
        </div>
    )
  }

});
