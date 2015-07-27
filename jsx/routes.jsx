var React = require('react'),
    Router = require('react-router'),
    App = require('./app');


var Route = Router.Route,
    Redirect = Router.Redirect,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute;

var routes = (
<Route path="/" handler={App}>
  <Route name="Profile" path="profile" handler={}>
    <Route name="Settings" path="settings" handler={} />
  </Route>
  <Route name="Sign Up" path="sign-up" handler={} />
  <Route name="Log In" path="log-in" handler={} />
  <Route name="Home" path="home" handler={} />
  <NotFoundRoute handler={} />
</Route>
);

module.exports = routes;
