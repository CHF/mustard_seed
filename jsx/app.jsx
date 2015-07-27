var React = require('react/addons'),
    Router = require('react-router'),

    Head = require('./meta/Head'),
    actions = require('./actions/actions'),
    Footer = require('./shared/Footer');

var RouteHandler = Router.RouteHandler;

var {Grid, Row, Col} = require('react-bootstrap');

var App = React.createClass({

  render: function() {
    return (
      <html>
        <Head/>
        <body>
          <Grid fluid={true}>
            <Navigation/>
            <Row>
              <Col xs={12}>
                <RouteHandler/>
              </Col>
            </Row>
            <Footer/>
          </Grid>
          <AppScripts/>
        </body>
      </html>
      );
  }
});

module.exports = App;
