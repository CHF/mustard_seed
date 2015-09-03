var React = require('react/addons'),
    Router = require('react-router'),
    Head = require('./meta/head'),
    Scripts = require('./meta/scripts');

    //Footer = require('./shared/Footer');

var Portal = Router.RouteHandler;

var {Grid, Row, Col, Navbar, NavDropdown, NavItem, MenuItem, Nav} = require('react-bootstrap');

var App = React.createClass({

  render() {
    return (
      <html>
        <Head/>
        <body>
          <Grid fluid={true}>
            <Row>
              <Col xs={12}>

                <Navbar brand={<a href='./home'>Mustard-Seed</a>} className="logo">
                  <Nav navbar right>
                    <NavItem eventKey={1} href='./signup'>Sign Up</NavItem>
                    <NavItem eventKey={2} href='./login'>Login</NavItem>
                    <NavItem eventKey={3} href='./profile'>Profile</NavItem>
                    <NavDropdown eventKey={4} title='Settings'>
                      <MenuItem eventKey='1'>Privacy</MenuItem>
                      <MenuItem eventKey='2'>Notifications</MenuItem>
                      <MenuItem divider />
                      <MenuItem  eventKey='3'>Disable Account</MenuItem>
                    </NavDropdown>
                  </Nav>
                </Navbar>

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
