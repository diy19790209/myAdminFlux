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
      resultList: adminStore.getListItems()
    });
  },
  _setViewItems: function(index) {
    adminAction.setViewItems(index);
    this.setState({
      status: {ListView : false, View: true},
      view: adminStore.getViewItems()
    });
  },
  _search: function(items) {
    adminAction.search(items);
    this.setState({
      status: {ListView : true, View: false},
      resultList: adminStore.getListItems()
    });
  },
  _delete: function(index) {
    adminAction.delete(index);
  },
  _edit: function(items) {
    this.setState({
      status: {ListView : true, View: false}
    });
    adminAction.edit(items);
  },
  _openAddView: function() {
    adminAction.setViewItems(-1);
    this.setState({
      status: {ListView : false, View: true},
      view: adminStore.getViewItems()
    });
  },
  _add: function(items) {
    this.setState({
      status: {ListView : true, View: false}
    });
    adminAction.add(items);
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
        <SearchBar search={this._search} add={this._openAddView} items={this.state.search} />
        <ListView items={this.state.resultList} edit={this._setViewItems} delete={this._delete} status={this.state.status.ListView} />
        <View items={this.state.view} edit={this._edit} add={this._add} status={this.state.status.View} />
      </div>
    );
  }
});

module.exports = AdminConstants;
