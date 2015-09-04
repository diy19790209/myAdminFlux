var AdminDispatcher = require('../dispatcher/AdminDispatcher');
var AdminConstants = require('../constants/AdminConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var React = require('react/addons');

var CHANGE_EVENT = 'change';
var CHANGE_SEARCH_ITEMS = 'change_search_items';
var CHANGE_VIEW_ITEMS = 'change_view_items';

var _store = {
  search: [],
  list:{cloumn:[], lists:[]},
  view:[],
  status: {ListView : true, View: false}
};

var addItem = function(items){
  console.log('addItem');
  _store.list.lists = React.addons.update(_store.list.lists, {$push: [items]});
  console.log(_store.list.lists);
};

var setSearchItems = function(items) {
   console.log('setSearchItems');
   _store.search = items;
};

var setViewItems = function(items) {
  console.log('setViewItems');
  _store.view = items;
}

var setList = function(items) {
   console.log('setList');
   _store.list = items;
};

var deleteListItem = function(index) {
   console.log('deleteListItem => ' + index);
   _store.list.lists = React.addons.update(_store.list.lists, {$splice: [[index,1]]});
};

var adminStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  addChangeSearchItemsListener: function(cb){
    this.on(CHANGE_SEARCH_ITEMS, cb);
  },
  removeChangeSearchItemsListener: function(cb){
    this.removeListener(CHANGE_SEARCH_ITEMS, cb);
  },
  addChangeViewItemsListener: function(cb){
    this.on(CHANGE_VIEW_ITEMS, cb);
  },
  removeChangeViewItemsListener: function(cb){
    this.removeListener(CHANGE_VIEW_ITEMS, cb);
  },
  getSearchItems: function() {
    return _store.search;
  },
  getViewItems: function() {
    return _store.view;
  },
  getListItems: function() {
    return _store.list;
  },
  getViewItems: function() {
    return _store.view;
  },
  getStore: function() {
    return _store;
  },
});

AdminDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case AdminConstants.ADD:
      addItem(action.data);
      adminStore.emit(CHANGE_EVENT);
    break;
    case AdminConstants.SEARCH:
      setList(action.data);
      adminStore.emit(CHANGE_EVENT);
    break;
    case AdminConstants.DELETE:
      deleteListItem(action.data);
      adminStore.emit(CHANGE_EVENT);
    break;
    case AdminConstants.SET_SEARCH_ITEMS:
      setSearchItems(action.data);
      adminStore.emit(CHANGE_SEARCH_ITEMS);
    break;
    case AdminConstants.SET_VIEW_ITEMS:
      setViewItems(action.data);
      adminStore.emit(CHANGE_VIEW_ITEMS);
    break;
    default:
      return true;
  }
});

module.exports = adminStore;
