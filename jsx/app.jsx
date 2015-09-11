var React = require('react/addons'),
    Router = require('react-router'),
    Head = require('./meta/head'),
    Scripts = require('./meta/scripts');

    //Footer = require('./shared/Footer');

var Portal = Router.RouteHandler;

var {Grid, Row, Col, Navbar, NavDropdown, NavItem, MenuItem, Nav} = require('react-bootstrap');

var App = React.createClass({

  render() {
    let settingsIcon = <i className="fa fa-cog fa-fw"/>;

    return (
      <html>
        <Head/>
        <body>
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <Navbar fluid brand={<a href='./home'>Mustard-Seed</a>} className="logo">
                  <Nav navbar right>
                    <NavItem eventKey={1} href='./signup'><i className="fa fa-pencil fa-fw"/>&nbsp; SignUp</NavItem>
                    <NavItem eventKey={2} href='./login'><i className="fa fa-key"/>&nbsp; Login</NavItem>
                    <NavItem eventKey={3} href='./profile'><i className="fa fa-home"/>&nbsp; Profile</NavItem>
                    <NavDropdown eventKey={4} title={settingsIcon}>
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
