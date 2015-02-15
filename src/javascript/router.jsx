var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Link = Router.Link;

var flux = require('./flux');

var Index = require('./components/index');
var Tutorial = require('./components/tutorial');

var routes = (
    <Route path="/" handler={Index}>
        <Route path="/:chapter/:level" handler={Tutorial} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  var params = state.params;
  React.render(<Handler flux={flux} params={params}/>, document.getElementById('app'));
});
