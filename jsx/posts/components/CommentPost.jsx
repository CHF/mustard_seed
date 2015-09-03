var React = require('react');
var {Well} = require('react-bootstrap');

var CommentPost = React.createClass({
  render() {
    return (
      <div className="comment">
        <Well bsSize='large'>
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </Well>
      </div>
    );
  }
});

module.exports = CommentPost;
