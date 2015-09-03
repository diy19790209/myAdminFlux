var React = require('react');
var SearchBar = require('./SearchBar');
var adminStore = require('../stores/adminStore');
var adminAction = require('../actions/adminAction');

var AdminConstants = React.createClass({
  getInitialState: function() {
    console.log('getInitialState');
    return {
      list: adminStore.getListItems(),
      searchItems: adminStore.getSearchItems()
    }
  },
  _onChange: function(){
    this.setState({
      list: adminStore.getListItems()
    });
  },
  _search: function(items) {
    adminAction.search(items);
  },
  componentDidMount: function() {
    adminStore.addChangeListener(this._onChange);
    console.log('componentDidMount');
  },
  componentWillUnmount: function() {
    adminStore.removeChangeListener(this._onChange);
    console.log('componentWillUnmount');
  },
  render: function() {
    return (
      <div>
        <SearchBar search={this._search} items={this.state.searchItems} />
      </div>
    );
  }
});

module.exports = AdminConstants;
