var React = require('react'),
    Link = require('react-router').Link;

var {Button, Input, Grid, Row, Col, Glyphicon} = require('react-bootstrap');

var signUp = React.createClass({
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
    <Grid className="inputForm">
      <Row><Col smOffset={2} mdOffset={3}><h1>Sign Up</h1></Col></Row>
      <Row>
        <Col xs={6} sm={4} smOffset={2} md={3} mdOffset={3}>
            <Input
             type='text'
             value={this.state.value}
             placeholder='First Name'
             bsStyle={this.validationState()}
             hasFeedback
             onChange={this.handleChange}
             />
         </Col>

         <Col xs={6} sm={4} md={3}>
            <Input
             type='text'
             value={this.state.value}
             placeholder='Last Name'
             bsStyle={this.validationState()}
             hasFeedback
             onChange={this.handleChange}
             />
         </Col>
      </Row>

      <Row>
        <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
           <Input
              type='text'
              value={this.state.value}
              placeholder='Password'
              hasFeedback
              onChange={this.handleChange}
            />
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
           <Input
              type='text'
              value={this.state.value}
              help='Password must be at least 8 characters long'
              placeholder='Re-Enter Password'
              hasFeedback
              onChange={this.handleChange}
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
