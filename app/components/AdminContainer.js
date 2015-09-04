var React = require('react');
var SearchBar = require('./SearchBar');
var ListView = require('./ListView');
var View = require('./View');
var adminStore = require('../stores/adminStore');
var adminAction = require('../actions/adminAction');

var AdminConstants = React.createClass({
  getInitialState: function() {
    console.log('getInitialState');
    return adminStore.getStore();
  },
  _onChange: function(){
    this.setState({
      list: adminStore.getListItems()
    });
  },
  _setSearchItems: function(items) {
    this.setState({
      search: adminStore.getSearchItems()
    });
  },
  _setViewItems: function(items) {
    this.setState({
      view: adminStore.getViewItems()
    });
  },
  _search: function(items) {
    this.setState({
      status: {ListView : true, View: false}
    });
    adminAction.search(items);
  },
  _delete: function(index) {
    adminAction.delete(index);
  },
  _openAddView: function() {
    console.log('_openAddView');
    this.setState({
      status: {ListView : false, View: true}
    });
    adminAction.setViewItems(100, 0);
  },
  _add: function(items) {
    this.setState({
      status: {ListView : true, View: false}
    });
    adminAction.add(items);
  },
  componentDidMount: function() {
    adminStore.addChangeListener(this._onChange);
    adminStore.addChangeSearchItemsListener(this._setSearchItems);
    adminStore.addChangeViewItemsListener(this._setViewItems);
    adminAction.setSearchItems(100);
    console.log('componentDidMount');
  },
  componentWillUnmount: function() {
    adminStore.removeChangeListener(this._onChange);
    adminStore.removeChangeSearchItemsListener(this._setSearchItems);
    adminStore.removeChangeViewItemsListener(this._setViewItems);
    console.log('componentWillUnmount');
  },
  render: function() {
    return (
      <div>
        <SearchBar search={this._search} add={this._openAddView} items={this.state.search} />
        <ListView items={this.state.list} delete={this._delete} status={this.state.status.ListView} />
        <View items={this.state.view} add={this._add} status={this.state.status.View} />
      </div>
    );
  }
});

module.exports = AdminConstants;
