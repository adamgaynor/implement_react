var Router = window.ReactRouter.Router
var Route = window.ReactRouter.Route
var IndexRoute = window.ReactRouter.IndexRoute
var History = window.ReactRouter.browserHistory
var Link = window.ReactRouter.Link

var MainRouter = React.createClass({

  render: function() {
    return(
      <Router history={History}>
      {/* The Route can be given a component,
        which can have children rendered inside of it */}
        <Route path="/" component={Home} >
          <IndexRoute component={Home} />
          <Route path="/about" component={About}/>
        </Route>
      </Router>
    );
  }
});
