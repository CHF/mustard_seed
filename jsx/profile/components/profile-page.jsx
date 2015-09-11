var React = require('react'),
    Link = require('react-router').Link;

var {Grid, Row, Col, Thumbnail, Button} = require('react-bootstrap');
var CommentBox = require('./CommentBox');

var Profile = React.createClass({
render() {

  return (
    <Grid fluid>
      <Row>
        <img className="top1 layer1" src="/assets/mustard_seed.jpg" height='300' width='1100'/>
      </Row>
      <Row>
         <Col xs={5} md={3}>
          <Thumbnail className="layer2" alt='242x200' src='/assets/potato.jpg' height={12} width={12}>

          </Thumbnail>
        </Col>
     </Row>

     <Row>
       <div className="content">
         <h1>Welcome, User!</h1>
            <p>This is content.</p>
       </div>
     </Row>

     <Row>
       <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
        <CommentBox/>
       </Col>
     </Row>
    </Grid>
  );
}
});

module.exports = Profile;
