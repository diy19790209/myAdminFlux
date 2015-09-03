var React = require('react');
//var ListContainer = require('./components/ListContainer');
var AdminContainer = require('./components/AdminContainer');
//var SearchBar = require('./components/SearchBar');

var App = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <AdminContainer />
        </div>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)
