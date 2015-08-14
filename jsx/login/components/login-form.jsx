var React = require('react'),
    Link = require('react-router').Link;

var {Button, Input, Grid, Row, Col, Glyphicon} = require('react-bootstrap');

var login = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    };
  },

  validationState() {
    let length = this.state.value.length;
    if (length > 10) { return 'success'; }
    else if (length > 5) { return 'warning'; }
    else if (length > 0) { return 'error'; }
  },

  handleChange() {
    this.setState({
      value: this.refs.input.getValue()
    });
  },

render() {
  return (
    <Grid className="loginForm">
      <Row>
        <Col xs={12} sm={8} md={6}>
          <label for="login">Login</label>
            <Input
             type='text'
             ref='input'
             value={this.state.value}
             placeholder='User Name'
             bsStyle={this.validationState()}
             hasFeedback
             onChange={this.handleChange}
             />
           </Col>
      </Row>

      <Row>
        <Col xs={12} sm={8} md={6}>
           <Input
              type='text'
              ref='input'
              value={this.state.value}
              placeholder='Password'
              bsStyle={this.validationState()}
              hasFeedback
              onChange={this.handleChange}
            />
        </Col>
      </Row>

      <Row>
        <Col  xs={12} sm={8} md={6}>
        <Button bsStyle='primary' bsSize='medium' block>Login</Button>
        </Col>
      </Row>
    </Grid>
  );
}

});

module.exports = login;
