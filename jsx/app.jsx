// Shims
require('intl');
require('aight');
require('es5-shim');

//  ------------------------- App Code -----------------------------------
var React = require('react/addons'),
    Router = require('react-router'),
    AppScripts = require('./meta/appScripts'),
    Navigation = require('./nav'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    sessionStore = require('./stores/SessionStore'),

    Head = require('./meta/Head'),
    actions = require('./actions/actions'),
    Footer = require('./shared/Footer');

  // Donations = require('donations');


// initializeTouchEvents
// React.initializeTouchEvents(true);
injectTapEventPlugin();

// Intl
var ReactIntl = require('react-intl'),
    IntlMixin = ReactIntl.IntlMixin;

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  mixins: [IntlMixin, Reflux.listenTo(sessionStore,"OnAppLoad")],


  getInitialState: function() {
    return {
      connected: false,
      loaded: false,
      user: false
    };
  },

  componentDidMount: function() {
    actions.appLoad();
  },


  render: function() {
    return (
      <html>
        <Head production={false}/>
        <body>
          <div className="container-fluid">
            <Navigation/>
            <RouteHandler/>
            <Footer/>
          </div>
          {/* [if lt IE 9]>
          <script>
            (function(){
              var ef = function(){};
              window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};
            }());
          </script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js"></script>
            <![endif] */}
          <AppScripts production={false}/>
        </body>
      </html>
      );
  }
});

module.exports = App;
