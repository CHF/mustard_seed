var React = require('react'),
    Link = require('react-router').Link;

var {Button, Input, Grid, Row, Col} = require('react-bootstrap');

var login = React.createClass({
  getInitialState: function() {
    return {
      userName: '',
      password: ''
    };
  },

    handleUserName (){
      this.setState({
        userName: this.refs.userName.getValue()
      });
    },

  //8-20 characters long, no symbols, upper case, lowercase, and numbers allowed
    validateUserName() {
      // regex from
      let length = this.state.userName.length;
      var re = /^(?=.{8,20}$)[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
      if (re.test(this.state.userName)) {return 'success';}
      else if (length > 5) {return 'warning';}
      else if (length > 0) {return 'error';}
    },

    handlePassword (){
      this.setState({
        password: this.refs.password.getValue()
      });
    },

  //1 number, 1 lowercase, 1 uppercase, 1 symbol, and 8-15 characters
    validatePassword() {
      // regex from http://stackoverflow.com/questions/5859632/regular-expression-for-password-validation
      let length = this.state.password.length;
      var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/;
      if (re.test(this.state.password)) {return 'success';}
      else if (length > 5) {return 'warning';}
      else if (length > 0) {return 'error';}
    },

render() {
  return (
    <Grid className="inputForm">
      <Row><Col smOffset={2} mdOffset={3}><h1>Login</h1></Col></Row>
        <Row>
          <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
             <Input
                type='text'
                value={this.state.userName}
                placeholder='User Name'
                ref="userName"
                onChange={this.handleUserName}
                bsStyle={this.validateUserName()}
                hasFeedback
              />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
             <Input
                type='text'
                value={this.state.password}
                placeholder='Password'
                ref="password"
                onChange={this.handlePassword}
                bsStyle={this.validatePassword()}
                hasFeedback
              />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
          <Button bsStyle='primary' bsSize='medium' block>Login</Button>
          </Col>
        </Row>
      </Grid>
    );
  }

});

module.exports = login;
