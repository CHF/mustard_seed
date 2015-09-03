var request = require('superagent');
var React = require('react'),
    Link = require('react-router').Link;

var {Button, Grid, Row, Col, Jumbotron} = require('react-bootstrap');
var Login = require('../../login/components/login-form.jsx');

var home = React.createClass({
  getInitialState() {
    return {
      apiVersion: "I don't know",
      clicked: false
    };
  },

  componentDidMount() {
    {/*This is AJAX stuff used by superagent*/}
    request
      .get('https://api.charityware.co/health')
      .end((err, res) =>{
        if (res.status === 200){
          this.setState({
            apiHealth: res.body.version
          });
        }
        if(err){
          this.setState({
            apiVersion: "An error occurred :("
          });
        }
      });
  },

  close() {
    this.setState({ clicked: !this.state.clicked });
  },

render() {
  return (
    <Grid>
        {!this.state.clicked && (
          <Row>
            <Jumbotron>
              <h1>Hello!</h1>
              <h2>What version is this API? {this.state.apiHealth}</h2>
              <p>Welcome to Mustard-Seed, a simple social media test that I, Andrew Kim, am doing to learn Front-End Web Development haha.</p>
              <p><Button bsStyle='primary' onClick={this.close}>Close</Button></p>
            </Jumbotron>
          </Row>
    )}
      <Row>
        <Col>
          <Login/>
        </Col>
      </Row>
    </Grid>
  );
}

});

module.exports = home;
