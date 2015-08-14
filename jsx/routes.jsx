var React = require('react'),
  Router = require('react-router'),
  App = require('./app');

var Route = Router.Route,
  Redirect = Router.Redirect,
  DefaultRoute = Router.DefaultRoute,
  NotFoundRoute = Router.NotFoundRoute;

var Login = require('./login/components/login-form');
var SignUp = require('./signup/components/signup-form');

var routes = (
  <Route handler={App} name="Home" path="/">
    {/* <Route name="Profile" path="profile" handler={}>
    <Route name="Settings" path="settings" handler={} />
    </Route>*/}
    <Route name="Sign Up" path="signup" handler={SignUp}/>
    <Route name="Log In" path="login" handler={Login}/>
    {/* <Route name="Home" path="home" handler={} />
  <NotFoundRoute handler={} />*/}
  </Route>
);

module.exports = routes;
