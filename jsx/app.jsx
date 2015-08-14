var React = require('react/addons'),
    Router = require('react-router'),
    Head = require('./meta/head'),
    Scripts = require('./meta/scripts');

    //Footer = require('./shared/Footer');

var Portal = Router.RouteHandler;

var {Grid, Row, Col} = require('react-bootstrap');

var App = React.createClass({

  render: function() {
    return (
      <html>
        <Head/>
        <body>
          <Grid fluid={true}>
            <Row>
              <Col xs={12}>
                <Portal/>
              </Col>
            </Row>
          </Grid>
          <Scripts/>
        </body>
      </html>
      );
  }
});

module.exports = App;
