var React = require('react');
var {ButtonInput, Row, Input} = require('react-bootstrap');
var CommentForm = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Your name" ref="author" />
          <input type="text" placeholder="Say something..." ref="text" />
          <input className="btn btn-primary" type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = CommentForm;
