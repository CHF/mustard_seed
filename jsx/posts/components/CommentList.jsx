var React = require('react');
var CommentPost = require('./CommentPost');

var CommentList = React.createClass({
  getDefaultProps() {
    return {
        author: "Author T", text: "Howdy"
    };
},
  render () {
    var commentNodes  = this.props.data.map(function (comment) {
      return(
        <CommentPost author={comment.author}>
          {comment.text}
        </CommentPost>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

module.exports = CommentList;
