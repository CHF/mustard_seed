var React = require('react'),
  Router = require('react-router'),
  App = require('./app');

var Route = Router.Route,
  Redirect = Router.Redirect,
  DefaultRoute = Router.DefaultRoute,
  NotFoundRoute = Router.NotFoundRoute;

var Login = require('./login/components/login-form');

var routes = (
  <Route handler={App} path="/">
    {/* <Route name="Profile" path="profile" handler={}>
    <Route name="Settings" path="settings" handler={} />
    </Route>
   <Route name="Sign Up" path="sign-up" handler={} />*/}
    <Route  handler={Login} name="Log In" path="log-in"/>
    {/* <Route name="Home" path="home" handler={} />
  <NotFoundRoute handler={} />*/}
  </Route>
);

module.exports = routes;
