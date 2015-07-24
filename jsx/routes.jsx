var React = require('react'),
    Router = require('react-router'),
    App = require('./app');


var Route = Router.Route,
    Redirect = Router.Redirect,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute;

var routes = (
<Route name="Home" path="/" handler={App}></Route>

);

module.exports = routes;
