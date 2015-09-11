var React = require('react'),
    Link = require('react-router').Link;

var {Grid, Row, Col, Thumbnail, Button, Input} = require('react-bootstrap');

var CommentBox = React.createClass({
  render() {
    return (
        <div>
          <h2 className="center">Comments</h2>
            <form className="form-horizontal">
              <Input type='text' label='Name' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
              <Input type='textarea' label='Comment' placeholder='Write Here!' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
            </form>
        </div>
    );
  }
});

module.exports = CommentBox;
