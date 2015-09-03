var React = require('react'),
    Link = require('react-router').Link;

var {Button, Input, Grid, Row, Col} = require('react-bootstrap');

var signUp = React.createClass({
  getInitialState () {
    return {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      confirmPassword: '',
      email: ''
    };
  },

  handleFirstName (){
    this.setState({
      firstName: this.refs.firstName.getValue()
    });
  },

  handleLastName (){
    this.setState({
      lastName: this.refs.lastName.getValue()
    });
  },

  validateName(event) {
      let length = event.length;
      if (length > 0) {return 'success';}
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

  handleConfirmPassword (){
    this.setState({
      confirmPassword: this.refs.confirmPassword.getValue()
    });
  },

  validateConfirmPassword() {
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;
    let length = password.length;

    if (length > 10){
      if(confirmPassword === password){
      return 'success';
    } else {
      return 'error';
    }
  }
},

handleEmail() {
  this.setState({
    email: this.refs.email.getValue()
  });
},

validateEmail (event) {
  // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  let emailLength = event.length;
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailLength > 0){
    if (re.test(event)) {
      return 'success';
    } else {
      return 'error';
    }
  }
},

render() {
  return (
    <Grid className="inputForm">
      <Row><Col smOffset={2} mdOffset={3}><h1>Sign Up</h1></Col></Row>
        <Row>
          <Col xs={6} sm={4} smOffset={2} md={3} mdOffset={3}>
              <Input
               type='text'
               value={this.state.firstName}
               placeholder='First Name'
               ref="firstName"
               onChange={this.handleFirstName}
               bsStyle={this.validateName(this.state.firstName)}
               hasFeedback
               />
          </Col>

          <Col xs={6} sm={4} md={3}>
              <Input
               type='text'
               value={this.state.lastName}
               placeholder='Last Name'
               ref="lastName"
               onChange={this.handleLastName}
               bsStyle={this.validateName(this.state.lastName)}
               hasFeedback
               />
          </Col>
        </Row>

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
                value={this.state.email}
                placeholder='Email Address'
                ref="email"
                onChange={this.handleEmail}
                bsStyle={this.validateEmail(this.state.email)}
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
           <Input
              type='text'
              value={this.state.confirmPassword}
              placeholder='Re-Enter Password'
              ref="confirmPassword"
              onChange={this.handleConfirmPassword}
              bsStyle={this.validateConfirmPassword()}
              hasFeedback
            />
        </Col>
      </Row>

      <Row>
        <Col  xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
        <Button bsStyle='primary' bsSize='medium' block>Sign Up</Button>
        </Col>
      </Row>
    </Grid>
  );
}

});

module.exports = signUp;
