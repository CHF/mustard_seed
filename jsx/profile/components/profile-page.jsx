var React = require('react'),
    Link = require('react-router').Link;

var {Grid, Row, Col, Thumbnail} = require('react-bootstrap');
var CommentBox = require('../../posts/components/CommentBox.jsx');

var Profile = React.createClass({
render() {
      var data = [
        {author: "Andrew Kim", text: "What an awesome website!"},
        {author: "Awkward Turtle", text: "SUGOI DESUNE!"}
      ];
  return (
    <Grid>
      <Row><Col><h1>Profile</h1></Col></Row>

      <Row>
        <Col xs={5} md={3}>
          <Thumbnail src='/assets/rsz_potato.jpg' alt='242x200' className="contrast">
            <h3>This is a Potato</h3>
            <p>My, what a mighty fine potato.</p>
          </Thumbnail>
        </Col>
     </Row>

     <Row>
      <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
        I am content.
        <CommentBox data={data} url="comments.json" pollInteravl={2000} />
      </Col>
     </Row>
    </Grid>
  );
}
});

module.exports = Profile;
