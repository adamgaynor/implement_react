var Home = React.createClass({
  render: function() {
    return(
      <div>
        <span>Hello World!</span>
        <Link to="/about">About</Link>

        <div className="container">
          {this.props.children}
        </div>

      </div>
    );
  }
});
