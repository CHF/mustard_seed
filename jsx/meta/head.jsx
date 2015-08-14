{/* This is HTML stuff*/}

var React = require('react');

var head = React.createClass({
  render: function() {
    return (
      <span>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/stylesheets/app.css" />
      </span>
    );
  }
});

module.exports = head;
